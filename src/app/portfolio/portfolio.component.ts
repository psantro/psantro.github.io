import { DatePipe, DOCUMENT } from '@angular/common';
import { Component, LOCALE_ID, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { portfolioContent } from './portfolio-content';

type PortfolioProject = (typeof portfolioContent.work.projects)[number];

@Component({
  selector: 'app-portfolio',
  imports: [DatePipe],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  protected readonly content = portfolioContent;
  protected readonly menuOpen = signal(false);
  protected readonly carouselIndices = signal<Record<string, number>>({});
  protected readonly language = inject(LOCALE_ID).startsWith('es')
    ? 'es'
    : 'en';
  protected readonly alternateLanguage = this.language === 'en' ? 'es' : 'en';
  protected readonly languageHref = `/${this.alternateLanguage}/`;
  protected readonly resumeHref = `assets/resumes/resume-${this.language}.pdf`;

  constructor() {
    const document = inject(DOCUMENT);
    const canonicalUrl = `https://psantro.github.io/${this.language}/`;

    document.documentElement.lang = this.language;
    inject(Title).setTitle(this.content.meta.title);

    const meta = inject(Meta);
    meta.updateTag({
      name: 'description',
      content: this.content.meta.description,
    });
    meta.updateTag({ property: 'og:type', content: 'website' });
    meta.updateTag({ property: 'og:site_name', content: 'psantro' });
    meta.updateTag({ property: 'og:title', content: this.content.meta.title });
    meta.updateTag({
      property: 'og:description',
      content: this.content.meta.description,
    });
    meta.updateTag({ property: 'og:url', content: canonicalUrl });
    meta.updateTag({
      property: 'og:locale',
      content: this.language === 'es' ? 'es_ES' : 'en_US',
    });
    meta.updateTag({
      property: 'og:image',
      content: `${canonicalUrl}assets/images/profile/portrait.webp`,
    });

    let canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    for (const locale of ['en', 'es'] as const) {
      let alternate = document.querySelector<HTMLLinkElement>(
        `link[rel="alternate"][hreflang="${locale}"]`,
      );
      if (!alternate) {
        alternate = document.createElement('link');
        alternate.rel = 'alternate';
        alternate.hreflang = locale;
        document.head.appendChild(alternate);
      }
      alternate.hreflang = locale;
      alternate.href = `https://psantro.github.io/${locale}/`;
    }

    let defaultAlternate = document.querySelector<HTMLLinkElement>(
      'link[rel="alternate"][hreflang="x-default"]',
    );
    if (!defaultAlternate) {
      defaultAlternate = document.createElement('link');
      defaultAlternate.rel = 'alternate';
      defaultAlternate.hreflang = 'x-default';
      document.head.appendChild(defaultAlternate);
    }
    defaultAlternate.hreflang = 'x-default';
    defaultAlternate.href = 'https://psantro.github.io/';
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected currentImageIndex(projectId: string): number {
    return this.carouselIndices()[projectId] ?? 0;
  }

  protected currentImage(project: PortfolioProject) {
    return (
      project.images[this.currentImageIndex(project.id)] ?? project.images[0]
    );
  }

  protected previousImage(projectId: string, imageCount: number): void {
    this.moveCarousel(projectId, imageCount, -1);
  }

  protected nextImage(projectId: string, imageCount: number): void {
    this.moveCarousel(projectId, imageCount, 1);
  }

  private moveCarousel(
    projectId: string,
    imageCount: number,
    direction: -1 | 1,
  ): void {
    if (imageCount < 2) {
      return;
    }

    this.carouselIndices.update((indices) => {
      const currentIndex = indices[projectId] ?? 0;

      return {
        ...indices,
        [projectId]: (currentIndex + direction + imageCount) % imageCount,
      };
    });
  }
}

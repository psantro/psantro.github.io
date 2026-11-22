import { DOCUMENT } from '@angular/common';
import { afterNextRender, DestroyRef, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export abstract class PortfolioPage {
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);

  protected constructor(
    language: 'en' | 'es',
    description: string,
  ) {
    this.document.documentElement.lang = language;
    inject(Title).setTitle('Pablo Sánchez Troncoso');
    inject(Meta).updateTag({ name: 'description', content: description });

    afterNextRender(() => this.initializeScrollSpy());
  }

  private initializeScrollSpy(): void {
    const view = this.document.defaultView;
    if (!view || !view.IntersectionObserver) {
      return;
    }

    const links = Array.from(
      this.document.querySelectorAll<HTMLAnchorElement>(
        '#mainNav .nav-link[href^="#"]',
      ),
    );
    const observer = new view.IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }

          const activeLink = links.find(
            (link) => link.hash === `#${entry.target.id}`,
          );
          if (activeLink) {
            for (const link of links) {
              link.classList.toggle('active', link === activeLink);
            }
          }
        }
      },
      { rootMargin: '-64px 0px -60% 0px' },
    );

    this.document
      .querySelectorAll('section[id]')
      .forEach((section) => observer.observe(section));
    this.destroyRef.onDestroy(() => observer.disconnect());
  }
}

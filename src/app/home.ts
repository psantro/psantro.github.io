import { Component, afterNextRender, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-home',
  template: `
    <main class="language-landing">
      <h1>Pablo Sánchez Troncoso</h1>
      <p>Choose your language / Elige tu idioma</p>
      <div class="d-flex justify-content-center gap-3">
        <a class="btn btn-primary px-4" routerLink="/en">English</a>
        <a class="btn btn-outline-primary px-4" routerLink="/es">Español</a>
      </div>
    </main>
  `,
})
export class Home {
  constructor() {
    const router = inject(Router);

    afterNextRender(() => {
      const language = (navigator.language || 'en').slice(0, 2).toLowerCase();
      const route = language === 'es' ? '/es' : '/en';
      void router.navigateByUrl(route, { replaceUrl: true });
    });
  }
}

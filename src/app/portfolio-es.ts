import { Component } from '@angular/core';
import { PortfolioPage } from './portfolio-page';

@Component({
  selector: 'app-spanish-portfolio',
  templateUrl: './portfolio-es.html',
})
export class SpanishPortfolio extends PortfolioPage {
  constructor() {
    super(
      'es',
      'Pablo Sánchez Troncoso — Estudiante de Ingeniería Informática y portafolio de desarrollador.',
    );
  }
}

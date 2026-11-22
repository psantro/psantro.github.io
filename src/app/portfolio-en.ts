import { Component } from '@angular/core';
import { PortfolioPage } from './portfolio-page';

@Component({
  selector: 'app-english-portfolio',
  templateUrl: './portfolio-en.html',
})
export class EnglishPortfolio extends PortfolioPage {
  constructor() {
    super(
      'en',
      'Pablo Sánchez Troncoso — Computer Science student and developer portfolio.',
    );
  }
}

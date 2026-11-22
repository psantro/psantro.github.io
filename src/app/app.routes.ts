import { Routes } from '@angular/router';
import { Home } from './home';
import { EnglishPortfolio } from './portfolio-en';
import { SpanishPortfolio } from './portfolio-es';

export const routes: Routes = [
  { path: '', component: Home, title: 'Pablo Sánchez Troncoso' },
  { path: 'en', component: EnglishPortfolio },
  { path: 'es', component: SpanishPortfolio },
];

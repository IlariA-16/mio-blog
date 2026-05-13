import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home')
        .then(m => m.Home)
  },
  {
    path: 'blog',
    loadComponent: () =>
      import('./features/blog/blog')
        .then(m => m.Blog)
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./features/about/about')
        .then(m => m.About)
  },
  {
    path: 'contatti',
    loadComponent: () =>
      import('./features/contatti/contatti')
        .then(m => m.Contatti)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
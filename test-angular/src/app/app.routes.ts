import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    title: 'home-page',
    loadComponent: () => import('../app/pages/homepage/homepage').then((m) => m.Homepage),
  },
  {
    path: 'test',
    title: 'test-page',
    loadComponent: () => import('../app/pages/testpage/testpage').then((m) => m.Testpage),
  },
  {
    path: '**',
    title: 'test-angular',
    loadComponent: () => import('../app/pages/not-found/not-found').then((m) => m.NotFound),
  },
];

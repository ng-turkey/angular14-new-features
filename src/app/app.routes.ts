import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/standalone',
    pathMatch: 'full',
  },
  {
    path: 'standalone',
    loadComponent: () => import('./standalone').then((m) => m.StandaloneComponent),
    title: 'Standalone Components',
  },
  {
    path: 'dependency-injection',
    loadComponent: () =>
      import('./dependency-injection').then((m) => m.DependencyInjectionComponent),
    title: 'Dependency Injection',
  },
  {
    path: 'injector',
    loadComponent: () => import('./injector-example').then((m) => m.NameComponent),
    title: 'Injector',
  },
  {
    path: 'environment-initializer',
    loadChildren: () =>
      import('./environment-initializer/environment-initializer.routes').then(
        (m) => m.environmentInitializerRoutes
      ),
  },
];

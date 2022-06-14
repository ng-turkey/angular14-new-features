import { ENVIRONMENT_INITIALIZER } from '@angular/core';
import { Routes } from '@angular/router';
import { EnvironmentInitializerTitleResolver } from './ei-title.resolver';
import { EnvironmentInitializerComponent } from './environment-initializer.component';

export const environmentInitializerRoutes: Routes = [
  {
    path: '',
    component: EnvironmentInitializerComponent,
    pathMatch: 'full',
    title: EnvironmentInitializerTitleResolver,
    providers: [
      {
        provide: ENVIRONMENT_INITIALIZER,
        useValue: () => alert('Enviornment Initializer fired'),
        multi: true,
      },
    ],
  },
];

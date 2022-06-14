import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../standalone';
import { BasicDIComponent } from './basic/basic-di.component';
import { GithubIconComponent } from './expert/export.component';

@Component({
  selector: 'app-di',
  template: `
    <app-card title="Get Posts">
      <app-basic-di></app-basic-di>
    </app-card>

    <app-card title="Tree-shakable icon">
      <app-github-icon></app-github-icon>
    </app-card>
  `,
  standalone: true,
  imports: [CommonModule, CardComponent, BasicDIComponent, GithubIconComponent],
})
export class DependencyInjectionComponent {}

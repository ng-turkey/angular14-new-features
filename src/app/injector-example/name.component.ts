import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../standalone';
import { ChangeNameAsDirective } from './change-name.directive';
import { NAME } from './name';
import { RenderNameComponent } from './render-name.component';

@Component({
  selector: 'app-name',
  template: `
    <app-card title="Create Embedded Views with Injector">
      <ng-container *changeNameAs="'Veli'">
        <app-render-name prefix="Embedded View: "></app-render-name>
      </ng-container>
      <app-render-name prefix="NameComponent: "></app-render-name>
    </app-card>
  `,
  standalone: true,
  providers: [
    {
      provide: NAME,
      useValue: 'Ali',
    },
  ],
  imports: [CommonModule, ChangeNameAsDirective, RenderNameComponent, CardComponent],
})
export class NameComponent {}

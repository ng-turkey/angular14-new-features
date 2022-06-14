import { Component } from '@angular/core';
import { AutofocusComponent } from './autofocus/autofocus.directive';
import { CardComponent } from './card/card.component';
import { NumberListComponent } from './sort/sort.pipe';

@Component({
  selector: 'app-standalone',
  template: `
    <app-card title="Standalone Component">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, tempora aspernatur fugiat
      numquam, excepturi eligendi deserunt eius possimus maiores nam accusantium ut nobis omnis
      alias deleniti quibusdam. Praesentium, atque nam.
    </app-card>

    <app-card title="Standalone Directive ">
      <app-autofocus></app-autofocus>
    </app-card>

    <app-card title="Standalone Pipe ">
      <app-numbers></app-numbers>
    </app-card>
  `,
  imports: [NumberListComponent, CardComponent, AutofocusComponent],
  standalone: true,
})
export class StandaloneComponent {}

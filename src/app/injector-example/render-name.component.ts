import { Component, inject, Input } from '@angular/core';
import { NAME } from './name';

@Component({
  selector: 'app-render-name',
  template: `
    <p>
      <b>{{ prefix }}</b>
      <q>{{ name }}</q>
    </p>
  `,
  standalone: true,
})
export class RenderNameComponent {
  @Input() prefix: string = '';
  readonly name: string = inject<string>(NAME);

  constructor() {}
}

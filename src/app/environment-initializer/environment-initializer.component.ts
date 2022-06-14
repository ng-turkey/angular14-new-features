import { Component } from '@angular/core';
import { CardComponent } from '../standalone';

@Component({
  selector: 'app-environment-initializer',
  template: `
    <app-card title="Hello from environment initializer component">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex nemo impedit aliquid labore ipsam
      qui fuga commodi laboriosam quo animi id odio recusandae saepe aliquam minus ad earum,
      consectetur sit.
    </app-card>
  `,
  standalone: true,
  imports: [CardComponent],
})
export class EnvironmentInitializerComponent {}

import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AutofocusDirective } from '../autofocus/autofocus.directive';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, AutofocusDirective],
})
export class CardComponent {
  @Input() title = 'I am a standalone card';
}

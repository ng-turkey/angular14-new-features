import { CommonModule } from '@angular/common';
import { Component, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true,
})
export class SortPipe implements PipeTransform {
  transform(value: Array<number>): Array<number> {
    return (value ?? []).sort((a, b) => a - b);
  }
}

@Component({
  selector: 'app-numbers',
  template: `
    <ul>
      <li *ngFor="let number of numbers | sort">
        {{ number }}
      </li>
    </ul>
  `,
  styleUrls: ['./numbers.component.scss'],
  standalone: true,
  imports: [CommonModule, SortPipe],
})
export class NumberListComponent {
  readonly numbers = [5, 3, 2, 78, 33, 1, 22];
}

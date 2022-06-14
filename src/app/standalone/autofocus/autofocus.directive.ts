import { AfterViewInit, Component, Directive, ElementRef, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Directive({
  selector: '[autofocus]',
  standalone: true,
})
export class AutofocusDirective implements AfterViewInit {
  private _delay = 0;

  @Input('autofocus')
  set delay(val: number | string | undefined) {
    this._delay = Number(val) ?? 0;
  }

  get delay(): number {
    return this._delay;
  }

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit(): void {
    setTimeout(() => this.elRef.nativeElement.focus(), this.delay);
  }
}

@Component({
  selector: 'app-autofocus',
  template: `
    <mat-form-field class="name-input">
      <mat-label>Name</mat-label>
      <input autocomplete="off" type="text" matInput autofocus="1" />
    </mat-form-field>
  `,
  styleUrls: ['./autofocus.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, AutofocusDirective],
})
export class AutofocusComponent {}

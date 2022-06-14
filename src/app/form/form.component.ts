import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface UserForm {
  name: FormControl<string>;
  surname: FormControl<string>;
  phoneNumber?: FormControl<string | null>;
}

const { required } = Validators;

@Component({
  selector: 'app-form',
  template: '',
})
export class FormComponent {
  readonly formGroup: FormGroup<UserForm> = this.generateForm();

  constructor(private fb: FormBuilder) {}

  private generateForm(): FormGroup {
    return this.fb.group<UserForm>({
      name: this.fb.control<string>('', { nonNullable: true, validators: [required] }),
      surname: this.fb.control<string>('', { nonNullable: true, validators: [required] }),
      phoneNumber: this.fb.control<string>(''),
    });
  }

  removePhoneNumber(): void {
    this.formGroup.removeControl('phoneNumber');
  }

  setValue() {
    this.formGroup.setValue({
      name: '',
      surname: '',
    });
  }
}

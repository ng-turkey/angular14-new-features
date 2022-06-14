import { Component } from '@angular/core';
import { FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

const { required } = Validators;

@Component({
  selector: 'app-form-untyped',
  template: '',
})
export class FormComponent {
  readonly formGroup: UntypedFormGroup = this.generateForm();

  constructor(private fb: UntypedFormBuilder) {}

  private generateForm(): FormGroup {
    return this.fb.group({
      name: this.fb.control('', [required]),
      surname: this.fb.control('', [required]),
      phoneNumber: this.fb.control(''),
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

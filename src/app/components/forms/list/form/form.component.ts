import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors } from '@angular/forms';

function passwordMatchValidator(
  control: AbstractControl,
): ValidationErrors | null {
  const password = control.get('password')?.value;
  const confirmationPas = control.get('confirmationPas')?.value;

  if (password !== confirmationPas) {
    return {
      passwordMismatch: true,
    };
  }

  return null;
}

@Component({
  selector: 'app-formList',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  // styleUrl: './form.component.css',
})
export class FormComponentList {
  private fb = inject(FormBuilder);
  form = this.fb.nonNullable.group(
    {
      name: ['', [Validators.minLength(3), Validators.required]],
      secondName: ['', [Validators.minLength(3), Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(6), Validators.required]],
      confirmationPas: [''],
    },
    {
      validators: passwordMatchValidator,
    },
  );

  /** */
  submit() {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
  }
}

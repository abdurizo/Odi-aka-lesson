import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { FormComponentList } from './list/form/form.component';
import { InformFormComponent } from './inform/inform-form/inform-form.component';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule, FormComponentList,InformFormComponent],
  templateUrl: './forms.component.html',
  // styleUrl: './forms.component.css',
})
export class FormsComponent {}

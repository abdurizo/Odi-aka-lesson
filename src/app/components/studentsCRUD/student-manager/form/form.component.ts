import { Component, inject, input, output } from '@angular/core';
import {
  FormBuilder,
  ɵInternalFormsSharedModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { StudentInterface } from '../../../../model/studentInterface';
import { StudentService } from '../../../../services/student.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  fb = inject(FormBuilder);
  form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    secondname: ['', Validators.required],
    grade: [0, Validators.required],
    subject: ['', Validators.required],
  });
  /** */
  studentService = inject(StudentService);
  formSubmit = output();
  selectStudent = input<StudentInterface | null>(null);
  /** */

  ngOnInit(): void {
    const edit = this.selectStudent();
    if (edit) {
      this.form.patchValue(edit);
    }
  }
  /** */
  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
    const edit = this.selectStudent();
    if (edit) {
      this.studentService
        .putchStudent(edit.id, this.form.getRawValue())
        .subscribe(() => {
          this.formSubmit.emit();
          this.form.reset();
        });
    } else {
      this.studentService
        .creatStudent(this.form.getRawValue())
        .subscribe(() => {
          this.formSubmit.emit();
          this.form.reset();
        });
    }
  }
  /** */
  closeModal = output();
}

import { Component, inject, input, output } from '@angular/core';
import { StudentInterface } from '../../../../model/studentInterface';
import { StudentService } from '../../../../services/student.service';


@Component({
  selector: 'app-student-card',
  standalone: true,
  imports: [],
  templateUrl: './student-card.component.html',
  styleUrl: './student-card.component.css',
})
export class StudentCardComponent {
  student = input.required<StudentInterface>();
  /** */
  getBarColo(grade: number): string {
    if (grade >= 80) {
      return '#1D9E75';
    }
    if (grade >= 79) {
      return '#378ADD';
    }
    if (grade >= 65) {
      return '#BA7517';
    }
    return '#c71c0f';
  }
  getDegreeStudent(grade: number) {
    if (grade >= 80) return "A'lo";
    if (grade >= 79) return 'Yaxshi';
    if (grade >= 65) return 'Qoniqarli';
    return 'Qoniqarsiz';
  }
  /** */
  studentService = inject(StudentService);
  delete = output<string>();
  deleteStudent(id: string) {
    this.studentService.deleteStudent(id).subscribe();
    this.delete.emit(id);
  }
  /** */
  selectStudent = output<StudentInterface>();
}

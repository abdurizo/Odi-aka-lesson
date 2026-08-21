import { Component, computed, inject, signal, viewChild } from '@angular/core';
import { FilterComponent } from './filter/filter.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { StudentInterface } from '../../../model/studentInterface';

import { FormComponent } from './form/form.component';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-student-manager',
  standalone: true,
  imports: [FilterComponent, StudentCardComponent, FormComponent],
  templateUrl: './student-manager.component.html',
  styleUrl: './student-manager.component.css',
})
export class StudentManagerComponent {
  students = signal<StudentInterface[]>([]);
  studentService = inject(StudentService);
  modal = signal<'add' | 'edit' | null>(null);
  /**
   *
   */
  totalStudents = computed(() => this.students().length);
  averageGrade = computed(() => {
    const list = this.students();
    if (!list) return 0;
    return Math.round(list.reduce((sum, s) => sum + s.grade, 0) / list.length);
  });
  bestStudent = computed(() => {
    const student = [...this.students()].sort((a, b) => b.grade - a.grade)[0];
    return student ? `${student.name} ${student.secondname}` : '-';
  });
  /**
   *
   */
  openModal() {
    this.modal.set('add');
  }
  closeModal() {
    this.modal.set(null);
  }
  /** */
  ngOnInit(): void {
    this.onFormSubmit();
  }
  /**
   *
   */
  searchText = signal('');
  selectedSubject = signal('all');
  selectedGrade = signal('all');
  /** */
  filterStudents = computed(() => {
    const text = this.searchText().toLowerCase().trim();
    const subject = this.selectedSubject();
    const grade = this.selectedGrade();
    return this.students().filter((student) => {
      const matchName = !text || student.name.toLowerCase().includes(text);
      const matchSubject = subject === 'all' || student.subject === subject;
      const matchGrade =
        grade === 'all' ||
        (grade === '80+' && student.grade >= 80) ||
        (grade === '79-65' && student.grade >= 65 && student.grade < 79) ||
        (grade === '65-' && student.grade < 65);

      return matchName && matchSubject && matchGrade;
    });
  });
  /** */
  onFormSubmit() {
    this.studentService.getAllStudents().subscribe((data) => {
      this.students.set(data);
      this.closeModal();
    });
  }
  /** */
  deleteStudent(id: string) {
    this.students.update((data) => data.filter((i) => i.id !== id));
  }
  /** */
  selectStudent = signal<StudentInterface | null>(null);
  onSelectStudent(student: StudentInterface) {
    this.selectStudent.set(student);
    this.modal.set('edit');
  }
  /** */
}

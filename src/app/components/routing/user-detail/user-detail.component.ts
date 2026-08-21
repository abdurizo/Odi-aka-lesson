import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../../services/student.service';
import { StudentInterface } from '../../../model/studentInterface';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css',
})
export class UserDetailComponent {
  route = inject(ActivatedRoute);
  studentService = inject(StudentService);
  student = signal<StudentInterface | undefined>(undefined);
  id = this.route.snapshot.paramMap.get('id');
  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe((data) => {
      this.student.set(data.find((i) => i.id === this.id));
    });
    
  }
}

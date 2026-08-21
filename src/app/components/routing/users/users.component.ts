import { Component, inject, signal } from '@angular/core';
import { StudentService } from '../../../services/student.service';
import { StudentInterface } from '../../../model/studentInterface';
import { ActivatedRoute, RouterLink } from "@angular/router";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  studentService = inject(StudentService);
  studentInterface = signal<StudentInterface[]>([]);
  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe((data) => {
      this.studentInterface.set(data);
    });
  }
  route=inject(ActivatedRoute)
  role=this.route.snapshot.queryParamMap.get('role')
}

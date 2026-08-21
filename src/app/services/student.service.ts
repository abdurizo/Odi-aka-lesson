import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { StudentInterface } from '../model/studentInterface';


@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private http = inject(HttpClient);
  private url = 'http://localhost:3000/student';
  /** */
  getAllStudents() {
    return this.http.get<StudentInterface[]>(this.url);
  }
  /** */
  creatStudent(data: Omit<StudentInterface, 'id'>) {
    return this.http.post<StudentInterface>(this.url, data);
  }
  /** */
  deleteStudent(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }
  /** */
  putchStudent(id: string, data: Partial<StudentInterface>) {
    return this.http.put(`${this.url}/${id}`, data);
  }
}

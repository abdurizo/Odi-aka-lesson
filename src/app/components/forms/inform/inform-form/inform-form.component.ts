import { Component, inject } from '@angular/core';
import { FormBuilder, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-inform-form',
  standalone: true,
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './inform-form.component.html',
  styleUrl: './inform-form.component.css'
})
export class InformFormComponent {
private fb=inject(FormBuilder)
form=this.fb.nonNullable.group({
  name:[''],
  class:[''],
  tel:['+998 '],
  subject:[''],
  explanation:[''],
})
submit(){
  console.log(this.form.value);
  
}
}

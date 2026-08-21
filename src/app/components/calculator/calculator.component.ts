import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  fb = inject(FormBuilder);
  form = this.fb.nonNullable.group({
    num1: [''],
    num2: [''],
  });
  /** */
  result = signal<number | null>(null);
  calculate(operator: '+' | '-' | '*' | '/') {
    const num1 = Number(this.form.value.num1);
    const num2 = Number(this.form.value.num2);
    switch (operator) {
      case '+':
        this.result.set(num1 + num2);
        break;
      case '-':
        this.result.set(num1 - num2);
        break;
      case '*':
        this.result.set(num1 * num2);
        break;
      case '/':
        this.result.set(num1 / num2);
        break;
    }
  }
}

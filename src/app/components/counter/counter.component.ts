import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  number = signal(0);
  increment() {
    this.number.update((v) => v + 1);
  }
  decrement() {
    this.number.update((v) => v - 1);
  }
}

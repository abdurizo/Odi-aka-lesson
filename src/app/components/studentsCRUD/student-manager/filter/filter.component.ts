import { Component, output } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  openModal = output<void>();
  search = output<string>();
  subject = output<string>();
  grade = output<string>();
}

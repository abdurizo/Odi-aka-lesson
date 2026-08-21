import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-http',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './http.component.html',
  styleUrl: './http.component.css',
})
export class HttpComponent {}

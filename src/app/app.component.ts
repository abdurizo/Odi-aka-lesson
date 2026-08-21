import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalculatorComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lessons';
  links=[
    {
      id:1,
      text:'counter',
      path:'/'
    },
    {
      id:2,
      text:'calculator',
      path:'/calculator'
    },
    {
      id:3,
      text:'student_CRUD',
      path:'/student-manager'
    },
    {
      id:4,
      text:'Routing',
      path:'/routing'
    },
    {
      id:5,
      text:'forms',
      path:'/forms'
    },
    {
      id:6,
      text:'http',
      path:'/HTTP'
    },
  ]
}

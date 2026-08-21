import { Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { StudentManagerComponent } from './components/studentsCRUD/student-manager/student-manager.component';
import { RoutingComponent } from './components/routing/routing.component';
import { LoginComponent } from './components/routing/login/login.component';
import { UsersComponent } from './components/routing/users/users.component';
import { UserDetailComponent } from './components/routing/user-detail/user-detail.component';
import { HeaderComponent } from './components/routing/header/header.component';
import { HomeComponent } from './components/routing/home/home.component';
import { authGuard } from './guards/auth.guard';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { FormsComponent } from './components/forms/forms.component';
import { HttpComponent } from './components/http/http.component';
import { PostsComponent } from './components/http/posts/posts.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterComponent,
  },
  {
    path: 'calculator',
    component: CalculatorComponent,
  },
  {
    path: 'student-manager',
    component: StudentManagerComponent,
  },
  {
    path: 'routing',
    component: RoutingComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
        canActivate:[authGuard],
      },
      {
        path: 'users/:id',
        component: UserDetailComponent,
        canActivate:[authGuard],
      },
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
   {
    path: 'forms',
    component: FormsComponent,
  },
   {
    path: 'HTTP',
    component: HttpComponent,
    children:[
      {
        path:'post',
        component:PostsComponent
      },
    ]
  },
  {
    path:'**',
    component:NotFoundComponentComponent
  }
];

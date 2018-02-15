import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserNewComponent } from './user-new/user-new.component';
import { SignupModule } from './signup/signup.module';

const routes: Routes = [
  { path: 'home', component: HomepageComponent,  data: { state: 'home'} },
  { path: 'users', component: UsersComponent, data: { state: 'users'} },
  { path: 'user-new', component: UserNewComponent, data: { state: 'new-user'} },
  { path: 'user-details/:id', component: UserDetailsComponent, data: { state: 'user-details'} },
  { path: 'lazy', loadChildren: './signup/signup.module#SignupModule', data: { state: 'users'}  },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

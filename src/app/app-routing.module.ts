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
  { path: 'home', component: HomepageComponent },
  { path: 'users', component: UsersComponent },
  { path: 'user-new', component: UserNewComponent },
  { path: 'user-details/:id', component: UserDetailsComponent },
  { path: 'lazy', loadChildren: './signup/signup.module#SignupModule' },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

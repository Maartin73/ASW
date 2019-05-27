import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssuesComponent }      from './issues/issues.component';
import { LoginComponent }      from './login/login.component';

const routes: Routes = [
  { path: 'issues', component: IssuesComponent },
  { path: 'issues/:type', component: IssuesComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}

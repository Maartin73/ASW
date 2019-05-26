import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }      	from './app.component';
import { LoginComponent }      	from './login/login.component';
import { IssuesComponent }		from './issues/issues.component';

const routes: Routes = [
  { path: 'issues', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'issues/:id', component: IssuesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}

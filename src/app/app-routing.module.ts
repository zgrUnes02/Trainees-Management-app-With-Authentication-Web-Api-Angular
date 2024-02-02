import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { TraineesListComponent } from './components/trainees-list/trainees-list.component';
import { UpdateTraineeComponent } from './components/update-trainee/update-trainee.component';
import { CreateTraineeComponent } from './components/create-trainee/create-trainee.component';
import { authGuard } from './components/guards/auth.guard';
import { isloggedGuard } from './components/guards/islogged.guard';

const routes: Routes = [
  { path: 'trainees' , component: TraineesListComponent , canActivate: [authGuard]} ,
  { path: 'trainees/create/new' , component: CreateTraineeComponent , canActivate: [authGuard] } ,
  { path: 'trainees/edit/:id' , component: UpdateTraineeComponent , canActivate: [authGuard] } ,
  { path: 'login' , component: LoginComponent , canActivate: [isloggedGuard] } ,
  { path: '' , component: LoginComponent , canActivate: [isloggedGuard] } ,
  { path: 'signup' , component: SignupComponent , canActivate: [isloggedGuard] } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

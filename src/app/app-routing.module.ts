import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { ComponentLoginComponent } from './component-login/component-login.component';
import { ComponentRegisterComponent } from './component-register/component-register.component';
import { ComponentUserComponent } from './component-user/component-user.component';

const routes: Routes = [
  { path: 'login', component: ComponentLoginComponent},
  { path: 'register', component: ComponentRegisterComponent},
  { path: 'user/management', component: ComponentUserComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
=======
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './guard/authentication.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user/management', component: UserComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
>>>>>>> ade89ae9f7018bacc1d4125b69fa3224a5a44422
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

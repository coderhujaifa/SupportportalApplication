import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'

=======
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
>>>>>>> ade89ae9f7018bacc1d4125b69fa3224a5a44422
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationService } from './service/authentication.service';
import { UserService } from './service/user.service';
import { AuthInterceptor } from './interceptor/auth.interceptor';
<<<<<<< HEAD
import { AuthenticationGuard } from './guard/authentication.guard';
import { NotificationModule } from './notification.module';
import { NotificationService } from './service/notification.service';
import { ComponentLoginComponent } from './component-login/component-login.component';
import { ComponentRegisterComponent } from './component-register/component-register.component';
import { ComponentUserComponent } from './component-user/component-user.component';
import { FormsModule } from '@angular/forms';
import { NotifierModule } from 'angular-notifier';
=======
import { AuthGuard } from './guard/authentication.guard';
import { NotificationModule } from './notification.module';
import { NotificationService } from './service/notification.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
>>>>>>> ade89ae9f7018bacc1d4125b69fa3224a5a44422

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ComponentLoginComponent,
    ComponentRegisterComponent,
    ComponentUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,NotifierModule,
    FormsModule,
    HttpClientModule,
    NotificationModule
  ],
  providers: [NotificationService, AuthenticationGuard, AuthenticationService, UserService, 
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
=======
    LoginComponent,
    RegisterComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NotificationModule
  ],
  providers: [
    NotificationService,
    AuthenticationService,
    UserService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
>>>>>>> ade89ae9f7018bacc1d4125b69fa3224a5a44422
  bootstrap: [AppComponent]
})
export class AppModule { }

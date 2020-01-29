import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [NavbarComponent, HomeComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  exports: [ NavbarComponent ]
})
export class CoreModule { }

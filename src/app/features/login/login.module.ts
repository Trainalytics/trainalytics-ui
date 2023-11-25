import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginLayoutComponent } from './components/login-layout/login-layout.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';


@NgModule({
	declarations: [
		LoginLayoutComponent,
		LoginFormComponent
	],
	imports: [
		CommonModule,
		LoginRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		InputTextModule,
		ButtonModule,
		PasswordModule,
	]
})
export class LoginModule { }

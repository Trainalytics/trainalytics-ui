import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginLayoutComponent } from './components/login-layout/login-layout.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';


@NgModule({
	declarations: [
		LoginLayoutComponent,
		LoginFormComponent
	],
	imports: [
		CommonModule,
		LoginRoutingModule,
		FormsModule,
		InputTextModule,
		ButtonModule,
		PasswordModule,
		SharedModule,
		CoreModule
	]
})
export class LoginModule { }

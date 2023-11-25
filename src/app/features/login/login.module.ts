import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginLayoutComponent } from './components/login-layout/login-layout.component';
import { LoginFormComponent } from './components/login-form/login-form.component';


@NgModule({
	declarations: [
		LoginLayoutComponent,
		LoginFormComponent
	],
	imports: [
		CommonModule,
		LoginRoutingModule
	]
})
export class LoginModule { }

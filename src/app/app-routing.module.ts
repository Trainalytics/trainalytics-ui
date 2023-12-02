import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './config/app-routing.config';

@NgModule({
	imports: [RouterModule.forRoot(routes, {
		enableTracing: false,
	})],
	exports: [RouterModule],
})
export class AppRoutingModule { }

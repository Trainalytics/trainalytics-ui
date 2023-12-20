import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { dashboardRoute } from './config/route.builder';

const routes: Routes = [
	{
		path: dashboardRoute(),
		component: DashboardComponent,
		pathMatch: 'full',
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashboardRoutingModule { }

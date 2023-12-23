import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { dashboardRoute } from './config/route.builder';

const routes: Routes = [
	{ // dashboard
		path: dashboardRoute(),
		component: DashboardLayoutComponent,
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashboardRoutingModule { }

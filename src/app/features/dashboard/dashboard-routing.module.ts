import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { activityDetailsRoute, activityIdPlaceholder, dashboardRoute } from './config/route.builder';
import { ActivityDetailsComponent } from './components/activity/activity-details/activity-details.component';

const routes: Routes = [
	{ // dashboard
		path: dashboardRoute(),
		component: DashboardLayoutComponent,
	},
	{ // activity/:id
		path: activityDetailsRoute(activityIdPlaceholder),
		component: ActivityDetailsComponent,
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashboardRoutingModule { }

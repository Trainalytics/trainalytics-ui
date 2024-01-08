import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityDetailsComponent } from './components/activity/activity-details/activity-details.component';
import { dashboardRoute } from './config/route.builder';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { activityDetailsRoute, activityIdPlaceholder } from './components/activity/config/route.builder';

const routes: Routes = [
	{ // dashboard
		path: dashboardRoute(),
		component: DashboardLayoutComponent,
	},
	{ // activity/:id
		path: activityDetailsRoute(false, activityIdPlaceholder),
		component: ActivityDetailsComponent,
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashboardRoutingModule { }

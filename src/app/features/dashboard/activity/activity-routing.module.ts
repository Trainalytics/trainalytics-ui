import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { activityDetailsRoute, activityIdPlaceholder } from './config/route.builder';
import { ActivityDetailsComponent } from './activity-details/activity-details.component';

const routes: Routes = [
	{ // activity/:id
		path: activityDetailsRoute(activityIdPlaceholder),
		component: ActivityDetailsComponent,
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ActivityRoutingModule { }

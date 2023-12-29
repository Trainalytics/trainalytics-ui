import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityShortDto } from '@models/activity/activity-short-dto.model';
import { activityDetailsRoute } from '../activity/config/route.builder';

@Component({
	selector: 'trainalytics-dashboard-card',
	templateUrl: './dashboard-card.component.html',
	styleUrl: './dashboard-card.component.scss'
})
export class DashboardCardComponent {

	@Input()
	activity: ActivityShortDto;

	constructor(
		private readonly router: Router
	) { }

	/**
	 * Open the activity details page of an activity
	 * @param activityId - the activity id
	 */
	navigateToActivity(activityId: string): void {
		const url = activityDetailsRoute(true, activityId);
		this.router.navigateByUrl(url);
	}
}

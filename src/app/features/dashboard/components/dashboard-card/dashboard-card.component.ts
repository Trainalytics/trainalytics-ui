import { Component, Input } from '@angular/core';
import { ActivityShortDto } from '@models/activity/activity-short-dto.model';

@Component({
	selector: 'trainalytics-dashboard-card',
	templateUrl: './dashboard-card.component.html',
	styleUrl: './dashboard-card.component.scss'
})
export class DashboardCardComponent {

	@Input()
	activity: ActivityShortDto;

}

import { Component, Input } from '@angular/core';
import { ActivityShortDto } from '@models/activity/activity-short-dto.model';

@Component({
	selector: 'trainalytics-activitiy-card',
	templateUrl: './activitiy-card.component.html',
	styleUrl: './activitiy-card.component.scss'
})
export class ActivitiyCardComponent {

	@Input()
	activity: ActivityShortDto;

}

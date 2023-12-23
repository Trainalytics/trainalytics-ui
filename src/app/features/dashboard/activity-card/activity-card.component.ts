import { Component, Input } from '@angular/core';
import { ActivityShortDto } from '@models/activity/activity-short-dto.model';

@Component({
	selector: 'trainalytics-activity-card',
	templateUrl: './activity-card.component.html',
	styleUrl: './activity-card.component.scss'
})
export class ActivityCardComponent {

	@Input()
	activity: ActivityShortDto;

}

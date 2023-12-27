import { Component, Input } from '@angular/core';
import { ActivityDto } from '@models/activity/activity-dto.model';

@Component({
	selector: 'trainalytics-activity-details',
	templateUrl: './activity-details.component.html',
	styleUrl: './activity-details.component.scss'
})
export class ActivityDetailsComponent {

	@Input()
	activity: ActivityDto;
}

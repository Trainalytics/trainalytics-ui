import { Component, Input, OnInit } from '@angular/core';
import { ActivityDto } from '@models/activity/activity-dto.model';

@Component({
	selector: 'trainalytics-activity-details',
	templateUrl: './activity-details.component.html',
	styleUrl: './activity-details.component.scss'
})
export class ActivityDetailsComponent implements OnInit {

	@Input()
	activity: ActivityDto;

	ngOnInit(): void {
		throw new Error('Method not implemented.');
	}
}

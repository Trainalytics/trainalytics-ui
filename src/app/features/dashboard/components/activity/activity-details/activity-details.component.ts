import { Component, Input, OnInit } from '@angular/core';
import { ActivityDto } from '@models/activity/activity-dto.model';
import { activityDtoMock } from '@testing/mocks/activity-dto.mock';
import { count } from 'rxjs';

@Component({
	selector: 'trainalytics-activity-details',
	templateUrl: './activity-details.component.html',
	styleUrl: './activity-details.component.scss'
})
export class ActivityDetailsComponent implements OnInit {

	/**
	 * Activity
	 */
	activity: ActivityDto;

	data: any;

	hrOptions: any;

	ngOnInit(): void {
		this._initHrOptions();
		this._initData();
	}

	/**
	 * TODO : Make this chart for the heart rate + power data
	 */

	private _initData(): void {
		const documentStyle = getComputedStyle(document.documentElement);
		this.activity = activityDtoMock;

		this.data = {
			labels: this.activity.allHr,
			datasets: [
				{
					label: 'Heart Rate',
					data: this.activity.allHr,
					fill: true,
					borderColor: documentStyle.getPropertyValue('--red-600'),
					backgroundColor: 'rgba(217,54,43,0.2)'
				}
			]
		};
	}

	private _initHrOptions(): void {
		const documentStyle = getComputedStyle(document.documentElement);
		const textColor = documentStyle.getPropertyValue('--text-color');
		const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
		const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

		this.hrOptions = {
			maintainAspectRatio: false,
			aspectRatio: 0.6,
			plugins: {
				legend: {
					labels: {
						color: textColor
					}
				}
			},
			scales: {
				x: {
					ticks: {
						color: textColorSecondary
					},
					grid: {
						color: surfaceBorder
					}
				},
				y: {
					ticks: {
						color: textColorSecondary
					},
					grid: {
						color: surfaceBorder
					}
				}
			}
		};
	}
}

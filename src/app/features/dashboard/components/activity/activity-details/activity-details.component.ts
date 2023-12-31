import { Component, Input, OnInit } from '@angular/core';
import { ActivityDto } from '@models/activity/activity-dto.model';
import { activityDtoMock } from '@testing/mocks/activity-dto.mock';

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

	paceOptions: any;

	ngOnInit(): void {
		this._initOptions();
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
					data: this.activity.allHr,
					fill: true,
					borderColor: documentStyle.getPropertyValue('--red-600'),
					tension: 0,
					pointStyle: false,
					backgroundColor: 'rgba(217,54,43,0.25)',
					borderWidth: 1,
				}
			]
		};
	}

	private _initOptions(): void {
		this.hrOptions = {
			maintainAspectRatio: false,
			aspectRatio: 1.5,
			responsive: true,
			plugins: {
				title: {
					display: true,
					text: 'Heart Rate',
					position: 'left',
				},
				// Hide the legend of the graphic
				legend: {
					display: false,
				}
			},
			scales: {
				x: {
					// Hide the labels of the datasets
					ticks: {
						display: false
					},
					grid: {
						display: false,
					}
				},
				y: {
					grid: {
						display: false,
					}
				}
			},
		};

		this.paceOptions = {
			maintainAspectRatio: false,
			aspectRatio: 1.5,
			responsive: true,
			plugins: {
				title: {
					display: true,
					text: 'Pace',
					position: 'left',
				},
				// Hide the legend of the graphic
				legend: {
					display: false,
				}
			},
			scales: {
				x: {
					// Hide the labels of the datasets
					ticks: {
						display: false
					},
					grid: {
						display: false,
					}
				},
				y: {
					grid: {
						display: false,
					}
				}
			},
		};
	}
}

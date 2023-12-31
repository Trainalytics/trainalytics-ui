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

	/**
	 * All the heart rate data
	 */
	hrData: any;

	/**
	 * All the pace data
	 */
	paceData: any;

	/**
	 * Options for the heart rate graphic
	 */
	hrOptions: any;

	/**
	 * Options for the pace graphic
	 */
	paceOptions: any;

	ngOnInit(): void {
		this._initData();
		this._initOptions();
	}

	private _initData(): void {
		const documentStyle = getComputedStyle(document.documentElement);
		this.activity = activityDtoMock;

		this.hrData = {
			labels: this.activity.hrData.allHr,
			datasets: [
				{
					data: this.activity.hrData.allHr,
					fill: true,
					borderColor: documentStyle.getPropertyValue('--red-600'),
					tension: 0,
					pointStyle: false,
					backgroundColor: 'rgba(217,54,43,0.25)',
					borderWidth: 1,
				}
			]
		};
		this.paceData = {
			labels: this.activity.paceData.allPace,
			datasets: [
				{
					data: this.activity.paceData.allPace,
					fill: true,
					borderColor: documentStyle.getPropertyValue('--blue-600'),
					tension: 0,
					pointStyle: false,
					backgroundColor: 'rgba(28,128,207,0.25)',
					borderWidth: 1,
				}
			]
		};
	}

	private _initOptions(): void {
		const lowestPace = Math.min(...this.activity.paceData.allPace);
		const highestPace = Math.max(...this.activity.paceData.allPace);
		const lowestHr = Math.min(...this.activity.hrData.allHr);
		const highestHr = Math.max(...this.activity.hrData.allHr);

		this.hrOptions = {
			maintainAspectRatio: false,
			aspectRatio: 1.25,
			responsive: true,
			plugins: {
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
					min: lowestHr,
					max: highestHr,
					grid: {
						display: false,
					}
				}
			},
		};

		this.paceOptions = {
			maintainAspectRatio: false,
			aspectRatio: 1.25,
			responsive: true,
			plugins: {
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
					min: lowestPace - 1,
					max: highestPace,
					grid: {
						display: false,
					}
				}
			},
		};
	}
}

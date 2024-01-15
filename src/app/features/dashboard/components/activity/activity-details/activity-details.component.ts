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
	 * All the pace data
	 */
	courseElevationData: any;

	/**
	 * All the laps data
	 */
	lapsData: any;

	/**
	 * Options for the heart rate graphic
	 */
	hrOptions: any;

	/**
	 * Options for the pace graphic
	 */
	paceOptions: any;

	/**
	 * Options for the pace graphic
	 */
	courseElevationOptions: any;

	/**
	 * Options for the laps graphic
	 */
	lapsOptions: any;

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
		this.courseElevationData = {
			labels: this.activity.elevationData.allElevation,
			datasets: [
				{
					data: this.activity.elevationData.allElevation,
					fill: true,
					borderColor: documentStyle.getPropertyValue('--yellow-600'),
					tension: 0,
					pointStyle: false,
					backgroundColor: 'rgba(213,163,38,0.25)',
					borderWidth: 1,
				}
			]
		};

		// TODO : Clean this code
		let lapDistance: Array<number> = [];
		let lapNumber: Array<number> = [];
		this.activity.lapsArray.forEach(element => {
			console.log(element.time);
			lapDistance.push(element.distance);
			lapNumber.push(element.number);
		});

		this.lapsData = {
			labels: lapNumber,
			datasets: [
				{
					data: lapDistance,
					borderColor: documentStyle.getPropertyValue('--teal-600'),
					backgroundColor: 'rgba(0,128,116,0.25)',
					borderWidth: 1,
				}
			]
		};
	}

	private _initOptions(): void {
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
					min: Math.min(...this.activity.hrData.allHr) - 50,
					max: Math.max(...this.activity.hrData.allHr) + 50,
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
					min: Math.min(...this.activity.paceData.allPace) - 1,
					max: Math.max(...this.activity.paceData.allPace),
					grid: {
						display: false,
					}
				}
			},
		};

		this.courseElevationOptions = {
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
					min: this.activity.elevationData.minElevation - 20,
					max: this.activity.elevationData.maxElevation + 20,
					grid: {
						display: false,
					}
				}
			},
		};

		this.lapsOptions = {
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
						display: true
					},
					grid: {
						display: false,
					}
				},
				y: {
					beginAtZero: true,
				}
			},
		};
	}
}

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

		this.data = {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [
				{
					label: 'First Dataset',
					data: [65, 59, 80, 81, 56, 55, 40],
					fill: false,
					tension: 0.4,
					borderColor: documentStyle.getPropertyValue('--blue-500')
				},
				{
					label: 'Second Dataset',
					data: [28, 48, 40, 19, 86, 27, 90],
					fill: false,
					borderDash: [5, 5],
					tension: 0.4,
					borderColor: documentStyle.getPropertyValue('--teal-500')
				},
				{
					label: 'Third Dataset',
					data: [12, 51, 62, 33, 21, 62, 45],
					fill: true,
					borderColor: documentStyle.getPropertyValue('--orange-500'),
					tension: 0.4,
					backgroundColor: 'rgba(255,167,38,0.2)'
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

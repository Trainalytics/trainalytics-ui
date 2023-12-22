import { Component, OnInit } from '@angular/core';
import { I18nService } from '@core/services/i18n.service';
import { ActivityShortDto } from '@models/activity/activity-short-dto.model';

@Component({
	selector: 'trainalytics-dashboard-table',
	templateUrl: './dashboard-table.component.html',
	styleUrl: './dashboard-table.component.scss'
})
export class DashboardTableComponent implements OnInit {

	activites: Array<ActivityShortDto> = [];

	constructor(
		private readonly _i18n: I18nService,
	) { }

	ngOnInit(): void {
		this.initActivites();
	}

	initActivites(): void {
		this.activites = [
			{
				name: 'VMA-S5-2-Endurance Fontamentale',
				type: 'running',
				averageHr: 135,
				averagePace: '5:30',
				distance: 10.5,
				duration: '1:10:35'
			},
			{
				name: 'FTP-S3-3-Endurance Fontamentale',
				type: 'cycling',
				averageHr: 115,
				distance: 40,
				duration: '1:10:35'
			}
		];
	}
}

import { Component } from '@angular/core';
import { I18nService } from '@core/services/i18n.service';

@Component({
	selector: 'trainalytics-dashboard-table',
	templateUrl: './dashboard-table.component.html',
	styleUrl: './dashboard-table.component.scss'
})
export class DashboardTableComponent {
	constructor(
		private readonly _i18n: I18nService,
	) { }
}

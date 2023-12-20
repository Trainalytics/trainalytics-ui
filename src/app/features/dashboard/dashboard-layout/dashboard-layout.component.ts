import { Component } from '@angular/core';
import { I18nService } from '@core/services/i18n.service';

@Component({
	selector: 'trainalytics-dashboard-layout',
	templateUrl: './dashboard-layout.component.html',
	styleUrl: './dashboard-layout.component.scss'
})
export class DashboardLayoutComponent {
	constructor(
		private readonly _i18n: I18nService,
	) { }

}

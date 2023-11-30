import { Component, OnInit } from '@angular/core';
import { I18nService } from '@core/service/i18n.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
	/**
	 * Name of the application
	 */
	private _appName: string;

	/**
	 * Current year
	 */
	currentYear: string;

	constructor(
		private readonly i18nService: I18nService
	) { }

	ngOnInit(): void {
		this._setAppName('Trainalytics');
		this.currentYear = new Date().getFullYear().toString();
	}

	/**
	 * Method to set the name of the application
	 */
	private _setAppName(appName: string): void {
		this._appName = appName;
	}

	/**
	 * Method to get the name of the application
	 * @returns the name of the application
	 */
	getAppName(): string {
		return this._appName;
	}
}

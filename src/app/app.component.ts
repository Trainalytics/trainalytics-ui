import { Component, OnInit } from '@angular/core';
import { I18nService } from '@core/services/i18n.service';
import { AuthService } from './auth/services/auth.service';
import { UserInfo } from '@models/user-info.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
	/**
	 * Name of the application
	 */
	appName: string;

	/**
	 * Current year
	 */
	currentYear: string;

	/**
	 * Information about the user
	 */
	userInfo?: UserInfo;

	constructor() { }

	ngOnInit(): void {
		this.appName = 'Trainalytics';
		this.currentYear = new Date().getFullYear().toString();
	}
}

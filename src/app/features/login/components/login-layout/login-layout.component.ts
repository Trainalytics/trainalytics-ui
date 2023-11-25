import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { I18nService } from '@core/service/i18n.service';

@Component({
	selector: 'trainalytics-login-layout',
	templateUrl: './login-layout.component.html',
	styleUrl: './login-layout.component.scss'
})
export class LoginLayoutComponent {

	constructor(
		private readonly _i18n: I18nService,
		private readonly _titleService: Title
	) {
		this._titleService.setTitle('Trainalytics | ' + this._i18n.translate('nav.login'));
	}
}

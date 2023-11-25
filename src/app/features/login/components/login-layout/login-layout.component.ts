import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { I18nService } from '@core/service/i18n.service';
import { AccountService } from '@login/services/account.service';
import { UserInfo } from '@models/user-info.model';

@Component({
	selector: 'trainalytics-login-layout',
	templateUrl: './login-layout.component.html',
	styleUrl: './login-layout.component.scss'
})
export class LoginLayoutComponent implements OnInit {

	/**
	 * List of the accounts
	 */
	userAccount: UserInfo;

	constructor(
		private readonly _i18n: I18nService,
		private readonly _titleService: Title,
		private readonly _accountService: AccountService,
	) {
		this._titleService.setTitle('Trainalytics | ' + this._i18n.translate('nav.login'));
	}
	ngOnInit(): void {
		// this.getAccountData();
	}

	getAccountData(): void {
		this._accountService.getAccountData()
			.subscribe(res => this.userAccount = res);
	}

	insertData(userInfo: UserInfo) {
		this._accountService.insertData(userInfo)
			.subscribe(res => this.getAccountData());
	}
}

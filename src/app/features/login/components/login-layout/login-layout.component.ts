import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { I18nService } from '@core/service/i18n.service';
import { AccountService } from '@login/services/account.service';

export class Account {
	username: any;
	email: any;
	password: any;
}

@Component({
	selector: 'trainalytics-login-layout',
	templateUrl: './login-layout.component.html',
	styleUrl: './login-layout.component.scss'
})
export class LoginLayoutComponent implements OnInit {

	/**
	 * List of the accounts
	 */
	accounts: any;

	userAccount = new Account();

	constructor(
		private readonly _i18n: I18nService,
		private readonly _titleService: Title,
		private readonly _accountService: AccountService,
	) {
		this._titleService.setTitle('Trainalytics | ' + this._i18n.translate('nav.login'));
	}
	ngOnInit(): void {
		this.getAccountData();
	}

	getAccountData(): void {
		this._accountService.getAccountData().subscribe(res => this.accounts = res);
	}

	insertData() {
		this._accountService.insertData(this.accounts).subscribe(res => this.getAccountData());
	}
}

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { I18nService } from '@core/services/i18n.service';
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
	) {
		this._titleService.setTitle('Trainalytics | ' + this._i18n.translate('nav.login'));
	}
	ngOnInit(): void {
		// this.getAccountData();
	}

	/**
	 * Get the data of a specific account
	 */
	getAccountData(): void {
		// this._accountService.getAccountData()
		// 	.subscribe(res => this.userAccount = res);
	}

	/**
	 * Create an account with specific values
	 * @param userInfo - information about the user
	 */
	createAccount(userInfo: UserInfo) {
		// this._accountService.createAccount(userInfo)
		// 	.subscribe(res => this.getAccountData());
	}

	/**
	 * Update an account with specific values
	 * @param userInfo - information used to update the user information
	 */
	updateAccount(userInfo: UserInfo) {
		// this._accountService.createAccount(userInfo)
		// 	.subscribe(res => this.getAccountData());
	}

	/**
	 * Delete an account with specific values
	 * @param userInfo - information of the user
	 */
	deleteAccount(userInfo: UserInfo) {
		// TODO : Send the userInfo DTO and make the request to find which user is it on the back or directly send the id from the front to the api ?

		// this._accountService.deleteAccount(userInfo)
		// 	.subscribe(res => this.getAccountData());
	}
}

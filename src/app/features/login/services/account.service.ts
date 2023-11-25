import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInfo } from '@models/user-info.model';

@Injectable({
	providedIn: 'root'
})
export class AccountService {

	constructor(
		private readonly _httpClient: HttpClient
	) { }

	/**
	 * Method to get data from an account
	 * @returns the data of the account
	 */
	getAccountData(): any {
		const userInfo: UserInfo = {
			username: 'dieperid',
			name: 'David',
			email: 'test@gmail.com'
		};

		return userInfo;
		// return this._httpClient.get('http://localhost:8000/api/accout/');
	}

	insertData(data: any) {
		return this._httpClient.post('http://localhost:8000/api/users/', data);
	}
}

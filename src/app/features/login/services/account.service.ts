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
			sub: 'dieperid',
			name: 'David',
			email: 'test@gmail.com',
			picture: '',
		};

		return userInfo;
		// return this._httpClient.get('http://localhost:8000/api/accout/');
	}

	/**
	 * Method to create an account
	 * @param data - account information
	 * @returns - the response of the creation
	 */
	createAccount(data: any) {
		return this._httpClient.post('http://localhost:8000/api/users/', data);
	}

	/**
	 * Method to update an account
	 * @param data - account information
	 * @returns - the response of the update
	 */
	updateAccount(data: any) {
		return this._httpClient.put('http://localhost:8000/api/users/', data);
	}

	/**
	 * Method to delete an account
	 * @param data - account information
	 * @returns - the response of the delete
	 */
	deleteAccount(data: any) {
		return this._httpClient.delete('http://localhost:8000/api/users/', data);
	}
}

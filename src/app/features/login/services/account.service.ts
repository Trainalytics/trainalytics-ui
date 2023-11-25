import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
	getAccountData() {
		return this._httpClient.get('http://localhost:8000/api/accouts/');
	}

	insertData(data) {
		return this._httpClient.post('http://localhost:8000/api/users/', data);
	}
}

import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { oAuthBaseConfig } from '../auth.config';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(
		private readonly _oAuthService: OAuthService
	) {
		this.setup();
	}

	/**
	 * Setup the auth process and login process
	 * @returns a promise of the auth process
	 */
	setup(): Promise<void> {
		const oAuthConfig: AuthConfig = {
			...oAuthBaseConfig,
		};

		this._oAuthService.configure(oAuthConfig);

		return this.login();
	}

	/**
	 * Load the discovery document and execute the login
	 * @returns the promise of the oauth login
	 */
	private login(): Promise<void> {
		return this._oAuthService
			.loadDiscoveryDocument().then(() => {
				this._oAuthService.tryLoginImplicitFlow()
					.then(() => {
						if (!this._oAuthService.hasValidAccessToken()) {
							this._oAuthService.initLoginFlow();
						} else {
							this._oAuthService.loadUserProfile()
								.then(userProfile => {
									console.log(JSON.stringify(userProfile));
								});
						}
					});
			});
	}
}

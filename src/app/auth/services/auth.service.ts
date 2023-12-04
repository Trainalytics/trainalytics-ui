import { Injectable, OnDestroy } from '@angular/core';
import { AuthConfig, OAuthErrorEvent, OAuthEvent, OAuthInfoEvent, OAuthService } from 'angular-oauth2-oidc';
import { oAuthBaseConfig } from '../auth.config';
import { UserInfo } from '@models/user-info.model';
import { Subject, Subscription } from 'rxjs';
import { IdToken } from '@models/id-token.model';
import { EnvInfo } from '@models/env-info.model';
import { SESSION_STORAGE_IDTOKEN } from '@auth/constants/auth.constant';

/**
 * This is the key of the storage item where the decoded idToken is saved
 */
const decodedIdTokenKey = SESSION_STORAGE_IDTOKEN;

@Injectable({
	providedIn: 'root'
})
export class AuthService implements OnDestroy {
	/**
	 * Subscriptions done in the service for one shot unsubscribe
	 */
	private subs = new Subscription();

	constructor(
		private readonly _oAuthService: OAuthService
	) {
		this.handleOAuthEvents();
	}

	/**
	 * @override
	 */
	ngOnDestroy(): void {
		this.subs.unsubscribe();
	}

	/**
	 * Setup the auth process and login
	 * @param config - the configuration object with the url google
	 * @returns a promise of the auth process
	 */
	setup(config: EnvInfo): Promise<void> {
		const oAuthConfig: AuthConfig = {
			...oAuthBaseConfig,
			issuer: config.authIssuer,
			clientId: config.authClientId,
		};

		this._oAuthService.configure(oAuthConfig);

		return this.login();
	}

	/**
	 * Load the discovery document and execute the login
	 * @returns the promise of the oauth login
	 */
	private login(): Promise<void> {
		return this._oAuthService.loadDiscoveryDocumentAndLogin()
			.then(() => this._oAuthService.setupAutomaticSilentRefresh({}, 'access_token', false))
			.catch(e => {
				if (e instanceof OAuthErrorEvent && e.type === 'invalid_nonce_in_state') {
					this._oAuthService.silentRefresh();
				}
			});
	}

	isLoggedIn(): boolean {
		return this._oAuthService.hasValidAccessToken();
	}

	logout(): void {
		this._oAuthService.logOut();
	}

	/**
	 * Handle an expired access token event
	 */
	handleExpiredAccessToken(): void {
		sessionStorage.clear();
		window.location.reload();
	}

	/**
	 * Get the info about the connected user from the stored idToken.
	 * This should never be called before authentication process has succeeded
	 * @returns the info about the user or null if it was not found
	 * @throws if method is called before authentication is finished
	 */
	getUserInfo(): UserInfo {
		const rawToken = sessionStorage.getItem(decodedIdTokenKey);
		if (!rawToken) {
			// as auth is done at app init, we should never reach this
			throw new Error(
				`Method to get connected user info was called before authentication was finished`,
			);
		}

		const parsedToken = JSON.parse(rawToken) as IdToken;
		return {
			name: parsedToken.name,
			sub: parsedToken.sub,
			email: parsedToken.email,
			picture: parsedToken.picture,
			lang: parsedToken.language,
		};
	}

	/**
	 * Subscribe to oAuth events and handle the one we need
	 * @see https://manfredsteyer.github.io/angular-oauth2-oidc/docs/classes/OAuthEvent.html#source
	 */
	private handleOAuthEvents(): void {
		const tokenRefreshErrorMaxTry = 1;
		let tokenRefreshErrorCount = 0;
		this.subs.add(
			this._oAuthService.events.subscribe({
				next: (evt: OAuthEvent) => {
					if (
						evt.type === 'token_expires' &&
						(evt as OAuthInfoEvent).info === 'access_token'
					) {
						this.handleExpiredAccessToken();
					} else if (evt.type === 'discovery_document_load_error') {
						throw new Error(
							'Impossible to load the auth document from the server',
						);
					} else if (
						evt.type === 'token_received' &&
						(evt as OAuthInfoEvent).info === 'access_token'
					) {
						tokenRefreshErrorCount = 0;
					} else if (evt.type === 'silent_refresh_error') {
						if (tokenRefreshErrorCount >= tokenRefreshErrorMaxTry) {
							return;
						}
						tokenRefreshErrorCount++;
						this.login();
					}
				},
				error: (_errEvt: OAuthErrorEvent) => {
					this.login();
				},
			}),
		);
	}
}

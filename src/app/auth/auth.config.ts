import { AuthConfig } from "angular-oauth2-oidc";

/**
 * Base configuration for angular-oauth-oidc authentication
 */
export const oAuthBaseConfig: AuthConfig = {
	strictDiscoveryDocumentValidation: false,
	redirectUri: window.location.origin,
	scope: 'openid profile email',
	showDebugInformation: true,
	logoutUrl: 'https://www.google.com/accounts/Logout',
	responseType: 'code',
	useSilentRefresh: true,
	timeoutFactor: .75,
}

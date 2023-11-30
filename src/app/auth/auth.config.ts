import { AuthConfig } from "angular-oauth2-oidc";

/**
 * Base configuration for angular-oauth-oidc authentication
 */
export const oAuthBaseConfig: AuthConfig = {
	issuer: "https://accounts.google.com/",
	strictDiscoveryDocumentValidation: false,
	redirectUri: window.location.origin,
	clientId: '148570721660-9quong223l21j2lpivu38f75sc8un0tf.apps.googleusercontent.com',
	scope: 'openid profile email https://www.googleapis.com/auth/gmail.readonly',
	showDebugInformation: true,
	responseType: 'code'
}

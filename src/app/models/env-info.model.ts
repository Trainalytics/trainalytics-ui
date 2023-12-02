export interface EnvInfo {
	/**
	 * Name of the environment
	 * @example development, production
	 */
	name: string;
	/**
	 * Url of the auth issuer
	 */
	authIssuer: string;
	/**
	 * Consumer id of the google applicatiom
	 */
	authClientId: string;
	/**
	 * Url of the trainalytics api
	 */
	trainalyticsApi: string;
	/**
	 * The list of urls which will need the token to be added in the headers by the interceptors
	 * @see https://github.com/manfredsteyer/angular-oauth2-oidc/blob/master/docs-src/interceptors.md
	 */
	authAllowedUrl: Array<string>;
}

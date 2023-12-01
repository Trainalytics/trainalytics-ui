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
}

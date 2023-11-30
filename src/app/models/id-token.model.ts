/**
 * IdToken structure related to the currently logged user
 */
export interface IdToken {
	/**
	 * The token subject which is the user identifier
	 */
	sub: string;
	/**
	 * The email of the user
	 */
	email: string;
	/**
	 * Full user name
	 */
	name: string;
	/**
	 * The prefered language of the connected user like stored in the AD
	 * @example // fr
	 */
	language?: string;
	/**
	 * Picture of the user
	 */
	picture: string;

	// other oauth properties
	at_hash?: string; // eslint-disable-line camelcase -- Reason: api response
	amr?: Array<string>;
	iss?: string;
	nonce?: string;
	aud?: string;
	c_hash?: string; // eslint-disable-line camelcase -- Reason: api response
	nbf?: number;
	azp?: string;
	exp?: number,
	iat?: number
}

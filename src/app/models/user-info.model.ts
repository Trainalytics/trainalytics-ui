export interface UserInfo {
	/**
	 * Sub of the user (identifier)
	 */
	sub: string;
	/**
	 * Email of the user
	 */
	email: string;
	/**
	 * Full name of the user
	 */
	name: string;
	/**
	 * Picture address of the user
	 */
	picture: string;
	/**
	 * The language of the connected user
	 * @example // fr
	 */
	lang: string;
}

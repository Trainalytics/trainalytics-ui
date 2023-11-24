export interface NavLink {
	/**
	 * The icon to display beside the label
	 */
	icon: string;
	/**
	 * The i18n key for translation
	 */
	labelKey: string;
	/**
	 * The navigation route
	 */
	route: string;
	/**
	 * Inform whether the link is shown in the navigation zone or
	 * hidden because already present in the nav dropdown
	 */
	hidden?: boolean;
}

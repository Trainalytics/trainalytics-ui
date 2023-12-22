export interface ActivityResume {
	/**
	 * The name of the activity
	 */
	name: string;
	/**
	 * The type of the activity
	 * @example running, cycling
	 */
	type: string;
	/**
	 * The average heart rate of the activity
	 */
	averageHr: string;
	/**
	 * The distance of the activity
	 */
	distance: string;
	/**
	 * The duration of the activity
	 */
	duration: string;
}

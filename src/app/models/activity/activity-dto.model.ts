export interface ActivityDto {
	/**
	 * Id of the activity
	 */
	id: string;
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
	averageHr: number;
	/**
	 * The average pace of the activity
	 */
	averagePace: string;
	/**
	 * The distance of the activity
	 */
	distance: number;
	/**
	 * The duration of the activity
	 */
	duration: string;
	/**
	 * Array containing all heart rates recorded during activity
	 */
	allHr: Array<number>;
	/**
	 * Array containing all paces recorded during the activity
	 */
	allPace: Array<string>;
}

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
	 * Heart rate data of the activity
	 */
	hrData: {
		/**
		 * The average heart rate of the activity
		 */
		averageHr: number;
		/**
		 * The average heart rate of the activity
		 */
		maxHr: number;
		/**
		 * Array containing all heart rates recorded during activity
		 */
		allHr: Array<number>;
	};
	/**
	 * Pace data of the activity
	 */
	paceData: {
		/**
		 * The average pace of the activity
		 */
		averagePace: string;
		/**
		 * The average pace of the activity
		 */
		maxPace: string;
		/**
		 * The average pace of the activity
		 */
		averageSpeed: number;
		/**
		 * The average pace of the activity
		 */
		maxSpeed: number;
		/**
		 * Array containing all paces recorded during the activity
		 */
		allPace: Array<number>;
	};
	/**
	 * The distance of the activity
	 */
	distance: number;
	/**
	 * The duration of the activity
	 */
	duration: string;
}

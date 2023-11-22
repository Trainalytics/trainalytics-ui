/**
 * This interface describe the primeng Dropdown event as it's loosely typed
 * @see https://primefaces.org/primeng/showcase/#/dropdown
 */
export interface ChangeEvent {
	/**
	 * The original change event on the dropdown
	 * Note: on keyboard selection, the originalEvent is undefined
	 */
	originalEvent?: Event;
	/**
	 * The value set in the dropdown
	 */
	value: any; // eslint-disable-line @typescript-eslint/no-explicit-any -- Reason: value can be anything
}

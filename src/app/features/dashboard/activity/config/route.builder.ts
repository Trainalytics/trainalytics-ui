
/**
 * The route fragment to the activity component
 */
export const activityFragment = 'activity';

/**
 * The name of the param used for the activity id in the route
 */
export const activityIdParamName = 'id';

/**
 * The name of the param used for the activity id in the route
 */
export const activityIdPlaceholder = `:${activityIdParamName}`;

/**
 * Create the rote to the template detail
 * @param activityId - the id of an activity
 * @returns the route created
 */
export function activityDetailsRoute(activityId?: string): string {
	let url = activityId ?? '';

	if (url.indexOf(':') < 0) {
		url = encodeURIComponent(url);
	}

	return url;
}

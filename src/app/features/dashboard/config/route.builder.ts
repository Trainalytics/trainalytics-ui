import { addFeatureRoute } from '@config/route.builder';

/**
 * The fragment of url related to the dashboard tab
 */
export const dashboardFragment = 'dashboard';

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
 * Build the route to the dashboard page
 * @param withFeatureRoute - if the prefix related to the feature module has to be prepended or not (ex: for navigation from out of the module it has to be)
 * @returns the builded route
 */
export function dashboardRoute(withFeatureRoute?: boolean): string {
	let featurePrefix;
	if (withFeatureRoute) {
		featurePrefix = dashboardFragment;
	}
	return addFeatureRoute('', withFeatureRoute, featurePrefix);
}

/**
 * Create the route to the activity detail
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

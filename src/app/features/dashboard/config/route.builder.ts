import { addFeatureRoute } from '@config/route.builder';

/**
 * The fragment of url related to the dashboard tab
 */
export const dashboardFragment = 'dashboard';

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

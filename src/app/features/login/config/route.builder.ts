import { addFeatureRoute } from '@config/route.builder';

/**
 * The fragment of url related to the login tab
 */
export const loginFragment = 'login';

/**
 * Build the route to the login page
 * @param withFeatureRoute - if the prefix related to the feature module has to be prepended or not (ex: for navigation from out of the module it has to be)
 * @returns the builded route
 */
export function loginCreationRoute(withFeatureRoute?: boolean): string {
	let featurePrefix;
	if (withFeatureRoute) {
		featurePrefix = loginFragment;
	}
	return addFeatureRoute('', withFeatureRoute, featurePrefix);
}

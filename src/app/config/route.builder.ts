/**
 * Prefix the url with the feature route fragment
 * @param url - the url without the module prefix
 * @param shouldAddRoot - if the url has to be prefixed with the module fragment -> example : app.com/{module.name}
 * @param featurePrefix - the feature module name to prefix the url with, if any
 * @returns the prefixed url
 */
export function addFeatureRoute(url: string, shouldAddRoute?: boolean, featurePrefix?: string): string {
	const routeFragments = [];
	if (shouldAddRoute) {
		routeFragments.push('/' + featurePrefix);
	}
	if (url) {
		routeFragments.push(url);
	}

	return routeFragments.join('/');
}

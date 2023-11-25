import { addFeatureRoute } from './route.builder';

describe('addFeatureRoute', () => {
	const trainingId = '1';
	const url = `training/${trainingId}`;
	const featurePrefix = 'prefix';

	describe('when shouldAddRoute param is true', () => {
		const shouldAddRoute = true;

		describe('and featurePrefix is set', () => {
			it('should return the correct featureRoute', () => {
				const route = addFeatureRoute(url, shouldAddRoute, featurePrefix);
				expect(route).toBe('/prefix/training/1');
			});
		});

		describe('and featurePrefix is NOT set', () => {
			it('should return the correct featureRoute', () => {
				const route = addFeatureRoute(url);
				expect(route).toBe('training/1');
			});
		});
	});

	describe('when shouldAddRoute param is false', () => {
		const shouldAddRoute = false;

		describe('and featurePrefix is set', () => {
			it('should return the correct featureRoute', () => {
				const route = addFeatureRoute(url, shouldAddRoute, featurePrefix);
				expect(route).toBe('training/1');
			});
		});

		describe('and featurePrefix is NOT set', () => {
			it('should return the correct featureRoute', () => {
				const route = addFeatureRoute(url, shouldAddRoute);
				expect(route).toBe('training/1');
			});
		});
	});
});

import { EnvInfo } from '@models/env-info.model';

/**
 * Mock used to fake the environment configuration
 */
export const envConfigMock: EnvInfo = {
	authClientId: 'dummyId',
	authIssuer: 'dummyAuth',
	name: 'unit-tests',
	authAllowedUrl: [],
	trainalyticsApi: 'http://trainalytics-api.com'
};

import { OAuthModuleConfig } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '@auth/services/auth.service';
import { AppConfigService } from '@core/services/app-config.service';

/**
 * Function that initialize the app
 * @param appConfigService - the service that loads the config
 * @param oauthConfig - the configuration of the oauth module to set allowedUrls from the env config
 * @param authService - the service that initialize authentication
 * @returns the loadConfig promise
 */
export function appInitializerFactory(
	appConfigService: AppConfigService,
	oauthConfig: OAuthModuleConfig,
	authService: AuthService,
): () => Observable<void> {
	return () => appConfigService.loadAppConfig().pipe(
		switchMap(config => {
			oauthConfig.resourceServer.allowedUrls = config.authAllowedUrl;
			return authService.setup(config);
		}),
	);
}

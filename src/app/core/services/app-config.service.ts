import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvInfo } from '@models/env-info.model';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environments.prod';

@Injectable({
	providedIn: 'root'
})
export class AppConfigService {
	/**
	 * Version of the application
	 */
	readonly appVersion = environment.version;

	/**
	 * Configuration of the current environment
	 */
	appConfig: EnvInfo;

	constructor(
		private readonly httpClient: HttpClient
	) { }

	/**
	 *Load the configuration from the env.json file
	 * @returns the environment configuration
	 */
	loadAppConfig(): Observable<EnvInfo> {
		// return this.httpClient.get<EnvInfo>(`/config/env.json?version=${this.appVersion}`)
		// 	.pipe(
		// 		tap((config: EnvInfo) => this.appConfig = config)
		// 	)
		return this.httpClient.get<EnvInfo>(`/config/env.json`)
			.pipe(
				tap((config: EnvInfo) => this.appConfig = config)
			)
	}
}

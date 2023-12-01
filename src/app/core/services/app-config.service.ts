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

	envInfo: EnvInfo;

	constructor(
		private readonly httpClient: HttpClient
	) { }

	loadAppConfig(): Observable<EnvInfo> {
		return this.httpClient.get<EnvInfo>(`/config/env.json?version=${this.appVersion}`)
			.pipe(
				tap((config: EnvInfo) => this.envInfo = config)
			)
	}
}

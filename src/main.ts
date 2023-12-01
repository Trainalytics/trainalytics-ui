import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environments';
import { enableProdMode } from '@angular/core';

if (environment.production) {
	enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
	.catch(err => {
		console.error(err);// eslint-disable-line no-console -- Reason: fatal error
	});

import { NgModule, isDevMode } from '@angular/core';
import { TranslocoModule, provideTransloco } from '@ngneat/transloco';
import { TranslocoCustomLoader } from './loaders/transloco.loader';
import { availableLangs, defaultLang } from '@models/lang.model';

@NgModule({
	exports: [
		TranslocoModule
	],
	providers: [
		provideTransloco({
			config: {
				availableLangs,
				defaultLang,
				fallbackLang: defaultLang,
				reRenderOnLangChange: true,
				prodMode: !isDevMode()
			},
			loader: TranslocoCustomLoader,
		}),
	],
})
export class TranslocoRootModule { }

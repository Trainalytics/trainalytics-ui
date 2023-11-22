import { NgModule } from '@angular/core';
import { TranslocoModule, provideTransloco } from '@ngneat/transloco';
import { provideTranslocoPersistLang } from '@ngneat/transloco-persist-lang';
import { defineInitialAppLanguage, TranslocoCustomLoader } from './loaders/transloco.loader';
import { availableLangs, defaultLang } from '@models/locale.model';


/**
 * This is the root module for the i18n managed by Transloco
 */
@NgModule({
	exports: [TranslocoModule],
	providers: [
		provideTransloco({
			config: {
				availableLangs,
				defaultLang,
				fallbackLang: defaultLang,
				reRenderOnLangChange: true,
			},
			loader: TranslocoCustomLoader,
		}),
		provideTranslocoPersistLang({
			getLangFn: defineInitialAppLanguage,
			storage: {
				useValue: localStorage,
			},
		}),
	],
})
export class TranslocoRootModule { }

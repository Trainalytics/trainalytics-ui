import { NgModule } from '@angular/core';

import { TranslocoTestingModule, TranslocoTestingOptions } from '@ngneat/transloco';
import fr from '@assets/i18n/fr.json';
import de from '../../assets/i18n/de.json';
import en from '../../assets/i18n/en.json';
import { Lang, lang } from '@models/locale.model';

/**
 * Transloco Module factory used for unit tests
 * @param defaultLang - the lang (json file) to use as default for the current test
 * @param options - some options to configure transloco
 * @returns the created ngmodule
 */
export function translocoTestingModuleFactory(defaultLang: Lang = lang.en, options: TranslocoTestingOptions = {}): NgModule {
	return TranslocoTestingModule.forRoot({
		langs: { fr, de, en },
		translocoConfig: {
			availableLangs: [lang.en, lang.fr, lang.de],
			defaultLang,
		},
		preloadLangs: true,
		...options,
	});
}

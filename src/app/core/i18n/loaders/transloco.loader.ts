import { inject, Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Translation, TranslocoLoader } from '@ngneat/transloco';
import { Lang } from '@models/lang.model';
import { isLangAvailable } from '../i18n.helper';
import { GetLangParams } from '@ngneat/transloco-persist-lang';
import { HttpClient } from '@angular/common/http';

/**
 * This loader is the extension for the native transloco service
 * @see https://ngneat.github.io/transloco/docs/hack#the-loader
 */
@Injectable({
	providedIn: 'root'
})
export class TranslocoCustomLoader implements TranslocoLoader {

	private http = inject(HttpClient);

	/**
	 * Fetch the translations file for a given locale
	 * @param lang - the locale of the language
	 * @returns the translation file observable
	 */
	getTranslation(lang: Lang) {
		return this.http.get<Translation>(`../../../../assets/i18n/${lang}.json`);
	}
}

/**
 * Define what language the app should init with
 * @param root0 - the lang param object
 * @param root0.cachedLang - the lang stored on explicit change
 * @param root0.browserLang - the language of the browser
 * @param root0.defaultLang - the default transloco language from the config
 * @returns the language to init the app with
 */
export function defineInitialAppLanguage({ cachedLang, browserLang, defaultLang }: GetLangParams): string {
	// Choose in priority the language explicitly set by the user
	if (cachedLang && isLangAvailable(cachedLang)) {
		return cachedLang;
	}

	// then the language of the browser
	if (browserLang && isLangAvailable(browserLang)) {
		return browserLang;
	}

	// last ressort the default language set in the app config
	return defaultLang;
}

import { inject, Injectable } from '@angular/core';
import { Translation, TranslocoLoader } from '@ngneat/transloco';
import { Lang } from '@models/lang.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class TranslocoCustomLoader implements TranslocoLoader {
	/**
	 * Httpclient used to request the i18n config file
	 */
	private http = inject(HttpClient);

	/**
	 * Fetch the translations file for a given lang
	 * @param lang - the lang
	 * @returns the translation file observable
	 */
	getTranslation(lang: Lang) {
		return this.http.get<Translation>(`../../../../assets/i18n/${lang}.json`);
	}
}

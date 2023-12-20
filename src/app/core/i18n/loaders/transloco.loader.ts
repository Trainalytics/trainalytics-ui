import { inject, Injectable } from '@angular/core';
import { Translation, TranslocoLoader } from '@ngneat/transloco';
import { Lang } from '@models/lang.model';
import { HttpClient } from '@angular/common/http';
import { isLangAvailable } from '../i18n.helper';
import { IdToken } from '@models/id-token.model';
import { GetLangParams } from '@ngneat/transloco-persist-lang';
import { SESSION_STORAGE_IDTOKEN } from '@auth/constants/auth.constant';

@Injectable({
	providedIn: 'root'
})
export class TranslocoCustomLoader implements TranslocoLoader {
	constructor(private http: HttpClient) { }

	/**
	 * Fetch the translations file for a given lang
	 * @param lang - the lang
	 * @returns the translation file observable
	 */
	getTranslation(lang: Lang) {
		return this.http.get<Translation>(`../../../../assets/i18n/${lang}.json`);
	}
}

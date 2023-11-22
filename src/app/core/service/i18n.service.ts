import { Injectable } from '@angular/core';
import { Lang } from '@models/locale.model';
import { TranslationWithParam } from '@models/translation-with-param.model';
import { TranslocoService } from '@ngneat/transloco';
import { combineLatest, filter, pluck, tap } from 'rxjs';

/**
 * The key of the primeng translation in the i18n json file
 */
const primengTranslationKey = 'primeng';

/**
 * Service related to the i18n translations
 */
@Injectable({
	providedIn: 'root'
})
export class I18nService {
	/**
	 * Whether the translations are ready to be used or not
	 */
	areTranslationsReady = false;

	constructor(
		// private primeConfig: PrimeNGConfig,
		public translocoService: TranslocoService,
	) {
		const onLangChange$ = this.translocoService.langChanges$.pipe(
			tap(() => this.areTranslationsReady = false)
		);
		const onTranslationFileLoaded$ = this.translocoService.events$.pipe(
			filter(e => e.type === 'translationLoadSuccess'),
			pluck('payload')
		);
		const onTranslationReady$ = this.translocoService.selectTranslation().pipe(
			tap(() => this.areTranslationsReady = true)
		);
		// we need to watch these observables because:
		// langChange is triggered too early if the translation file has to be loaded and
		// if we set back an already loaded language, then the load will not fire and we need the langChange
		combineLatest([onTranslationFileLoaded$, onLangChange$, onTranslationReady$])
			.subscribe(([_loadInfo, _lang, _currentTranslation]) => this.updatePrimeComponentLocale());
		this.updateHtmlLang();
	}

	/**
	 * Gets the current active language
	 * @returns the currently active language
	 */
	getActiveLang(): Lang {
		return this.translocoService.getActiveLang() as Lang;
	}

	/**
	 * Gets the available registered languages
	 * @returns the available languages
	 */
	getAvailableLangs(): Array<Lang> {
		return this.translocoService.getAvailableLangs() as Array<Lang>;
	}

	/**
	 * Update the value of the html[lang] attribute
	 */
	updateHtmlLang(): void {
		document.documentElement.lang = this.getActiveLang();
	}

	/**
	 * Change the application's active language to a new one
	 * @param lang - the language to switch to
	 */
	setActiveLang(lang: Lang): void {
		this.translocoService.setActiveLang(lang);
		this.updateHtmlLang();
	}

	/**
	 * Update the locale of the primeng component (ex: fieldset)
	 */
	updatePrimeComponentLocale(): void {
		const translations = this.translocoService.translateObject(primengTranslationKey);
		if (typeof translations === 'object') {
			// this.primeConfig.setTranslation(translations);
		}
	}

	/**
	 * Translate a given key into the current language
	 * @param translation - the translation object which contains params and text to translate
	 * @returns the translated text
	 */
	translate(translation: TranslationWithParam | string): string {
		const t = this.translocoService.translate.bind(this.translocoService);
		return typeof translation === 'string' ? t(translation) : t(translation.text, translation.params);
	}
}

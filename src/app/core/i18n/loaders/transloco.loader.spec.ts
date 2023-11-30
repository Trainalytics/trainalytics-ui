import { defineInitialAppLanguage } from './transloco.loader';

describe('defineInitialAppLanguage method', () => {
	it('should use the user choosen language if any', () => {
		const cachedLang = 'en';

		const chosenLang = defineInitialAppLanguage({
			cachedLang,
			defaultLang: 'fr',
			browserLang: 'de',
			cultureLang: 'it-CH',
		});

		expect(chosenLang).toBe(cachedLang);
	});

	it('should use the default language in last ressort if previous languages are not supported', () => {
		const langParam = {
			cachedLang: null,
			defaultLang: 'fr',
			browserLang: 'ar',
			cultureLang: 'it-CH',
		};

		const chosenLang = defineInitialAppLanguage(langParam);

		expect(chosenLang).toBe(langParam.defaultLang);
	});
});

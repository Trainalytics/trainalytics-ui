import { availableLangs, Lang } from '@models/locale.model';

/**
 * Check if a given language is available for translations in the app
 * @param lang - the lang to check if available
 * @returns true if the language passed is available in the app
 */
export function isLangAvailable(lang: Lang | string): boolean {
	return availableLangs.includes(lang as Lang);
}

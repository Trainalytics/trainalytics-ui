/**
 * The list of available languages for the app
 * This list needs to be synced with the transloco.config.js file
 */
export const lang = {
	fr: 'fr',
	de: 'de',
	en: 'en',
} as const;

/**
 * The default language of the app
 */
export const defaultLang = lang.fr;

/**
 * Array of available language for the app
 */
export const availableLangs = Object.values(lang);

/**
 * The type for the key of the lang enum
 */
type LangKey = keyof typeof lang;

/**
 * The type for the lang enum's values
 */
export type Lang = typeof lang[LangKey];

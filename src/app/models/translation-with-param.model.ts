
import { HashMap } from '@ngneat/transloco';

/**
 * An object which contains the text to translate and the
 * related params to replace in the content
 */
export interface TranslationWithParam {
	text: string,
	params?: HashMap<unknown>
}

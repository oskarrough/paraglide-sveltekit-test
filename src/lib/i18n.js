import { createI18n } from '@inlang/paraglide-sveltekit';
import * as runtime from '$lib/paraglide/runtime.js';

export const i18n = createI18n(runtime, {
	prefixDefaultLanguage: 'never',

	pathnames: {
		'/about': {
			da: '/om-os',
			en: '/about'
		}
	}
});

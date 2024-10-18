import { languageTag } from '$lib/paraglide/runtime';

// export const prerender = true;

/** * @type { import("./$types").LayoutServerLoad} */
export function load({ depends }) {
	depends('paraglide_lang');

	return {
		serverLang: `The server language is ${languageTag()}`
	};
}

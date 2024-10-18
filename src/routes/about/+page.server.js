import { languageTag } from '$lib/paraglide/runtime';

/** @type {import('./$types').PageServerLoad} */
export async function load({ depends }) {
	// This tells SvelteKit to re-run the function when `invalidate('paraglide_lang')` is called.
	depends('paraglide_lang');

	const lang = languageTag()
	return {
		lang,
		title: `My about page is ${lang}`
	};
}

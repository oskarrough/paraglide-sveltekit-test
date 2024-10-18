<script>
	import { availableLanguageTags, languageTag } from '$lib/paraglide/runtime';
	import { i18n } from '$lib/i18n';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { get } from 'svelte/store';

	/** @param { import("$lib/paraglide/runtime").AvailableLanguageTag } newLanguage */
	async function switchToLanguage(newLanguage) {
		const canonicalPath = i18n.route(get(page).url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
		await goto(localisedPath, { invalidateAll: true });
	}
</script>

<nav>
	<p>Current language: {languageTag().toUpperCase()}</p>

	<a
		data-sveltekit-reload
		href="/about"
		hreflang="da"
		aria-current={languageTag() === 'da' ? 'page' : false}>Dansk</a
	>
	<a
		data-sveltekit-reload
		href="/about"
		hreflang="en"
		aria-current={languageTag() === 'en' ? 'page' : false}>English</a
	>

	<select onchange={(e) => switchToLanguage(/** @type {any} */ (e).target.value)}>
		{#each availableLanguageTags as langTag}
			<option value={langTag} selected={languageTag() === langTag}>{langTag}</option>
		{/each}
	</select>
</nav>

<style>
	a[aria-current='page'] {
		color: red;
	}
</style>

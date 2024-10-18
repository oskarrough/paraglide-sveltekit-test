<script>
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { i18n } from '$lib/i18n';
	import LanguageSwitcher from '$lib/language-switcher.svelte';

	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<LanguageSwitcher />
	{@render children()}
</ParaglideJS>

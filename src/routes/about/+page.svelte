<script>
	import * as m from '$lib/paraglide/messages.js';
	import { languageTag } from '$lib/paraglide/runtime.js';
	const { data } = $props();
</script>

<p>Message translation via paraglide works:</p>
<h1>{languageTag()}: {m.about()}</h1>

<p>
	BUT, page load functions are not re-run on language change, so this data is not updated as it
	should:
</p>
<h1>{data.lang}: {data.title}</h1>

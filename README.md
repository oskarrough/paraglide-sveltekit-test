This is a test of `@inlang/paraglide-sveltekit` package.

If any of your routes has a `load()` function that fetches language specific data for your page,
you want to make sure it is re-run when the language switches.

To do this, paraglide-sveltekit uses the `depends()` + `invalidate()` APIs of Svelte.

You add `depends('paraglide_lang')` (or some other key) to your load functions:  
https://github.com/oskarrough/paraglide-sveltekit-test/blob/main/src/routes/about/%2Bpage.server.js#L6

Now, you either call `invalidate('paraglide_lang')`, `invalidateAll()` or force a page reload.

The language switcher selects calls `invalidateAll()`:  
https://github.com/oskarrough/paraglide-sveltekit-test/blob/main/src/lib/language-switcher.svelte#L12

We use `data-sveltekit-reload` to force a reload on language links:  
https://github.com/oskarrough/paraglide-sveltekit-test/blob/main/src/lib/language-switcher.svelte#L20

I think this should be called automatically though from paraglide-sveltekit, but it doesn't at the moment.

## how to dev

```
bun i
bun dev
```

## initial setup

```shell
bun create svelte@latest # choose svelte 5
bunx @inlang/paraglide-sveltekit init
```

# Anchor Options

- [Anchor Options](#anchor-options)
  - [sveltekit:prefetch](#sveltekitprefetch)
  - [sveltekit:noscroll](#sveltekitnoscroll)
  - [rel=external](#relexternal)

## sveltekit:prefetch

- code splitting to break your app into small chunks (one per route)
- run the page's `load` function as soon as the user hovers over the link
- will not work if the `router` setting is `false`
- programmatically invoke `prefetch` from `$app/navigation` is also possible

```svelte
<a sveltekit:prefetch href="blog/what-is-sveltekit">What is SvelteKit?</a>
```


## sveltekit:noscroll

- prevent scrolling after the link is clicked

```svelte
<a href="path" sveltekit:noscroll>Path</a>
```

## rel=external

- handle by normal browser navigation instead of `router` navigation
- will trigger a browser navigation when the link is clicked

```svelte
<a rel="external" href="path">Path</a>
```
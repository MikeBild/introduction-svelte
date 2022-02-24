# Page Options

- [Page Options](#page-options)
  - [router](#router)
  - [hydrate](#hydrate)
  - [prerender](#prerender)

- by **default**, render any component first on the server and send it to the client as HTML
- **hydration**, render the component again in the browser to make it interactive
- control `router`, `hydrate`, `prerender` on a per-app or per-page basis
- note, in case of per-page basis use `context="module"` in `<script>`
- per-page settings override per-app settings

## router

- includes a client-side router that intercepts navigations 

```svelte
<script context="module">
  export const router = false;
</script>
```

## hydrate

- **hydrates** your server-rendered HTML into an interactive page
- **hydrate** and **router** are both false, SvelteKit will not add any JavaScript to the page at all

```svelte
<script context="module">
  export const hydrate = false;
</script>
```

## prerender

> Note: For a page to be prerenderable, any two users hitting it directly must get the same content from the server.


- pages can be prerendered by your adapter (e.g. static-adapter)
- will generate HTML files for every page
- additional files that are requested by `load` functions in those page
- each page is scanned for `<a>` elements are candidates for prerendering
- alternatively, use `entries` in the prerender configuration 

```svelte
<script context="module">
  export const prerender = true;
</script>
```
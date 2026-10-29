# Pages

- pages are components written as `.svelte` files
- by default, first visit will serve a server-rendered version
  - plus some JavaScript that 'hydrates' the page
  - plus initialises a client-side router
- after first SSR, navigating is handled on the client
- the filename determines the route e.g.
  - `src/routes/index.svelte` for the start page `/`
  - `src/routes/about.svelte` for the about page `/about`
- dynamic parameters are encoded using `[brackets]`
  - `src/routes/blog/[slug].svelte` for `/blog/first-article`
  - parameters can be accessed in a `load` function or via the `page` store
  - file or directory can have multiple non-greedy dynamic parts, like `[id]-[category].svelte`


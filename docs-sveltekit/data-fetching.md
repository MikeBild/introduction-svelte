# Data Fetching

- [Data Fetching](#data-fetching)
  - [Input data](#input-data)
  - [Output data](#output-data)

- runs on SSR and client, to fetch data before the page is rendered
- export a `load` function that runs before the component is created
- If the data for a page comes from its endpoint, you may not need a `load` function
- `<script context="module">` — necessary because load runs before the component is rendered
- `load` function is reactive, and will re-run when its parameters change
- code that is per-component instance should go into a second `<script>` tag
  
**`src/routes/blog/[slug].svelte`**
```svelte
<script context="module">
  export async function load({ params, fetch, session, stuff }) {
    const response = await fetch(`https://api.example.com/article/${params.slug}`);

    return {
      status: response.status,
      props: {
        article: response.ok && (await response.json())
      }
    };
  }
</script>
```

## Input data

- load function receives an object containing six fields
  - `url` - containing properties like the `origin`, `hostname`, `pathname` and `searchParams`
  - `params` - derived from `url.pathname` and the route filename like `src/routes/a/[b]/[...c]`
  - `props` - contains data from page endpoint
  - `fetch` - equivalent to the native `fetch` web API, it's accessible from client and server context
  - `session` - used to pass data from the server to the current request (e.g. current user)
  - `stuff` - passed from layouts to descendant layouts and pages

## Output data

- object returned as `Promise` from `load`
  - `status` - HTTP status code for the page
  - `error` - return an Error object or a string
  - `redirect` - return a string containing the location
  - `maxage` - cache max age of the page in seconds
  - `props` -  passed to the component when it is rendered (page endpoint)
  - `stuff` - merged with any existing `stuff` and passed to the `load` functions of subsequent layout and page components
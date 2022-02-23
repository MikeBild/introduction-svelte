# Data Fetching

- [Data Fetching](#data-fetching)
  - [Input data](#input-data)
  - [Output data](#output-data)

- runs on SSR and client, to fetch data before the page is rendered
- export a `load` function that runs before the component is created
- If the data for a page comes from its endpoint, you may not need a `load` function
- `<script context="module">` — necessary because load runs before the component is rendered
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
  - `url` 
  - `params` 
  - `props` 
  - `fetch` 
  - `session`
  - `stuff`

## Output data


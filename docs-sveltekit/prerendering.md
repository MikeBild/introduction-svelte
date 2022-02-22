# Prerendering with SvelteKit

SvelteKit supports prerendering pages at build time. A page will be prerendered if:

- the entire site is statically generated (all pages are prerendered)
- the page is listed in the `prerender.entries` field of the config file
- explicitly configured to be prerendered on a per page basis

## Static Generated Site

- great for SEO since all the content will be server side rendered during build time
- performant, only static files are served
- easier to deploy

SvelteKit provides an [static adapter]() that can prerender all the pages at build time. 

`npm i --save-dev @sveltejs/adapter-static`

**svelte.config.js**
```javascript
import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter()
  }
};
```

### Explicitly list which pages should be prerendered

**svelte.config.js**
```javascript
export default {
  kit: {
    prerender: {
      entries: [
        '/article/123',
        '/article/234'
        // ...
      ]
    }
  }
};
```

### Prerender a specific page

- will try to prerender this page at build time
- by default, SvelteKit will also crawl the page to find all the links within the page and prerender them as well

**index.svelte**
```html
<script context="module" lang="ts">
  export const prerender = true;
</script>
```

### Totally static site generation

- by default, SvelteKit will supports client side routing via JavaScript in the browser
- it is possible to deactive client side JavaScript generation for all or specific pages

... per default

**svelte.config.js**
```javascript
export default {
  kit: {
    //...
    hydrate: false,
    router: false
  }
};
```
... per page 

**index.svelte**
```html
<script context="module" lang="ts">
  export const hydrate = false;
  export const router = false;
</script>
```

### Loading data for prerendered pages

- `load` function are called before the component/page are rendered
- will be called on server side and client side

**index.svelte**
```html
<script context="module" lang="ts">
  import { getArticles } from '$lib/api';
  import type { LoadInput } from '@sveltejs/kit';

  export async function load({ fetch }: LoadInput) {
    const { items } = await getArticles(fetch);
    return {
      props: {
        items
      }
    };
  }
</script>
```
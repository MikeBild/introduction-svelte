# Markdown Svelte Extention

- Use Markdown in SvelteKit by [MDsveX](https://github.com/pngwn/MDsveX)

## Setup

`npm i -D mdsvex`

**svelte.config.js**
```javascript
import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
export default {
	extensions: ['.svelte'],
	preprocess: [preprocess(), mdsvex({extensions: ['.svelte.md']})],
	kit: {
		target: '#svelte',
		adapter: adapter(),
		prerender: {
			onError: 'continue'
		}
	}
};
```

**routes/my-page.svelte.md**
```md
---
description: "That's a short article to demonstrate Markdown + SvelteKit extention."
buttonLabel: "Click Me!"
---

<script>
  import { Button } from '@introduction-svelte/svelte-components';
function onButtonClick() {
    alert(description);
}
</script>

Lorem ipsum dolor sit amet, ...

<Button label={buttonLabel} on:action={onButtonClick} />

### Heading

In lectus erat, ...
```

## Example

- [SvelteKit Server Side Rendering](../examples/sveltekit-ssr/README.md)


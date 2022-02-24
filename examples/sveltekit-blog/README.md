# SvelteKit Blog Example

- [SvelteKit Blog Example](#sveltekit-blog-example)
  - [Add MDSveX preprocessor](#add-mdsvex-preprocessor)
  - [Add a static Article using MDSveX](#add-a-static-article-using-mdsvex)
  - [Add a SEO component](#add-a-seo-component)
## Add MDSveX preprocessor

Svelte in Markdown [MDSveX docs](https://mdsvex.pngwn.io/docs)

**Setup**

`yarn add --dev mdsvex`

**`svelte.config.js`**
```javascript
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

export default {
	extensions: ['.svelte', '.svelte.md'],
	preprocess: [mdsvex({ extension: '.svelte.md' }), sveltePreprocess()],
}
```

## Add a static Article using MDSveX

## Add a SEO component
# SvelteKit Blog Example

## MDSveX

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
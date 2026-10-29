import adapter from '@sveltejs/adapter-node';
import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
export default {
	extensions: ['.svelte.md', '.svelte'],
	preprocess: [preprocess(), mdsvex({ extensions: ['.svelte.md'] })],
	kit: {
		target: '#svelte',
		adapter: adapter(),
		prerender: {
			onError: 'continue'
		}
	}
};

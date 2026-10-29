import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: preprocess(),
	kit: {
		router: true,
		hydrate: true,
		appDir: 'app',
		adapter: adapter({
			precompress: false
		}),
		prerender: {
			crawl: true,
			enabled: true,
			entries: ['*'],
			onError: 'continue'
		}
	}
};

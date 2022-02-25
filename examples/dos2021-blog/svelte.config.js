import { adapter } from 'sveltekit-adapter-aws';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

export default {
	extensions: ['.svelte', '.svelte.md'],
	preprocess: [mdsvex({ extension: '.svelte.md' }), preprocess()],
	kit: {
		adapter: adapter({
			FQDN: 'dos2021-blog-mike.mikebild.com',
			stackName: 'dos2021-blog-mike',
			autoDeploy: true
		})
	}
};

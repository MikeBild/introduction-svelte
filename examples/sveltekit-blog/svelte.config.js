import sveltePreprocess from 'svelte-preprocess';
import { adapter } from 'sveltekit-adapter-aws';
import { mdsvex } from 'mdsvex';

export default {
	extensions: ['.svelte', '.svelte.md'],
	preprocess: [mdsvex({ extension: '.svelte.md' }), sveltePreprocess()],
	kit: {
		adapter: adapter({
			FQDN: 'sveltekit-blog.mikebild.com',
			stackName: 'sveltekit-blog',
			autoDeploy: true
		})
	}
};

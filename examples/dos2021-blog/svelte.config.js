import { adapter } from 'sveltekit-adapter-aws';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

export default {
	extensions: ['.svelte', '.svelte.md'],
	preprocess: [mdsvex({ extension: '.svelte.md' }), preprocess()],
	kit: {
		adapter: adapter({
			cdkProjectPath: `${process.cwd()}/deploy.js`,
			autoDeploy: true
		})
	}
};

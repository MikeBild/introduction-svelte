import { adapter } from 'sveltekit-adapter-aws';
import preprocess from 'svelte-preprocess';

export default {
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
			FQDN: 'sveltekit-blog.mikebild.com',
			stackName: 'sveltekit-blog',
			autoDeploy: 'true'
		})
	}
};

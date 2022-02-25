import { adapter } from 'sveltekit-adapter-aws';
import preprocess from 'svelte-preprocess';

export default {
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
			FQDN: 'dos2021-blog-mike.mikebild.com',
			stackName: 'dos2021-blog-mike',
			autoDeploy: true
		})
	}
};

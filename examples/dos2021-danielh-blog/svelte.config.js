import {adapter} from 'sveltekit-adapter-aws';
import preprocess from 'svelte-preprocess';

export default {
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			FQDN: 'do2021-blog-daniel.mikebild.com',
			stackName: 'dos2021-blog-daniel',
			autoDeploy: false
		})
	}
};

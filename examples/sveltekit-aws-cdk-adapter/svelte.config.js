import { adapter } from 'sveltekit-adapter-aws';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
export default {
  extensions: ['.svelte', '.svelte.md'],
  preprocess: mdsvex({ extension: '.svelte.md' }),
  kit: {
    adapter: adapter({
      autoDeploy: true,
      cdkProjectPath: `${process.cwd()}/deploy.js`,      
    }),
    browser: {
      router: false,
    },
    prerender: {
      crawl: false,
      onError: 'continue',
    },
  },
};

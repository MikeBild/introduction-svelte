# SvelteKit Blog Example

- [SvelteKit Blog Example](#sveltekit-blog-example)
  - [Init SvelteKit](#init-sveltekit)
  - [Add AWS Adapter](#add-aws-adapter)
  - [First deployment to AWS](#first-deployment-to-aws)
  - [Add a about page](#add-a-about-page)
  - [Add a master Layout](#add-a-master-layout)
  - [Refactor to components](#refactor-to-components)
  - [Add SEO stuff](#add-seo-stuff)
  - [Add Google Fonts](#add-google-fonts)
  - [Add MDSveX preprocessor](#add-mdsvex-preprocessor)
  - [Refactor about page to MDSveX](#refactor-about-page-to-mdsvex)
  - [Add a static Article using MDSveX](#add-a-static-article-using-mdsvex)
  - [Add more SEO using a component](#add-more-seo-using-a-component)

## Init SvelteKit

```sh
npm init sveltekit@next sveltekit-blog
cd sveltekit-blog
yarn
yarn dev
```

## Add AWS Adapter

```sh
yarn add -D sveltekit-adapter-aws
```

**`svelte.config.js`**
```javascript
import { adapter } from 'sveltekit-adapter-aws';

export default {
  kit: {
    adapter: adapter({
      FQDN: 'sveltekit-blog.mikebild.com',
      stackName: 'sveltekit-blog',
      autoDeploy: true
    })
  }
}
```

## First deployment to AWS

`yarn build`

## Add a about page

**`src/routes/about.svelte`**
```javascript
<h1>About</h1>
```

## Add a master Layout

## Refactor to components

## Add SEO stuff

## Add Google Fonts
## Add MDSveX preprocessor

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

## Refactor about page to MDSveX

## Add a static Article using MDSveX

## Add more SEO using a component
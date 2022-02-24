# SvelteKit Blog Example

- [SvelteKit Blog Example](#sveltekit-blog-example)
  - [Init SvelteKit](#init-sveltekit)
  - [Add AWS Adapter](#add-aws-adapter)
  - [First deployment to AWS](#first-deployment-to-aws)
  - [Add a about page](#add-a-about-page)
  - [Add a master Layout](#add-a-master-layout)
  - [Refactor to components](#refactor-to-components)
  - [Add title to HTML head](#add-title-to-html-head)
  - [Add Google Fonts](#add-google-fonts)
  - [Refactor about page to be prerendered](#refactor-about-page-to-be-prerendered)
  - [Add MDSveX preprocessor](#add-mdsvex-preprocessor)
  - [Refactor about page to MDSveX](#refactor-about-page-to-mdsvex)
  - [Add a static Article using MDSveX](#add-a-static-article-using-mdsvex)
  - [SEO using a component](#seo-using-a-component)

## Init SvelteKit

```sh
npm init sveltekit@next sveltekit-blog
cd sveltekit-blog
yarn
yarn dev
```

## Add AWS Adapter

**Setup**

`yarn add -D sveltekit-adapter-aws`

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
```svelte
<h1>About</h1>
```

## Add a master Layout

**`src/routes/__layout.svelte`**
```svelte
<ul>
  <li><a href="/">Home</a></li>
  <li><a href="/about">About</a></li>
</ul>
<slot />
```

## Refactor to components

**`src/lib/components/Nav.svelte`**
```svelte
<ul>
  <li><a href="/">Home</a></li>
  <li><a href="/about">About</a></li>
</ul>
```

**`src/routes/__layout.svelte`**
```svelte
<script>
	import Nav from '$lib/components/Nav.svelte';
</script>

<Nav />

<slot />
```

## Add title to HTML head

**`src/routes/__layout.svelte`**
```svelte
<svelte:head>
    <title>SvelteKit Blog Example</title>
</svelte:head>
```

**`src/routes/about.svelte`**
```svelte
<svelte:head>
    <title>SvelteKit Blog Example - About</title>
</svelte:head>
```

## Add Google Fonts

**`src/routes/__layout.svelte`**
```svelte
<svelte:head>    
  <link rel="preconnect" href="https://fonts.gstatic.com" />
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
</svelte:head>

<div class="root-wrapper">	
	<Nav />
	<main>
		<slot />
	</main>
</div>

<style>
	.root-wrapper {
		font-family: 'Roboto', serif;
	}
</style>
```

## Refactor about page to be prerendered

**`src/routes/about.svelte`**
```svelte
<script context="module" lang="ts">
	export const prerender = true;
</script>
```

`yarn build`

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

**`src/routes/about.svelte.md`**
```svelte
# About
```

`yarn build`

## Add a static Article using MDSveX

**`src/routes/blog/first-article.svelte.md`**
```svelte
---
title: Create a Blog with SvelteKit
---

# {title}
```

**`src/lib/components/Nav.svelte`**
```svelte
<nav>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/about">About</a></li>
		<li><a href="/blog/first-article">First Article</a></li>			
	</ul>
</nav>
```

## SEO using a component

**`src/lib/components/SEO.svelte`**
```svelte
<script>
	export let title = '';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
```

**`src/routes/blog/first-article.svelte.md`**
```svelte
---
title: Create a Blog with SvelteKit
---

<script>
    import SEO from '$lib/components/SEO.svelte'
</script>

<SEO {title} />

# {title}
```

# SvelteKit Blog Example

[SvelteKit Blog Example](https://sveltekit-blog.mikebild.com)

- [SvelteKit Blog Example](#sveltekit-blog-example)
	- [Init SvelteKit](#init-sveltekit)
	- [Add AWS Adapter](#add-aws-adapter)
	- [First deployment to AWS](#first-deployment-to-aws)
	- [Add a About page](#add-a-about-page)
	- [Add a Master layout](#add-a-master-layout)
	- [Refactor to use components](#refactor-to-use-components)
	- [SEO - add title to HTML head](#seo---add-title-to-html-head)
	- [Add some Google gonts](#add-some-google-gonts)
	- [Add CSS with SASS preprocessor](#add-css-with-sass-preprocessor)
	- [Refactor the About page to be prerendered](#refactor-the-about-page-to-be-prerendered)
	- [Add Markdown preprocessor using MDSveX](#add-markdown-preprocessor-using-mdsvex)
	- [Refactor About page as Markdown page use MDSveX](#refactor-about-page-as-markdown-page-use-mdsvex)
	- [Add an article using MDSveX](#add-an-article-using-mdsvex)
	- [SEO using a component](#seo-using-a-component)
	- [Add blog article Index page](#add-blog-article-index-page)
	- [Add a feedback component](#add-a-feedback-component)
	- [Refactor using custom AWS-CDK stacks](#refactor-using-custom-aws-cdk-stacks)
	- [Use DynamoDB table to store and fetch feedback](#use-dynamodb-table-to-store-and-fetch-feedback)
	- [Add standalone endpoints for feedback component](#add-standalone-endpoints-for-feedback-component)

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

## Add a About page

**`src/routes/about.svelte`**
```svelte
<h1>About</h1>
```

## Add a Master layout

**`src/routes/__layout.svelte`**
```svelte
<ul>
  <li><a href="/">Home</a></li>
  <li><a href="/about">About</a></li>
</ul>
<slot />
```

## Refactor to use components

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

## SEO - add title to HTML head

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

## Add some Google gonts

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

## Add CSS with SASS preprocessor

**Setup**
`yarn add -D sass`

**`src/app.scss`**
```sass
h1,
h2,
h3,
p,
a,
ul {
	font-family: 'Roboto', sans-serif;
	font-weight: 400;
}

a {
	color: #ff3e00;
	text-decoration: none;
	&:hover {
		color: #40b3ff;
	}
}

code {
	font-family: 'Fira Mono', monospace !important;
	font-size: 14px;
	font-weight: 400;
}

h1 {
	font-size: 40px;
	color: #676778;
}

h2 {
	font-size: 26px;
	color: #444;
}

h3 {
	font-size: 22px;
	color: #222;
}

p,
ul {
	font-size: 18px;
	color: #444;

	&.info {
		font-size: 14px;
		margin-top: 0px;
	}
}
```

## Refactor the About page to be prerendered

**`src/routes/about.svelte`**
```svelte
<script context="module" lang="ts">
	export const prerender = true;
</script>
```

`yarn build`

## Add Markdown preprocessor using MDSveX

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

## Refactor About page as Markdown page use MDSveX

**`src/routes/about.svelte.md`**
```svelte
# About
```

`yarn build`

## Add an article using MDSveX

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

## Add blog article Index page

**Add the Index page**
 
**`src/routes/blog/first-index.svelte`**
```svelte
<script context="module" lang="ts">
	import type { LoadInput } from '@sveltejs/kit';
	import type { Article } from './index';

	export async function load({ props }: LoadInput) {
		return {
			status: 200,
			props
		};
	}
</script>

<script lang="ts">
	export let articles: Article[] = [];
</script>

<h1>Blog Posts</h1>

<ul>
	{#each articles as { title, slug }}
		<li><a href={`/blog/${slug}`}>{title}</a></li>
	{/each}
</ul>
```

**Add the page endpoint**

**`src/routes/blog/index.ts`**
```typescript
export interface Article {
	title: string;
	slug: string;
}

export async function get() {
	const articles = await Promise.all(
		Object.entries(import.meta.glob('./*.svelte.md')).map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const slug = path.replace('.svelte.md', '');
			return { ...metadata, slug };
		})
	);

	return {
		status: 200,
		body: { articles }
	};
}
```

## Add a feedback component

**`src/lib/components/Feedback.svelte`**
```svelte
<script>
	export let count = 0;
	export let onFeedback = () => {};
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
</svelte:head>

<button on:click={onFeedback}>
	<div class="material-icons">thumb_up</div>
	<div class="icon-caption">{count}</div>
</button>
```

**`src/routes/blog/first-article.svelte.md`**
```svelte
<script>    
    import Feedback from '$lib/components/Feedback.svelte';
	
	export let count = 0;   

	async function onFeedback() {} 
</script>

<Feedback {count} {onFeedback} />
```

## Refactor using custom AWS-CDK stacks

**Setup**

`yarn add -D @aws-cdk/core`

**`deploy.js`**
```javascript
#!/usr/bin/env node
import { App } from '@aws-cdk/core';
import { AWSAdapterStack } from 'sveltekit-adapter-aws';

const app = new App();

const { serverHandler, httpApi } = new AWSAdapterStack(app, 'sveltekit-blog', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: 'us-east-1',
  },
  FQDN: 'sveltekit-blog.mikebild.com',
});
```

**`svelte.config.js`**
```javascript
export default {
	kit: {
		adapter: adapter({
			cdkProjectPath: `${process.cwd()}/deploy.js`,
			autoDeploy: true
		})
	}
};
```

## Use DynamoDB table to store and fetch feedback

**`dynamodb-stack.js`**
```javascript
import { Stack } from '@aws-cdk/core';
import { Table, BillingMode, AttributeType, StreamViewType } from '@aws-cdk/aws-dynamodb';

export class DynamoDBStack extends Stack {
	table;
	constructor(scope, id, props) {
		super(scope, id, props);

		this.table = new Table(this, 'DynamoDB-Table', {
			billingMode: BillingMode.PAY_PER_REQUEST,
			partitionKey: {
				name: 'id',
				type: AttributeType.STRING
			},
			sortKey: {
				name: 'type',
				type: AttributeType.STRING
			},
			stream: StreamViewType.NEW_AND_OLD_IMAGES,
			timeToLiveAttribute: 'expiresAt'
		});

		props.serverHandler.addEnvironment('DATATABLE_NAME', this.table.tableName);
		this.table.grantReadWriteData(props.serverHandler);
	}
}
```

**`deploy.js`**
```javascript
#!/usr/bin/env node
import { App } from '@aws-cdk/core';
import { AWSAdapterStack } from 'sveltekit-adapter-aws';
import { DynamoDBStack } from './dynamodb-stack.js';

const app = new App();

const { serverHandler } = new AWSAdapterStack(app, 'sveltekit-blog', {
	env: {
		account: process.env.CDK_DEFAULT_ACCOUNT,
		region: 'us-east-1'
	},
	FQDN: 'sveltekit-blog.mikebild.com'
});

new DynamoDBStack(app, 'sveltekit-blog-datatable', {
	env: {
		account: process.env.CDK_DEFAULT_ACCOUNT,
		region: 'us-east-1'
	},
	serverHandler
});
```

## Add standalone endpoints for feedback component

**`src/routes/api/feedback/[slug].ts]`**
```typescript
import aws from 'aws-sdk';

export async function get({ params }: any) {
	const { slug } = params;
	const db = new aws.DynamoDB({ region: 'us-east-1' });
	const tableName = process.env.DATATABLE_NAME;

	const result = await db
		.scan({
			TableName: tableName,
			ConsistentRead: true,
			Limit: 10000,
			FilterExpression: 'begins_with(#7df00, :7df00) And #7df01 = :7df01',
			ExpressionAttributeValues: {
				':7df00': { S: slug },
				':7df01': { S: 'feedback' }
			},
			ExpressionAttributeNames: {
				'#7df00': 'id',
				'#7df01': 'type'
			}
		})
		.promise();

	return {
		status: 200,
		body: { count: result.Count }
	};
}

export async function post({ params }: any) {
	const { slug } = params;
	const db = new aws.DynamoDB({ region: 'us-east-1' });
	const tableName = process.env.DATATABLE_NAME;

	const result = await db
		.putItem({
			TableName: tableName,
			Item: {
				id: {
					S: `${slug}-${Date.now()}`
				},
				type: {
					S: 'feedback'
				}
			}
		})
		.promise();
	return {
		status: 201
	};
}
```

**`src/routes/blog/first-article.svelte.md`**
```svelte
---
title: Create a Blog with SvelteKit
---

<script context="module">
    export async function load({ fetch, url }) {        
        const currentPathParts = url.pathname.split('/');
        const currentPathSlug = currentPathParts[currentPathParts.length - 1];
        const response = await fetch(`/api/feedback/${currentPathSlug}`);
        const { count } = await response.json();
        
        return {
            status: 200,
            props: { count, currentPathSlug },
        };
    }
</script>

<script>
    import SEO from '$lib/components/SEO.svelte';
    import Feedback from '$lib/components/Feedback.svelte'; 
    import { invalidate } from '$app/navigation';

    export let count = 0;   
    export let currentPathSlug = '';     
    
    async function onFeedback() {
        await fetch(`/api/feedback/${currentPathSlug}`, { method: 'POST' });        
        await invalidate(`/api/feedback/${currentPathSlug}`);
    }
</script>

<SEO {title} />

# {title}

...ipsum larum ...

<Feedback {count} {onFeedback} />
```
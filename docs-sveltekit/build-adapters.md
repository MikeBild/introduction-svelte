# SvelteKit Adapters

 - to deploy your app, you need to adapt it for your deployment target
 - small plugins that take the built app as input and generate output for deployment
 - by default, projects are configured to use `@sveltejs/adapter-auto`

- [SvelteKit Adapters](#sveltekit-adapters)
  - [Static Sites Adapter](#static-sites-adapter)
  - [Node.js Adapter](#nodejs-adapter)
  - [Custom Adapter](#custom-adapter)
  - [AWS Adapter](#aws-adapter)

## Static Sites Adapter

- Most adapters will generate static HTML for any prerenderable pages 
- `@sveltejs/adapter-static@next` the entire app will be prerenderable
- fully static site can be hosted on a wide variety of platforms
- use adapter-static to generate single-page apps (SPAs) by specifying a fallback page

```javascript
import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({ out: 'build' })
  }
};
```

## Node.js Adapter

- simplified Node.js server, use the `@sveltejs/adapter-node@next` adapter
- generate a self-contained Node app inside the `build` directory

```javascript
import adapter from '@sveltejs/adapter-node';

export default {
  kit: {
    adapter: adapter({ out: 'build' })
  }
};
```

## Custom Adapter

```javascript
export default function (options) {
  return {
    name: 'adapter-package-name',
    async adapt(builder) {
      ...
    }
  };
}
```

## AWS Adapter

- https://npm.io/package/sveltekit-adapter-aws
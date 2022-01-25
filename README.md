# Introduction to Svelte and SvelteKit

## Recommendations

- Basic knowledge of
  - JavaScript/TypeScript
  - NodeJS
- [NodeJS LTS](https://nodejs.org/en/download/) | [Node Version Manager](https://nvm.sh)
- [VS Code](https://code.visualstudio.com/download)
- [VS Code Extention](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)
- [Chrome and Developer Tools](https://chrome.google.com/webstore/detail/svelte-devtools/ckolcbmkjpjmangdbmnkpjigpkddpogn)

## Svelte vs. SvelteKit

### Use Svelte if...

- You don't need/want SSR (Server Side Rendering)
- You want to render a component into an existing page
- You want to output things like a vanilla component, a WebComponent or a React component adapter

### Use SvelteKit if...

- You're ok with Beta software and living on the bleeding edge
- You want SSR like Next.js/Nuxt.js
- You want to have a backend API as part of your project
- You want your app to work in a Serverless environment (e.g. Vercel/Netlify)
- You want super fast hot reloading in development (via Vite)

### Scenarios

Still not sure what to use? Maybe these scenarios will help you decide:

- "I'm building a brand new web app (with backend/API)": Use SvelteKit
- "I want to build an SPA (Single Page App) and I have a pre-existing backend and don't need SSR": Use Svelte
- "I want to use Svelte in an existing web app": Use Svelte
- "I'm cautious of new things but want SSR/routing": Use SvelteKit

## Hands-On

### Svelte

- [Why Svelte?](docs-svelte/intro.md)
- [What is Svelte?](docs-svelte/svelte.md)
- [Architecture](docs-svelte/architecture.md)
- [Principles](docs-svelte/principles.md)
- [Setup](docs-svelte/setup-cli.md)
- [Recipies](docs-svelte/recipies.md)
  - [Components](docs-svelte/recipies-components.md) 
  - [Custom-Elements](docs-svelte/recipies-custom-elements.md) 

### SvelteKit

- [Why SvelteKit?](docs-sveltekit/intro.md)
- [What is SvelteKit?](docs-sveltekit/sveltekit.md)
- [Architecture](docs-sveltekit/architecture.md)
- [Principles](docs-sveltekit/principles.md)
- [Setup and CLI](docs-sveltekit/setup-cli.md)
- [Routing](docs-sveltekit/routing.md)
- [Scripts and styles](docs-sveltekit/scripts-styles.md)
- [Layout](docs-sveltekit/layout.md)
- [Server Side](docs-sveltekit/server-side.md)
- [Adapters and Build-Process](docs-sveltekit/build.md)
  - [Environment](docs-sveltekit/build-environment.md) 
  - [Adapters](docs-sveltekit/build-adapters.md)
- [Recipies](docs-sveltekit/recipies.md)
  - [Components](docs-sveltekit/recipies-components.md) 
  - [AWS Custom Adapter](docs-sveltekit/recipies-custom-adapter.md)
  - [API](docs-sveltekit/recipies-api.md)
  - [GraphQL](docs-sveltekit/recipies-graphql.md)  
  - [Auth](docs-sveltekit/recipies-auth.md)

## Svelte & SvelteKit Examples

- [Svelte SPA](examples/spa/README.md)
- [Svelte Components](examples/svelte-components/README.md)
- [Svelte Storybook](examples/svelte-storybook/README.md)
- [Svelte Custom-Elements](examples/svelte-custom-elements/README.md)
- [SvelteKit Server Side Rendering](examples/sveltekit-ssr/README.md)
- [SvelteKit Static Website](examples/sveltekit-static-website/README.md)
- [SvelteKit Components](examples/sveltekit-components/README.md)

## GraphQL Server and AWS Intrastructure

- [Apollo GraphQL Server](examples/graphql-server/packages/local-server/README.md)
- [AWS-CDK AppSync + Lambdas](examples/graphql-server/packages/aws-infrastructure/README.md)

## Atomic Design

- Design System Principles by [Brad Frost](https://atomicdesign.bradfrost.com/)
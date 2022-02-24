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
- [Basics](docs-svelte/basics.md)
- [Reactivity](docs-svelte/reactivity.md)
- [Props](docs-svelte/props.md)
- [Logic](docs-svelte/logic.md)
- [Events](docs-svelte/events.md)
- [Bindings](docs-svelte/bindings.md)
- [Lifecycle](docs-svelte/lifecycle.md)
- [Stores](docs-svelte/stores.md)
- [Motion, Transition and Animation](docs-svelte/motion-transition-animation.md)
- [Class and Styles](docs-svelte/class-styles.md)
- [Slots](docs-svelte/slots.md)
- [Context API](docs-svelte/context-api.md)
- [Special Elements](docs-svelte/special-elements.md)
- [Module Context](docs-svelte/module-context.md)
- [Debugging](docs-svelte/debugging.md)
- [Recipies](docs-svelte/recipies.md)
  - [Custom-Elements](docs-svelte/recipies-custom-elements.md)
  - [Testing](docs-svelte/recipies-testing.md)

### SvelteKit

- [Why SvelteKit?](docs-sveltekit/intro.md)
- [JAMStack](docs-sveltekit/jamstack-architecture.md)
- [SvelteKit Architecture](docs-sveltekit/architecture.md)
- [Setup and CLI](docs-sveltekit/setup-cli.md)
- [Routing](docs-sveltekit/routing.md)
- [Pages](docs-sveltekit/pages.md)
- [Page Options](docs-sveltekit/page-options.md)
- [Anchor Options](docs-sveltekit/anchor-options.md)
- [Endpoints](docs-sveltekit/endpoints.md)
- [Fetching Data](docs-sveltekit/data-fetching.md)
- [Layout](docs-sveltekit/layout.md)
- [Modules](docs-sveltekit/modules.md)
- [Hooks](docs-sveltekit/hooks.md)
- [Prerendering](docs-sveltekit/prerendering.md)
- [Adapters and Build-Process](docs-sveltekit/build.md)
  - [Environment](docs-sveltekit/build-environment.md) 
  - [Adapters](docs-sveltekit/build-adapters.md)
- [Recipies](docs-sveltekit/recipies.md)
  - [SEO](docs-sveltekit/seo.md)
  - [Testing](docs-sveltekit/recipies-testing.md)
  - [Prefetching](docs-sveltekit/recipies-prefetching.md)
  - [Docker](docs-sveltekit/recipies-docker.md)
  - [Markdown Svelte Extention](docs-sveltekit/recipies-mdsvex.md)
  - [Components](docs-sveltekit/recipies-components.md) 
  - [Custom Adapter](docs-sveltekit/recipies-custom-adapter.md)
  - [API](docs-sveltekit/recipies-api.md)
  - [GraphQL](docs-sveltekit/recipies-graphql.md)  
  - [Auth](docs-sveltekit/recipies-auth.md)
  - [Service Workers](docs-sveltekit/recipies-service-worker.md)

## Svelte & SvelteKit Examples

- [Svelte Single Page Application](examples/svelte-spa/README.md)
- [Svelte/Kit Components](examples/svelte-components/README.md)
- [Svelte Storybook](examples/svelte-storybook/README.md)
- [Svelte Custom-Elements](examples/svelte-custom-elements/README.md)
- [SvelteKit Server Side Rendering](examples/sveltekit-ssr/README.md)
- [SvelteKit Static Website](examples/sveltekit-static-website/README.md)
- [SvelteKit AWS Adapter](examples/sveltekit-aws/README.md)

## GraphQL Server and AWS Intrastructure

- [Apollo GraphQL Server](examples/graphql-server/packages/local-server/README.md)
- [AWS-CDK AppSync + Lambdas](examples/graphql-server/packages/aws-infrastructure/README.md)

## Atomic Design

- Design System Principles by [Brad Frost](https://atomicdesign.bradfrost.com/)
# Modules

- [Modules](#modules)
  - [$lib](#lib)
  - [$app/env](#appenv)
  - [$app/navigation](#appnavigation)
  - [$app/paths](#apppaths)
  - [$app/stores](#appstores)
  - [$service-worker](#service-worker)
  - [@sveltejs/kit/hooks](#sveltejskithooks)
  - [@sveltejs/kit/install-fetch](#sveltejskitinstall-fetch)
  - [@sveltejs/kit/node](#sveltejskitnode)

## $lib

- this is a simple alias to `src/lib`

## $app/env

```javascript
import { browser, dev, mode, prerendering } from '$app/env';
```

- `browser` - is running in the browser or on the server
- `dev` - `true` in development mode, `false` in production
- `mode` - Vite.js mode the app is running
- `prerendering` - `true` in prerendering mode, `false` in production

## $app/navigation

```javascript
import {
  afterNavigate,
  beforeNavigate,  
  goto,
  invalidate,
  prefetch,
  prefetchRoutes
} from '$app/navigation';
```

- `afterNavigate` - lifecycle function that runs when the page mounts and navigates to a new URL but stays on this component
- `beforeNavigate` -  triggers before we navigate to a new URL (internal or external) 
- `goto` - returns a Promise that resolves when navigates 
- `prefetch` - programmatically prefetches the given page
- `prefetchRoutes` - programmatically prefetches the code for routes

## $app/paths

```javascript
import { base, assets } from '$app/paths';
```

- `base` - an absolute base path
- `assets` - an absolute path assets

## $app/stores

```javascript
import { getStores, navigating, page, session } from '$app/stores';
```

- `getStores` - a convenience function around getContext
- `navigating` - a readable store When navigating starts,, its value is `{ from: URL, to: URL }`
- `page` - a readable store whose value contains page data
- `session` - a writable store whose initial value is whatever was returned from `getSession`

## $service-worker

```javascript
import { build, files, timestamp } from '$service-worker';
```

- **only available to service workers**
- `build` - an array of URL strings representing the files generated, suitable for caching
- `files` - an array of URL strings representing the files in your static directory
- `timestamp` - the result of calling Date.now() at build time

## @sveltejs/kit/hooks

## @sveltejs/kit/install-fetch

## @sveltejs/kit/node



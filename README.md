*English · [Deutsch](README.de.md)*

# Exercises: Svelte 5 and SvelteKit

Exercise repo for the workshop “Svelte 5 and SvelteKit with TypeScript”. Every exercise has a starting point with TODOs, tests, and one possible reference solution. The running example is a small **workshop shop** with a product list, cart, order form, and order overview.

## What you learn

- Components with runes: `$state`, `$derived`, `$effect`, props, and snippets
- Share state via Context and show changes with transitions and tweens
- Load and order with SvelteKit, test, deploy, and migrate from Svelte 4

## Prerequisites

- Prior knowledge: basic JavaScript/TypeScript and HTML
- **Node.js 26** – `nvm use` reads the version from [`.nvmrc`](.nvmrc).
- An editor with Svelte support, e.g. VS Code with the [Svelte extension](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)

## Setup

```bash
git clone https://github.com/MikeBild/introduction-svelte.git
cd introduction-svelte
nvm use
npm ci
npm test           # all tests against the reference solutions
npm run dev        # app at http://localhost:5173
```

All commands at a glance:

| Command | What happens |
| --- | --- |
| `npm run dev` | Starts the app from `src/routes`, assembled from the reference solutions of all exercises. |
| `npm test` | Runs all tests against the **reference solutions**. Everything should be green. |
| `npm run test:start` | Runs the same tests against **your code** in `start/`. |
| `npm run test:start -- 03` | Only the tests of exercise 03 |
| `npm run test:start:watch -- 03` | Like above, reruns on every change |
| `npm run check` | Type check with `svelte-check` (TypeScript strict) |
| `npm run build` | Production build with `@sveltejs/adapter-node`, output in `build/` |
| `npm run preview` | Runs the build locally |
| `npm run start:express` | Runs the build behind Express 5 (exercise 11) |

## How to work on an exercise

Each exercise lives in `src/uebungen/<nr>-<topic>/`:

```text
src/uebungen/03-ableiten-effekte/
  README.md                 Task, steps, questions to think about
  start/                    Your starting point with TODO comments
  loesung/                  One possible reference solution
  ableiten.svelte.test.ts   Tests – import from ./loesung/…
```

1. Read the slides for the section and the `README.md` of the exercise.
2. Work on the files in `start/`. The TODOs are numbered.
3. Check with `npm run test:start -- 03`. In `start` mode, a small Vite plugin (`vite.config.ts`) redirects all `./loesung/…` imports to `./start/…`. So you use the same tests.
4. Then compare with `loesung/`. There is almost always more than one good way.

At the start, the tests fail in `start` mode. This is intended. `npm run check` still passes, because the starting points are valid TypeScript too.

## Exercises

The exercises follow the sections of the slide deck, from easy to hard.

| # | Section of the slide deck | Exercise | You practice | Difficulty |
| --- | --- | --- | --- | --- |
| 01 | The compiler | [01-compiler](src/uebungen/01-compiler/) | First component: `$state`, `$derived`, `onclick` | ★☆☆☆☆ |
| 02 | Runes: state | [02-zustand](src/uebungen/02-zustand/) | `Cart` as a class, deep state, `$state.raw`, `$state.snapshot` | ★★☆☆☆ |
| 03 | Deriving and effects | [03-ableiten-effekte](src/uebungen/03-ableiten-effekte/) | Total and count with `$derived`, search with `$derived.by`, tab title with `$effect` | ★★☆☆☆ |
| 04 | Props and events | [04-props-events](src/uebungen/04-props-events/) | `$props`, callback props, `children`, `$bindable`, `bind:value` | ★★★☆☆ |
| 05 | Snippets | [05-snippets](src/uebungen/05-snippets/) | Table with `Snippet<[Product]>`, `{@render}`, `{#snippet}` | ★★★☆☆ |
| 06 | Shared state | [06-geteilter-zustand](src/uebungen/06-geteilter-zustand/) | `createContext`, cart badge, `readable` store for the online status | ★★★★☆ |
| 07 | Motion | [07-bewegung](src/uebungen/07-bewegung/) | `in:fly`, `out:fade`, `animate:flip`, `Tween.of`, `prefersReducedMotion` | ★★★☆☆ |
| 08 | SvelteKit | [08-sveltekit](src/uebungen/08-sveltekit/) | Load functions, `error(404)`, Form Action with zod, `fail`, `redirect` | ★★★★★ |
| 09 | Props and events, Form Actions | [09-formulare](src/uebungen/09-formulare/) | `onsubmit`, `bind:value`, validation with `PlaceOrderInput`, errors at the field | ★★★☆☆ |
| 10 | – (workshop lesson Testing) | [10-testing](src/uebungen/10-testing/) | Write tests yourself with Vitest, Testing Library, and `user-event` | ★★★☆☆ |
| 11 | – (workshop lesson Deployment) | [11-deploy](src/uebungen/11-deploy/) | `adapter-node`, Express 5 in front of the handler, health check, container | ★★★☆☆ |
| 12 | What changed compared to Svelte 4 | [12-migration](src/uebungen/12-migration/) | Move a Svelte 4 component to runes, callback props, and snippets | ★★★☆☆ |

The section “Outlook: Remote Functions” has no exercise of its own, because Remote Functions are still experimental in SvelteKit 3.1. Questions about them are in the README of 08. Exercises 09 to 12 belong to lessons of the workshop “Svelte 5 and SvelteKit with TypeScript” that go beyond the slide deck.

## The workshop shop

All exercises use the same small domain from `src/lib`:

- **Product** – `id`, `name`, `priceCents`, `stock`
- **Order** – line items, status `draft` → `placed` → `paid` → `shipped` (or `cancelled`)
- **Line item** – `productId`, `quantity` (at least 1), `priceCents`
- Money always in whole cents, IDs as branded types

```text
src/
  lib/
    shop.ts             Types, totalCents, euro, sample data – plain TypeScript
    schema.ts           zod schema PlaceOrderInput, for client and server
    cart.svelte.ts      Cart and getCart/setCart – assembled from reference solutions 03 and 06
    server/db.ts        In-memory database, server only
  routes/
    +layout.svelte      Cart via Context for all pages
    +page.svelte        Home: stepper (01) and price list (05)
    products/           Product search with cards (04)
    cart/               Cart with motion (07)
    orders/             Order form and overview (08)
    orders/[id]/        A single order, otherwise 404 (08)
  uebungen/             The twelve exercises
```

The app under `src/routes` is assembled from the reference solutions. To see your own version in the browser, switch the import in the route from `loesung` to `start`.

## What is different in SvelteKit 3

- No more `svelte.config.js`. The configuration lives in the Vite plugin: `sveltekit({ adapter: adapter() })` in `vite.config.ts`.
- `#lib/…` instead of `$lib/…`. This is a regular subpath import from `package.json` (`"imports"`). `#uebungen/…` works the same way here.
- `$app/state` instead of `$app/stores`: `page` is a reactive object, not a store.
- `error(status, message)` expects a string as the second parameter. The object form is deprecated.
- `adapter-node` no longer knows the `ORIGIN` environment variable. The origin comes from `PROTOCOL_HEADER`/`HOST_HEADER` or from `paths.origin`, see exercise 11.

The slide deck shows `@sveltejs/adapter-auto`. This repo uses `@sveltejs/adapter-node`, so `npm run build` produces a runnable server without a hosting platform (`node build`). Behind a proxy without HTTPS, you set `PROTOCOL_HEADER` or `HOST_HEADER`, see [adapter-node](https://svelte.dev/docs/kit/adapter-node).

## Deliberately few packages

As of October 2026: Svelte 5.57 (runes, snippets, event attributes) · SvelteKit 3.1 · Vite 8 · TypeScript 6 (strict) · Vitest 5 · Node.js 26

| Package | What for |
| --- | --- |
| `svelte`, `@sveltejs/kit`, `@sveltejs/vite-plugin-svelte`, `vite` | Framework and build |
| `@sveltejs/adapter-node` | Build as a Node server |
| `zod` | Shared schema for the form and the Form Action |
| `express`, `@types/express` | Optional: Express 5 in front of the SvelteKit handler (exercise 11) |
| `typescript`, `svelte-check`, `@types/node` | Type check |
| `vitest`, `jsdom` | Tests. Exercises 01 to 09 and 12 test components with `mount` from `svelte`. |
| `@testing-library/svelte`, `@testing-library/user-event` | Exercise 10 only: write tests from the users’ point of view |

## Further reading

- [Svelte Docs](https://svelte.dev/docs/svelte/overview) · [Svelte 5 Migration Guide](https://svelte.dev/docs/svelte/v5-migration-guide)
- [SvelteKit Docs](https://svelte.dev/docs/kit/introduction) · [Migrating to SvelteKit 3](https://svelte.dev/docs/kit/migrating-to-sveltekit-3)
- [Form Actions](https://svelte.dev/docs/kit/form-actions) · [Remote Functions](https://svelte.dev/docs/kit/remote-functions)

## Workshop and slides

- Workshop (held in German): [“Svelte 5 and SvelteKit with TypeScript”](https://workshops.mikebild.dev/w/svelte/remote/)
- Slides: [slides.mikebild.dev/introduction-svelte.en](https://slides.mikebild.dev/introduction-svelte.en.html)
- PDF: [introduction-svelte.en.pdf](https://objects.upraft.mikebild.info/site-media/mikebild/decks/introduction-svelte/introduction-svelte.en.pdf)
- Posts on mikebild.dev:
  - [Svelte Reactivity: The Compiler Instead of a Virtual DOM](https://www.mikebild.dev/en/blog/svelte-reactivity-the-compiler-instead-of-a-virtual-dom/)
  - [Svelte Stores: State Outside the Component](https://www.mikebild.dev/en/blog/svelte-stores-state-outside-the-component/)
  - [Motion, Transitions and Animations in Svelte](https://www.mikebild.dev/en/blog/motion-transitions-and-animations-in-svelte/)
  - [Slots, Context and Web Components in Svelte](https://www.mikebild.dev/en/blog/slots-context-and-web-components-in-svelte/)

## Archive

The original materials from 2022 (Svelte 3, SvelteKit beta, examples with AWS and GraphQL) are kept unchanged in [`archive/`](archive/README.md).

## License

[MIT](LICENSE)

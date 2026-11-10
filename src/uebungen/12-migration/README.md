*English · [Deutsch](README.de.md)*

# Exercise 12 – Migrating from Svelte 4 to Svelte 5

**Slides:** section “What changed compared to Svelte 4” · **Difficulty:** ★★★☆☆

`start/AddToCart.svelte` is written in Svelte 4 syntax and runs in non-runes mode thanks to `<svelte:options runes={false} />`. You migrate the component step by step to runes, callback props, and snippets.

## Tasks

1. Remove `<svelte:options runes={false} />`.
2. `export let product` → `let { product, onadd, hint } = $props()` with a `Props` type.
3. `let quantity = 1` → `$state(1)`, `$: total = …` → `$derived(…)`.
4. `on:click` → `onclick`.
5. `createEventDispatcher` → callback prop `onadd({ product, quantity })`.
6. `<slot name="hint" />` → snippet prop `hint` with `{@render hint?.()}`.

The migration script also does most of the work: `npx sv migrate svelte-5`. Try it on a copy and compare the result with yours. You usually have to switch from `createEventDispatcher` to callback props yourself.

## Check

```bash
npm run test:start -- 12
```

At the start, only the first test passes: the behavior is already right, the syntax is not yet.

## Think about it

- Why can you migrate a large application component by component?
- What changes for callers when `on:add` becomes an `onadd` prop?

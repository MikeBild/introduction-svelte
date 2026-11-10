*English · [Deutsch](README.de.md)*

# Exercise 06 – Shared state

**Slides:** section “Shared state” · **Difficulty:** ★★★★☆

The product list, the cart, and the header share one cart. You provide it via Context and show it in a badge. On top of that comes a store for the online status.

## Files

- `start/cart-context.ts` – `getCart` and `setCart`
- `start/online.ts` – `readable` store
- `start/CartBadge.svelte` – display in the header
- `CartHarness.svelte` – test helper, does the same as `src/routes/+layout.svelte`

## Tasks

1. Create a typed pair with `createContext<Cart>()` and export it as `getCart` and `setCart`.
2. `online`: Set the value to `navigator.onLine` and update it on the window events `online` and `offline`. Remove the listeners again. During server-side rendering (SSR), there is no `window`.
3. `CartBadge`: Get the cart with `getCart()` and show count and total: `Warenkorb (2) · 39,80 €` (cart (2) · €39.80).
4. Show `<p role="status">Offline – …</p>` only when `$online` is false.

## Check

```bash
npm run test:start -- 06
```

## Think about it

- Why is an exported `const cart = new Cart()` dangerous in SvelteKit? (slide “Why Context and not a global module”)
- How would you write `online` as a class with `$state` and `$effect`? When is the store the better choice?

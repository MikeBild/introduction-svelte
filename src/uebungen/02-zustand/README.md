*English · [Deutsch](README.de.md)*

# Exercise 02 – Runes: state

**Slides:** section “Runes: state” · **Difficulty:** ★★☆☆☆

You build the core of the cart as a class in a `.svelte.ts` file. On top of that comes a product catalog that is only ever replaced as a whole.

## Files

- `start/cart.svelte.ts` – class `Cart`
- `start/catalog.svelte.ts` – class `Catalog`

## Tasks

1. Make `items` reactive with `$state<OrderItem[]>([])`. This turns the array into **deep state**.
2. Implement `add(product)`. If the product is already in the cart, increase `quantity` by 1. Otherwise add a new line item with `push` (quantity 1, price from the product).
3. `snapshot()` returns a copy without a proxy using `$state.snapshot`.
4. In `Catalog`, the product list is only replaced, never mutated. Choose between `$state` and `$state.raw`.

## Check

```bash
npm run test:start -- 02
```

The tests use `$effect.root` to check whether your changes really arrive as updates.

## Think about it

- Why does `structuredClone(cart.items)` fail, but `structuredClone(cart.snapshot())` does not?
- What does `$state.raw` save with a list of 10,000 products?

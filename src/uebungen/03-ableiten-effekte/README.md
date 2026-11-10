*English · [Deutsch](README.de.md)*

# Exercise 03 – Deriving and effects

**Slides:** section “Deriving and effects” · **Difficulty:** ★★☆☆☆

The cart gets total and count as derived values. You also build a product search with `$derived.by` and a first effect.

## Files

- `start/cart.svelte.ts` – the `Cart` from exercise 02, extended
- `start/product-filter.svelte.ts` – class `ProductFilter`
- `start/CartTitle.svelte` – sets the title of the browser tab

## Tasks

1. `total` = Σ quantity × price. Use `$derived` and `totalCents` from `#lib/shop.js`.
2. `count` = sum of all quantities, also with `$derived`.
3. `remove(productId)` removes a line item. To do this, you replace the array using `filter`.
4. `ProductFilter.visible`: Use `$derived.by` and filter by `query` (case-insensitive, ignore leading and trailing spaces). If `onlyInStock` is set, only products in stock remain.
5. `CartTitle.svelte`: Use `$effect` to set the title to `Warenkorb (<Anzahl>)` (cart (count)).

## Check

```bash
npm run test:start -- 03
```

## Think about it

- As an experiment, write `total` as `$state` and keep it up to date with `$effect`. Why is that worse? (slide “The most common mistake with `$effect`”)
- Why does `CartTitle` set the title in an effect and not directly in the script?

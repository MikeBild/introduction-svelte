*English · [Deutsch](README.de.md)*

# Exercise 04 – Props and events

**Slides:** section “Props and events” · **Difficulty:** ★★★☆☆

You build the product card, a quantity field with two-way binding, and the product search that brings both together.

## Files

- `start/ProductCard.svelte` – props, callback prop `onadd`, `children`
- `start/QuantityInput.svelte` – `$bindable`
- `start/ProductSearch.svelte` – bindings and `$derived.by`
- `QuantityHarness.svelte` – test helper, please do not change it

## Tasks

1. `ProductCard`: Read `product`, `onadd`, and `children` with `$props()`.
2. Render `children` with `{@render children?.()}`.
3. The button calls `onadd(product)` and is disabled when stock is 0.
4. `QuantityInput`: Bind the field with `bind:value` so the caller sees the quantity.
5. `ProductSearch`: Filter with `$derived.by` as in exercise 03.
6. Connect the search field and the checkbox with `bind:value` and `bind:checked`. For sold-out products, show “Ausverkauft” (sold out) as the card’s `children`.

## Check

```bash
npm run test:start -- 04
```

## Think about it

- What does `npm run check` report if you bind to a prop without `$bindable` in `QuantityHarness.svelte`?
- Callback props instead of `createEventDispatcher`: What do you gain for the types?

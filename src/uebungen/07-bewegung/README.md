*English · [Deutsch](README.de.md)*

# Exercise 07 – Motion

**Slides:** section “Motion” · **Difficulty:** ★★★☆☆

Line items in the cart appear, disappear, and move up. The total glides to its new value. If you have turned on reduced motion, you see no animation.

## Files

- `start/CartList.svelte` – transitions and `animate:flip`
- `start/CartTotal.svelte` – `Tween.of`
- `CartHarness.svelte` – test helper

## Tasks

1. Make the `each` block keyed by `item.productId`.
2. New line items fly in with `in:fly={{ y: -8 }}`, removed ones fade out with `out:fade`.
3. The remaining line items move up with `animate:flip`.
4. If `prefersReducedMotion.current` (from `svelte/motion`) is set, the duration is 0.
5. `CartTotal`: Let the total glide with `Tween.of(() => cart.total, …)` (400 ms, `cubicOut`) and show `shown.current`.

## Check

```bash
npm run test:start -- 07
```

Motion is hard to observe in a unit test. That is why the tests render on the server and also check the markup with `svelte/compiler`.

**The browser is the nicest place to check:** `npm run dev`, then add products to the cart and remove them under `/cart`. To see your version, switch the imports in `src/routes/cart/+page.svelte` from `loesung` to `start`.

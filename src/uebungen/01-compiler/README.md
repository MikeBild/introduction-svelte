*English · [Deutsch](README.de.md)*

# Exercise 01 – The compiler: a first component

**Slides:** section “The compiler” · **Difficulty:** ★☆☆☆☆

You build a quantity stepper for a product priced at €49.90. The goal is your first contact with runes and event attributes.

## Files

- `start/Stepper.svelte` – this is where you work
- `loesung/Stepper.svelte` – for comparison when you are done

## Tasks

1. Make `quantity` reactive with `$state(1)`.
2. Derive `total` from quantity and price with `$derived`.
3. Connect the buttons with `onclick`: “+” increases, “−” decreases the quantity. At quantity 1, “−” is disabled.

## Check

```bash
npm run test:start -- 01
```

## Think about it

- What does the compiler generate from your file? Try it in the [Playground](https://svelte.dev/playground) under “JS output”.
- What happens if you leave out `$state` but use `let`? What does `npm run check` report?

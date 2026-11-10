*English · [Deutsch](README.de.md)*

# Exercise 10 – Testing from the users’ point of view

**Workshop:** lesson “Test Svelte the way users use it” · **Difficulty:** ★★★☆☆

So far you have only run tests. Now you write them yourself, for the order form from exercise 09. You use Vitest with the Testing Library. It finds elements the way users see them, by role and label.

## Files

- `start/checkout.svelte.test.ts` – this is where you write the tests
- `loesung/checkout.svelte.test.ts` – for comparison
- Under test: `#uebungen/09-formulare/loesung/CheckoutForm.svelte`

## Tasks

1. Order two “Akkuschrauber” (cordless drill) and check what `onorder` receives.
2. Type the quantity 0 and check the message at the field via `aria-invalid` and `aria-describedby`.
3. Clear the field and check that nothing is ordered.

Find elements with `getByRole` and `getByLabelText`, not with CSS selectors. For input, you use `userEvent.setup()`, because it fires the same events as real users.

## Check

```bash
npm run test:start -- 10
```

At the start, the three tests fail with `TODO … ist noch offen` (TODO … is still open).

## Think about it

- The tests of exercises 01 to 09 use `mount` from `svelte` and `querySelector`. What is more readable with the Testing Library, and what gets more cumbersome?
- Which of your tests fails if someone deletes the `<label>` on the quantity field? Is that a good thing?
- How do you test `Cart` from `#lib/cart.svelte.ts` without any component? Tip: the file name must end in `.svelte.test.ts`.

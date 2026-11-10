*English · [Deutsch](README.de.md)*

# Exercise 09 – Events and forms

**Workshop:** lesson “One form, one schema, errors at the field” · **Slides:** sections “Props and events” and “Form Actions” · **Difficulty:** ★★★☆☆

You build the order form in the browser. It validates the input with the same zod schema as the Form Action on the server and shows errors right at the field.

## Files

- `start/CheckoutForm.svelte` – this is where you work
- `start/field-errors.ts` – given: turns zod issues into messages per field
- Given: `#lib/schema.ts` with `PlaceOrderInput`

## Tasks

1. Connect `handleSubmit` to the form with `onsubmit` and prevent the page reload with `event.preventDefault()`.
2. Validate the input with `PlaceOrderInput.safeParse`. On errors, you fill `errors`, otherwise you call `onorder(result.data)`.
3. Derive `quantityError` from `errors['items.0.quantity']` with `$derived`.
4. Bind the quantity field with `bind:value`. On an error, you set `aria-invalid="true"` and link the message with `aria-describedby`.

## Check

```bash
npm run test:start -- 09
```

## Think about it

- `bind:value` on a field with `type="number"` yields a number. What is in `quantity` when the field is empty?
- Why is validation in the browser not enough? Look at the Form Action in exercise 08.
- When do you validate on submit, and when already when the user leaves a field?

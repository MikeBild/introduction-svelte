*English · [Deutsch](README.de.md)*

# Exercise 05 – Snippets

**Slides:** section “Snippets” · **Difficulty:** ★★★☆☆

You build a table that only defines the structure. The caller provides the content of each row as a snippet.

## Files

- `start/ProductTable.svelte` – accepts the snippets `row` and `empty`
- `start/PriceList.svelte` – the caller, provides the snippets

## Tasks

1. Read `row` and `empty` from the props (types: `Snippet<[Product]>` and `Snippet`).
2. For each product, render `{@render row(product)}` in a `<tr>`.
3. If the list is empty, render `empty` (if present) in a cell. Tip: `{:else}` in the `each` block.
4. `PriceList`: In the `row` snippet, add a second cell with the price.
5. Add an `empty()` snippet with the text “Keine Produkte gefunden” (no products found).

## Check

```bash
npm run test:start -- 05
```

The tests of `ProductTable` create their snippets with `createRawSnippet`. This way you test a component without writing a test component of your own.

## Think about it

- How would you have solved this with slots and `let:` in Svelte 4?

*English · [Deutsch](README.de.md)*

# Exercise 08 – SvelteKit: loading and ordering

**Slides:** section “SvelteKit” · **Difficulty:** ★★★★★

You write the server logic of the shop: load products and a single order, and create orders with a Form Action. The routes under `src/routes` only call your functions.

## Files

- `start/orders.server.ts` – `loadProducts`, `loadOrders`, `loadOrder`, `placeOrder`
- The matching routes: `src/routes/products`, `src/routes/orders`, and `src/routes/orders/[id]` (each with `+page.server.ts`)
- Given: `#lib/server/db.ts` (in-memory database) and `#lib/schema.ts` (zod schema)

## Tasks

1. `loadProducts` returns `{ products }` from `db.products()`.
2. `loadOrder` reads the order. If it does not exist, you call `error(404, 'Diese Bestellung gibt es nicht. Wähle eine aus der Bestellliste.')` (this order does not exist, pick one from the order list).
3. `placeOrder` reads the form data and validates it with `PlaceOrderInput.safeParse`. For invalid data, you return `fail(400, { error: 'Wähle ein Produkt und eine Menge ab 1.' })` (pick a product and a quantity of at least 1).
4. Create the order with `db.placeOrder`. If it returns `null`, you return `fail(409, { error: 'Zu wenig auf Lager. Wähle eine kleinere Menge oder ein anderes Produkt.' })` (not enough in stock, pick a smaller quantity or another product).
5. On success, you redirect with ``redirect(303, `/orders/${order.id}`)``.

## Check

```bash
npm run test:start -- 08
```

In the browser: switch the import in the three `+page.server.ts` files from `loesung` to `start` and run `npm run dev`. Test the form under `/orders` once with and once without JavaScript.

## Think about it

- Why does the form send only the product ID and quantity, but no price?
- `error` throws, `fail` is returned. Why this difference?
- Outlook: What would `placeOrder` look like as a Remote Function (`form` from `$app/server`)?

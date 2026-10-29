# Übung 08 – SvelteKit: Laden und Bestellen

**Folien:** Abschnitt „SvelteKit“ · **Schwierigkeit:** ★★★★★

Du schreibst die Server-Logik des Shops: Produkte und eine Bestellung laden, Bestellungen per Form Action anlegen. Die Routen unter `src/routes` rufen nur deine Funktionen auf.

## Dateien

- `start/orders.server.ts` – `loadProducts`, `loadOrders`, `loadOrder`, `placeOrder`
- Dazu passend: `src/routes/products`, `src/routes/orders` und `src/routes/orders/[id]` (jeweils `+page.server.ts`)
- Gegeben: `#lib/server/db.ts` (In-Memory-Datenbank) und `#lib/schema.ts` (zod-Schema)

## Aufgaben

1. `loadProducts` liefert `{ products }` aus `db.products()`.
2. `loadOrder` liest die Bestellung. Gibt es sie nicht, rufst du `error(404, 'Bestellung nicht gefunden')` auf.
3. `placeOrder` liest die Formulardaten und prüft sie mit `PlaceOrderInput.safeParse`. Bei ungültigen Daten gibst du `fail(400, { error: 'Bitte Produkt und Menge prüfen' })` zurück.
4. Lege die Bestellung mit `db.placeOrder` an. Bei `null` gibst du `fail(409, { error: 'Nicht genug Bestand' })` zurück.
5. Bei Erfolg leitest du mit ``redirect(303, `/orders/${order.id}`)`` weiter.

## Prüfen

```bash
npm run test:start -- 08
```

Im Browser: Stell in den drei `+page.server.ts` den Import von `loesung` auf `start` um und starte `npm run dev`. Teste das Formular unter `/orders` einmal mit und einmal ohne JavaScript.

## Zum Nachdenken

- Warum schickt das Formular nur Produkt-ID und Menge, aber keinen Preis?
- `error` wirft, `fail` wird zurückgegeben. Warum dieser Unterschied?
- Ausblick: Wie sähe `placeOrder` als Remote Function (`form` aus `$app/server`) aus?

# Übung 02 – Runes: Zustand

**Folien:** Abschnitt „Runes: Zustand“ · **Schwierigkeit:** ★★☆☆☆

Du baust den Kern des Warenkorbs als Klasse in einer `.svelte.ts`-Datei. Dazu kommt ein Produktkatalog, der nur als Ganzes ersetzt wird.

## Dateien

- `start/cart.svelte.ts` – Klasse `Cart`
- `start/catalog.svelte.ts` – Klasse `Catalog`

## Aufgaben

1. Mache `items` mit `$state<OrderItem[]>([])` reaktiv. Damit wird das Array zu **Deep State**.
2. Setze `add(product)` um. Liegt das Produkt schon im Warenkorb, erhöhst du `quantity` um 1. Sonst fügst du mit `push` eine neue Position hinzu (Menge 1, Preis aus dem Produkt).
3. `snapshot()` liefert mit `$state.snapshot` eine Kopie ohne Proxy.
4. Im `Catalog` wird die Produktliste nur ersetzt, nie verändert. Entscheide dich zwischen `$state` und `$state.raw`.

## Prüfen

```bash
npm run test:start -- 02
```

Die Tests prüfen mit `$effect.root`, ob deine Änderungen wirklich als Update ankommen.

## Zum Nachdenken

- Warum schlägt `structuredClone(cart.items)` fehl, `structuredClone(cart.snapshot())` aber nicht?
- Was spart `$state.raw` bei einer Liste mit 10.000 Produkten?

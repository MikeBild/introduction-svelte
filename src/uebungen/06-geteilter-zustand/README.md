# Übung 06 – Geteilter Zustand

**Folien:** Abschnitt „Geteilter Zustand“ · **Schwierigkeit:** ★★★★☆

Produktliste, Warenkorb und Kopfzeile teilen sich einen Warenkorb. Du stellst ihn per Context bereit und zeigst ihn in einem Badge an. Dazu kommt ein Store für den Online-Status.

## Dateien

- `start/cart-context.ts` – `getCart` und `setCart`
- `start/online.ts` – `readable`-Store
- `start/CartBadge.svelte` – Anzeige in der Kopfzeile
- `CartHarness.svelte` – Testhilfe, macht dasselbe wie `src/routes/+layout.svelte`

## Aufgaben

1. Erzeuge mit `createContext<Cart>()` ein typisiertes Paar und exportiere es als `getCart` und `setCart`.
2. `online`: Setze den Wert auf `navigator.onLine` und aktualisiere ihn bei den window-Events `online` und `offline`. Entferne die Listener wieder. Beim SSR gibt es kein `window`.
3. `CartBadge`: Hole den Warenkorb mit `getCart()` und zeig Anzahl und Summe: `Warenkorb (2) · 39,80 €`.
4. Zeig `<p role="status">Offline – …</p>` nur, wenn `$online` false ist.

## Prüfen

```bash
npm run test:start -- 06
```

## Zum Nachdenken

- Warum ist ein exportierter `const cart = new Cart()` in SvelteKit gefährlich? (Folie „Warum Context und kein globales Modul“)
- Wie würdest du `online` als Klasse mit `$state` und `$effect` schreiben? Wann ist der Store die bessere Wahl?

# Übung 04 – Props und Events

**Folien:** Abschnitt „Props und Events“ · **Schwierigkeit:** ★★★☆☆

Du baust die Produktkarte, ein Mengenfeld mit Zwei-Wege-Bindung und die Produktsuche, die beides zusammenführt.

## Dateien

- `start/ProductCard.svelte` – Props, Callback-Prop `onadd`, `children`
- `start/QuantityInput.svelte` – `$bindable`
- `start/ProductSearch.svelte` – Bindings und `$derived.by`
- `QuantityHarness.svelte` – Testhilfe, bitte nicht ändern

## Aufgaben

1. `ProductCard`: Lies `product`, `onadd` und `children` mit `$props()`.
2. Rendere `children` mit `{@render children?.()}`.
3. Der Button ruft `onadd(product)` und ist bei Bestand 0 deaktiviert.
4. `QuantityInput`: Binde das Feld per `bind:value`, damit der Aufrufer die Menge sieht.
5. `ProductSearch`: Filtere mit `$derived.by` wie in Übung 03.
6. Verbinde Suchfeld und Checkbox per `bind:value` bzw. `bind:checked`. Zeig bei ausverkauften Produkten „Ausverkauft“ als `children` der Karte.

## Prüfen

```bash
npm run test:start -- 04
```

## Zum Nachdenken

- Was meldet `npm run check`, wenn du in `QuantityHarness.svelte` an eine Prop ohne `$bindable` bindest?
- Callback-Props statt `createEventDispatcher`: Was gewinnst du bei den Typen?

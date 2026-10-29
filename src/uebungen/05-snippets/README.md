# Übung 05 – Snippets

**Folien:** Abschnitt „Snippets“ · **Schwierigkeit:** ★★★☆☆

Du baust eine Tabelle, die nur die Struktur vorgibt. Den Inhalt jeder Zeile liefert der Aufrufer als Snippet.

## Dateien

- `start/ProductTable.svelte` – nimmt die Snippets `row` und `empty` entgegen
- `start/PriceList.svelte` – der Aufrufer, liefert die Snippets

## Aufgaben

1. Lies `row` und `empty` aus den Props (Typen: `Snippet<[Product]>` und `Snippet`).
2. Rendere je Produkt `{@render row(product)}` in einer `<tr>`.
3. Ist die Liste leer, rendere `empty` (falls vorhanden) in einer Zelle. Tipp: `{:else}` im `each`-Block.
4. `PriceList`: Ergänze im Snippet `row` eine zweite Zelle mit dem Preis.
5. Ergänze ein Snippet `empty()` mit dem Text „Keine Produkte gefunden“.

## Prüfen

```bash
npm run test:start -- 05
```

Die Tests von `ProductTable` erzeugen ihre Snippets mit `createRawSnippet`. So testest du eine Komponente ohne eigene Testkomponente.

## Zum Nachdenken

- Wie hättest du das mit Slots und `let:` in Svelte 4 gelöst?

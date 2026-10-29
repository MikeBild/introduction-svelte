# Übung 03 – Ableiten und Effekte

**Folien:** Abschnitt „Ableiten und Effekte“ · **Schwierigkeit:** ★★☆☆☆

Der Warenkorb bekommt Summe und Anzahl als abgeleitete Werte. Außerdem baust du eine Produktsuche mit `$derived.by` und einen ersten Effekt.

## Dateien

- `start/cart.svelte.ts` – der `Cart` aus Übung 02, erweitert
- `start/product-filter.svelte.ts` – Klasse `ProductFilter`
- `start/CartTitle.svelte` – setzt den Titel des Browser-Tabs

## Aufgaben

1. `total` = Σ Menge × Preis. Nutze `$derived` und `totalCents` aus `#lib/shop.js`.
2. `count` = Summe aller Mengen, ebenfalls mit `$derived`.
3. `remove(productId)` entfernt eine Position. Du ersetzt dazu das Array mit `filter`.
4. `ProductFilter.visible`: Nutze `$derived.by` und filtere nach `query` (ohne Groß-/Kleinschreibung, Leerzeichen am Rand ignorieren). Ist `onlyInStock` gesetzt, bleiben nur Produkte mit Bestand übrig.
5. `CartTitle.svelte`: Setze mit `$effect` den Titel auf `Warenkorb (<Anzahl>)`.

## Prüfen

```bash
npm run test:start -- 03
```

## Zum Nachdenken

- Schreib `total` testweise als `$state` und halte es per `$effect` aktuell. Warum ist das schlechter? (Folie „Der häufigste Fehler mit `$effect`“)
- Warum setzt `CartTitle` den Titel in einem Effekt und nicht direkt im Skript?

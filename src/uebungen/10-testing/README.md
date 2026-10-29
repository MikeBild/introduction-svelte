# Übung 10 – Testen aus Sicht der Nutzenden

**Workshop:** Lektion „Teste Svelte so, wie Nutzende es bedienen“ · **Schwierigkeit:** ★★★☆☆

Bisher hast du Tests nur ausgeführt. Jetzt schreibst du sie selbst, und zwar für das Bestellformular aus Übung 09. Du nutzt Vitest mit der Testing Library. Die findet Elemente so, wie Nutzende sie sehen, also über Rolle und Beschriftung.

## Dateien

- `start/checkout.svelte.test.ts` – hier schreibst du die Tests
- `loesung/checkout.svelte.test.ts` – zum Vergleichen
- Getestet wird `#uebungen/09-formulare/loesung/CheckoutForm.svelte`

## Aufgaben

1. Bestelle zwei Akkuschrauber und prüfe, was `onorder` bekommt.
2. Tippe die Menge 0 und prüfe die Meldung am Feld über `aria-invalid` und `aria-describedby`.
3. Leere das Feld und prüfe, dass nichts bestellt wird.

Finde Elemente mit `getByRole` und `getByLabelText`, nicht mit CSS-Selektoren. Für Eingaben nutzt du `userEvent.setup()`, denn das löst dieselben Events aus wie echte Nutzende.

## Prüfen

```bash
npm run test:start -- 10
```

Am Anfang schlagen die drei Tests mit `TODO … ist noch offen` fehl.

## Zum Nachdenken

- Die Tests der Übungen 01 bis 09 nutzen `mount` aus `svelte` und `querySelector`. Was ist mit der Testing Library lesbarer, was wird umständlicher?
- Welcher deiner Tests schlägt fehl, wenn jemand das `<label>` am Mengenfeld löscht? Ist das gut so?
- Wie testest du `Cart` aus `#lib/cart.svelte.ts` ganz ohne Komponente? Tipp: Die Datei muss auf `.svelte.test.ts` enden.

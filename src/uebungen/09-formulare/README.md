# Übung 09 – Events und Formulare

**Workshop:** Lektion „Ein Formular, ein Schema, Fehler am Feld“ · **Folien:** Abschnitte „Props und Events“ und „Form Actions“ · **Schwierigkeit:** ★★★☆☆

Du baust das Bestellformular im Browser. Es prüft die Eingaben mit demselben zod-Schema wie die Form Action auf dem Server und zeigt Fehler direkt am Feld.

## Dateien

- `start/CheckoutForm.svelte` – hier arbeitest du
- `start/field-errors.ts` – gegeben: macht aus zod-Issues Meldungen je Feld
- Gegeben: `#lib/schema.ts` mit `PlaceOrderInput`

## Aufgaben

1. Verbinde `handleSubmit` per `onsubmit` mit dem Formular und verhindere mit `event.preventDefault()` das Neuladen der Seite.
2. Prüfe die Eingaben mit `PlaceOrderInput.safeParse`. Bei Fehlern füllst du `errors`, sonst rufst du `onorder(result.data)` auf.
3. Leite `quantityError` mit `$derived` aus `errors['items.0.quantity']` ab.
4. Binde das Mengenfeld per `bind:value`. Bei einem Fehler setzt du `aria-invalid="true"` und verknüpfst die Meldung per `aria-describedby`.

## Prüfen

```bash
npm run test:start -- 09
```

## Zum Nachdenken

- `bind:value` an einem Feld mit `type="number"` liefert eine Zahl. Was steht in `quantity`, wenn das Feld leer ist?
- Warum reicht die Prüfung im Browser nicht? Schau dir dazu die Form Action in Übung 08 an.
- Wann validierst du beim Absenden und wann schon beim Verlassen eines Felds?

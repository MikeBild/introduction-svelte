# Übung 01 – Der Compiler: eine erste Komponente

**Folien:** Abschnitt „Der Compiler“ · **Schwierigkeit:** ★☆☆☆☆

Du baust einen Mengen-Stepper für ein Produkt zu 49,90 €. Ziel ist der erste Kontakt mit Runes und Event-Attributen.

## Datei

- `start/Stepper.svelte` – hier arbeitest du
- `loesung/Stepper.svelte` – zum Vergleichen, wenn du fertig bist

## Aufgaben

1. Mache `quantity` mit `$state(1)` reaktiv.
2. Leite `total` mit `$derived` aus Menge und Preis ab.
3. Verbinde die Buttons mit `onclick`: „+“ erhöht, „−“ verringert die Menge. Bei Menge 1 ist „−“ deaktiviert.

## Prüfen

```bash
npm run test:start -- 01
```

## Zum Nachdenken

- Was erzeugt der Compiler aus deiner Datei? Probier es im [Playground](https://svelte.dev/playground) unter „JS output“ aus.
- Was passiert, wenn du `$state` weglässt, aber `let` verwendest? Was meldet `npm run check`?

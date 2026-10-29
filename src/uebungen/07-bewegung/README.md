# Übung 07 – Bewegung

**Folien:** Abschnitt „Bewegung“ · **Schwierigkeit:** ★★★☆☆

Positionen im Warenkorb erscheinen, verschwinden und rücken nach. Die Summe gleitet zu ihrem neuen Wert. Wer reduzierte Bewegung eingestellt hat, sieht keine Animation.

## Dateien

- `start/CartList.svelte` – Transitions und `animate:flip`
- `start/CartTotal.svelte` – `Tween.of`
- `CartHarness.svelte` – Testhilfe

## Aufgaben

1. Mach den `each`-Block keyed über `item.productId`.
2. Neue Positionen fliegen mit `in:fly={{ y: -8 }}` herein, entfernte blenden mit `out:fade` aus.
3. Die übrigen Positionen rücken mit `animate:flip` nach.
4. Ist `prefersReducedMotion.current` (aus `svelte/motion`) gesetzt, ist die Dauer 0.
5. `CartTotal`: Lass die Summe mit `Tween.of(() => cart.total, …)` gleiten (400 ms, `cubicOut`) und zeig `shown.current` an.

## Prüfen

```bash
npm run test:start -- 07
```

Bewegung lässt sich schlecht im Unit-Test beobachten. Die Tests rendern deshalb auf dem Server und prüfen zusätzlich mit `svelte/compiler` das Markup.

**Am schönsten prüfst du im Browser:** `npm run dev`, dann Produkte in den Warenkorb legen und unter `/cart` entfernen. Um deine Version zu sehen, stell in `src/routes/cart/+page.svelte` die Importe von `loesung` auf `start` um.

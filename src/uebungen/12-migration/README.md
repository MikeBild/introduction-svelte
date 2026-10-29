# Übung 12 – Von Svelte 4 zu Svelte 5 migrieren

**Folien:** Abschnitt „Was sich gegenüber Svelte 4 geändert hat“ · **Schwierigkeit:** ★★★☆☆

`start/AddToCart.svelte` ist in Svelte-4-Syntax geschrieben und läuft dank `<svelte:options runes={false} />` im Legacy-Modus. Du migrierst die Komponente Schritt für Schritt zu Runes, Callback-Props und Snippets.

## Aufgaben

1. Entferne `<svelte:options runes={false} />`.
2. `export let product` → `let { product, onadd, hint } = $props()` mit einem Typ `Props`.
3. `let quantity = 1` → `$state(1)`, `$: total = …` → `$derived(…)`.
4. `on:click` → `onclick`.
5. `createEventDispatcher` → Callback-Prop `onadd({ product, quantity })`.
6. `<slot name="hint" />` → Snippet-Prop `hint` mit `{@render hint?.()}`.

Den Großteil erledigt auch das Migrationsskript: `npx sv migrate svelte-5`. Probier es auf einer Kopie aus und vergleiche das Ergebnis mit deinem. Callback-Props statt `createEventDispatcher` musst du meist selbst umbauen.

## Prüfen

```bash
npm run test:start -- 12
```

Am Anfang besteht nur der erste Test: Das Verhalten stimmt schon, die Syntax noch nicht.

## Zum Nachdenken

- Warum kannst du eine große Anwendung Komponente für Komponente migrieren?
- Was ändert sich für Aufrufer, wenn aus `on:add` eine Prop `onadd` wird?

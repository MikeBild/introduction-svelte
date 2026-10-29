# Übungen: Svelte 5 und SvelteKit

Übungs-Repo zum Workshop „Svelte 5 und SvelteKit mit TypeScript“. Jede Übung hat einen Startpunkt mit TODOs, Tests und eine mögliche Lösung. Durchgehendes Beispiel ist ein kleiner **Werkstatt-Shop** mit Produktliste, Warenkorb, Bestellformular und Bestellübersicht.

## Was du lernst

- Komponenten mit Runes: `$state`, `$derived`, `$effect`, Props und Snippets
- Zustand per Context teilen und Änderungen mit Transitions und Tweens zeigen
- Mit SvelteKit laden und bestellen, testen, deployen und von Svelte 4 migrieren

## Voraussetzungen

- Vorwissen: Grundkenntnisse in JavaScript/TypeScript und HTML
- **Node.js 26** – `nvm use` liest die Version aus [`.nvmrc`](.nvmrc).
- Ein Editor mit Svelte-Unterstützung, z. B. VS Code mit der [Svelte-Erweiterung](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)

## Einrichten

```bash
git clone https://github.com/MikeBild/introduction-svelte.git
cd introduction-svelte
nvm use
npm ci
npm test           # alle Tests gegen die Lösungen
npm run dev        # App unter http://localhost:5173
```

Alle Befehle im Überblick:

| Befehl | Was passiert |
| --- | --- |
| `npm run dev` | Startet die App aus `src/routes`, zusammengesetzt aus den Lösungen aller Übungen. |
| `npm test` | Führt alle Tests gegen die **Lösungen** aus. Alles sollte grün sein. |
| `npm run test:start` | Führt dieselben Tests gegen **deinen Code** in `start/` aus. |
| `npm run test:start -- 03` | Nur die Tests von Übung 03 |
| `npm run test:start:watch -- 03` | Wie oben, startet bei jeder Änderung neu |
| `npm run check` | Typprüfung mit `svelte-check` (TypeScript strict) |
| `npm run build` | Produktions-Build mit `@sveltejs/adapter-node`, Ergebnis in `build/` |
| `npm run preview` | Startet den Build lokal |
| `npm run start:express` | Startet den Build hinter Express 5 (Übung 11) |

## So arbeitest du mit einer Übung

Jede Übung liegt in `src/uebungen/<nr>-<thema>/`:

```text
src/uebungen/03-ableiten-effekte/
  README.md                 Aufgabe, Schritte, Fragen zum Nachdenken
  start/                    Dein Startpunkt mit TODO-Kommentaren
  loesung/                  Eine mögliche Lösung
  ableiten.svelte.test.ts   Tests – importieren aus ./loesung/…
```

1. Lies die Folien zum Abschnitt und das `README.md` der Übung.
2. Bearbeite die Dateien in `start/`. Die TODOs sind nummeriert.
3. Prüfe mit `npm run test:start -- 03`. Im Modus `start` leitet ein kleines Vite-Plugin (`vite.config.ts`) alle Importe `./loesung/…` auf `./start/…` um. Du nutzt also dieselben Tests.
4. Vergleiche danach mit `loesung/`. Es gibt fast immer mehr als einen guten Weg.

Am Anfang schlagen die Tests im Modus `start` fehl. Das ist Absicht. `npm run check` bleibt trotzdem fehlerfrei, denn auch die Startpunkte sind gültiges TypeScript.

## Übungen

Die Übungen folgen den Abschnitten des Foliensatzes, von einfach nach schwer.

| # | Abschnitt im Foliensatz | Übung | Du übst | Schwierigkeit |
| --- | --- | --- | --- | --- |
| 01 | Der Compiler | [01-compiler](src/uebungen/01-compiler/) | Erste Komponente: `$state`, `$derived`, `onclick` | ★☆☆☆☆ |
| 02 | Runes: Zustand | [02-zustand](src/uebungen/02-zustand/) | `Cart` als Klasse, Deep State, `$state.raw`, `$state.snapshot` | ★★☆☆☆ |
| 03 | Ableiten und Effekte | [03-ableiten-effekte](src/uebungen/03-ableiten-effekte/) | Summe und Anzahl mit `$derived`, Suche mit `$derived.by`, Tab-Titel mit `$effect` | ★★☆☆☆ |
| 04 | Props und Events | [04-props-events](src/uebungen/04-props-events/) | `$props`, Callback-Props, `children`, `$bindable`, `bind:value` | ★★★☆☆ |
| 05 | Snippets | [05-snippets](src/uebungen/05-snippets/) | Tabelle mit `Snippet<[Product]>`, `{@render}`, `{#snippet}` | ★★★☆☆ |
| 06 | Geteilter Zustand | [06-geteilter-zustand](src/uebungen/06-geteilter-zustand/) | `createContext`, Warenkorb-Badge, `readable`-Store für den Online-Status | ★★★★☆ |
| 07 | Bewegung | [07-bewegung](src/uebungen/07-bewegung/) | `in:fly`, `out:fade`, `animate:flip`, `Tween.of`, `prefersReducedMotion` | ★★★☆☆ |
| 08 | SvelteKit | [08-sveltekit](src/uebungen/08-sveltekit/) | Load-Funktionen, `error(404)`, Form Action mit zod, `fail`, `redirect` | ★★★★★ |
| 09 | Props und Events, Form Actions | [09-formulare](src/uebungen/09-formulare/) | `onsubmit`, `bind:value`, Prüfung mit `PlaceOrderInput`, Fehler am Feld | ★★★☆☆ |
| 10 | – (Workshop-Lektion Testing) | [10-testing](src/uebungen/10-testing/) | Tests selbst schreiben mit Vitest, Testing Library und `user-event` | ★★★☆☆ |
| 11 | – (Workshop-Lektion Deployment) | [11-deploy](src/uebungen/11-deploy/) | `adapter-node`, Express 5 vor dem Handler, Health Check, Container | ★★★☆☆ |
| 12 | Was sich gegenüber Svelte 4 geändert hat | [12-migration](src/uebungen/12-migration/) | Svelte-4-Komponente auf Runes, Callback-Props und Snippets umstellen | ★★★☆☆ |

Der Abschnitt „Ausblick: Remote Functions“ hat keine eigene Übung, denn Remote Functions sind in SvelteKit 3.1 noch experimentell. Fragen dazu stehen im README von 08. Die Übungen 09 bis 12 gehören zu Lektionen des Workshops „Svelte 5 und SvelteKit mit TypeScript“, die über den Foliensatz hinausgehen.

## Der Werkstatt-Shop

Alle Übungen nutzen dieselbe kleine Domäne aus `src/lib`:

- **Produkt** – `id`, `name`, `priceCents`, `stock`
- **Bestellung** – Positionen, Status `draft` → `placed` → `paid` → `shipped` (oder `cancelled`)
- **Position** – `productId`, `quantity` (mindestens 1), `priceCents`
- Geld immer als ganze Cent, IDs als Branded Types

```text
src/
  lib/
    shop.ts             Typen, totalCents, euro, Beispieldaten – reines TypeScript
    schema.ts           zod-Schema PlaceOrderInput, für Client und Server
    cart.svelte.ts      Cart und getCart/setCart – zusammengesetzt aus den Lösungen 03 und 06
    server/db.ts        In-Memory-Datenbank, nur auf dem Server
  routes/
    +layout.svelte      Warenkorb per Context für alle Seiten
    +page.svelte        Start: Stepper (01) und Preisliste (05)
    products/           Produktsuche mit Karten (04)
    cart/               Warenkorb mit Bewegung (07)
    orders/             Bestellformular und Übersicht (08)
    orders/[id]/        Eine Bestellung, sonst 404 (08)
  uebungen/             Die zwölf Übungen
```

Die App unter `src/routes` setzt sich aus den Lösungen zusammen. Willst du deine eigene Version im Browser sehen, stell in der jeweiligen Route den Import von `loesung` auf `start` um.

## Was in SvelteKit 3 anders ist

- Keine `svelte.config.js` mehr. Die Konfiguration steht im Vite-Plugin: `sveltekit({ adapter: adapter() })` in `vite.config.ts`.
- `#lib/…` statt `$lib/…`. Das ist ein normaler Subpath-Import aus der `package.json` (`"imports"`). Genauso funktioniert hier `#uebungen/…`.
- `$app/state` statt `$app/stores`: `page` ist ein reaktives Objekt, kein Store.
- `error(status, message)` erwartet als zweiten Parameter einen String. Die Objektform ist veraltet.
- `adapter-node` kennt die Umgebungsvariable `ORIGIN` nicht mehr. Die Origin kommt aus `PROTOCOL_HEADER`/`HOST_HEADER` oder aus `paths.origin`, siehe Übung 11.

Der Foliensatz zeigt `@sveltejs/adapter-auto`. Hier steckt `@sveltejs/adapter-node` drin, damit `npm run build` ohne Hosting-Plattform einen lauffähigen Server erzeugt (`node build`). Hinter einem Proxy ohne HTTPS setzt du `PROTOCOL_HEADER` bzw. `HOST_HEADER`, siehe [adapter-node](https://svelte.dev/docs/kit/adapter-node).

## Bewusst wenige Pakete

Stand Oktober 2026: Svelte 5.57 (Runes, Snippets, Event-Attribute) · SvelteKit 3.1 · Vite 8 · TypeScript 6 (strict) · Vitest 5 · Node.js 26

| Paket | Wozu |
| --- | --- |
| `svelte`, `@sveltejs/kit`, `@sveltejs/vite-plugin-svelte`, `vite` | Framework und Build |
| `@sveltejs/adapter-node` | Build als Node-Server |
| `zod` | Gemeinsames Schema für Formular und Form Action |
| `express`, `@types/express` | Optional: Express 5 vor dem SvelteKit-Handler (Übung 11) |
| `typescript`, `svelte-check`, `@types/node` | Typprüfung |
| `vitest`, `jsdom` | Tests. Die Übungen 01 bis 09 und 12 testen Komponenten mit `mount` aus `svelte`. |
| `@testing-library/svelte`, `@testing-library/user-event` | Nur Übung 10: Tests aus Sicht der Nutzer schreiben |

## Weiterlesen

- [Svelte Docs](https://svelte.dev/docs/svelte/overview) · [Svelte 5 Migration Guide](https://svelte.dev/docs/svelte/v5-migration-guide)
- [SvelteKit Docs](https://svelte.dev/docs/kit/introduction) · [Migration zu SvelteKit 3](https://svelte.dev/docs/kit/migrating-to-sveltekit-3)
- [Form Actions](https://svelte.dev/docs/kit/form-actions) · [Remote Functions](https://svelte.dev/docs/kit/remote-functions)

## Workshop und Folien

- Workshop: [„Svelte 5 und SvelteKit mit TypeScript“](https://workshops.mikebild.dev/w/svelte/remote/)
- Folien: [slides.mikebild.dev/introduction-svelte](https://slides.mikebild.dev/introduction-svelte.html)

## Archiv

Die ursprünglichen Materialien von 2022 (Svelte 3, SvelteKit Beta, Beispiele mit AWS und GraphQL) liegen unverändert in [`legacy/`](legacy/README.md).

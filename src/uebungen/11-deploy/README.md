# Übung 11 – Build und Deployment

**Folien:** Lektion „Build und Deployment“ im Workshop · **Schwierigkeit:** ★★★☆☆

`npm run build` erzeugt mit `@sveltejs/adapter-node` einen Node-Server in `build/`. Den startest du direkt mit `node build`. Brauchst du eigene Routen davor, etwa einen Health Check, hängst du den SvelteKit-Handler in Express 5 ein.

## Dateien

- `start/app.ts` – hier arbeitest du: `createApp(handler)` baut die Express-App
- `server.ts` im Wurzelverzeichnis – startet den echten Build mit `createApp` aus `loesung/`
- `Dockerfile` – ein Container-Image für den Betrieb, etwa auf AWS

## Aufgaben

1. Schalte den Header `X-Powered-By` ab.
2. Beantworte `GET /healthz` mit `{ "ok": true }`.
3. Reiche alle anderen Requests an den SvelteKit-Handler weiter.

## Prüfen

```bash
npm run test:start -- 11
```

Dann mit dem echten Build:

```bash
npm run build
npm run start:express        # http://localhost:3000 und /healthz
```

## Origin hinter einem Proxy

SvelteKit prüft bei Form Actions, ob der Request von derselben Origin kommt. Ohne weitere Angaben nimmt `adapter-node` `https` und den `Host`-Header an. Läuft die App hinter einem Load Balancer, setzt du `PROTOCOL_HEADER=x-forwarded-proto` und `HOST_HEADER=x-forwarded-host`. Kennst du die Adresse schon beim Build, trägst du sie in SvelteKit 3 als `paths.origin` im Vite-Plugin ein. Die Umgebungsvariable `ORIGIN` aus SvelteKit 2 gibt es nicht mehr.

Lokal über `http://localhost` lehnt SvelteKit deshalb Form Actions mit 403 ab. Das Bestellformular probierst du lokal mit `npm run dev` oder `npm run preview` aus.

## Container

```bash
docker build -f src/uebungen/11-deploy/Dockerfile -t werkstatt-shop .
docker run -p 3000:3000 werkstatt-shop
```

## Zum Nachdenken

- Was gewinnst du mit Express vor dem Handler, und was kostet es dich gegenüber `node build`?
- Welche Umgebungsvariablen braucht die App in Production, und wo setzt du sie?
- Wo liegt der Unterschied, wenn du statt `adapter-node` den `adapter-static` nimmst?

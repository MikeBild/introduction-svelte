# Übung 11 – Build und Deployment

**Workshop:** Lektionen „Welcher Adapter bringt den Shop in Production?“ und „Drei Wege, SvelteKit auf AWS zu betreiben“ · **Schwierigkeit:** ★★★☆☆

`npm run build` erzeugt mit `@sveltejs/adapter-node` einen Node-Server in `build/`. Den startest du direkt mit `node build`. Brauchst du eigene Routen davor, etwa einen Health Check, hängst du den SvelteKit-Handler in Express 5 ein.

## Dateien

- `start/app.ts` – hier arbeitest du: `createApp(handler)` baut die Express-App
- `server.ts` im Wurzelverzeichnis – startet den echten Build mit `createApp` aus `loesung/`
- `Dockerfile` – ein Container-Image für den Betrieb
- `Dockerfile.lambda` – dasselbe Image als AWS Lambda Function, mit dem AWS Lambda Web Adapter

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

## Auf AWS Lambda

`Dockerfile.lambda` baut auf dem Image `werkstatt-shop` auf und ergänzt den [AWS Lambda Web Adapter](https://github.com/awslabs/aws-lambda-web-adapter) als Extension. Er startet den Node-Server in der Lambda Function und übersetzt jedes Lambda-Event in einen HTTP-Request. `/healthz` dient als Readiness Check.

```bash
docker build -f src/uebungen/11-deploy/Dockerfile.lambda -t werkstatt-shop-lambda src/uebungen/11-deploy
```

Das Image lädst du in Amazon ECR hoch und legst damit eine Lambda Function an, etwa mit AWS CDK. Wie das geht, zeigt der Workshop AWS Serverless.

## Zum Nachdenken

- Was gewinnst du mit Express vor dem Handler, und was kostet es dich gegenüber `node build`?
- Welche Umgebungsvariablen braucht die App in Production, und wo setzt du sie?
- Wo liegt der Unterschied, wenn du statt `adapter-node` den `adapter-static` nimmst?

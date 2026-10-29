// Startet den Build hinter Express 5: erst `npm run build`, dann `npm run start:express`.
// Node.js 26 führt TypeScript direkt aus (Type Stripping), ein Build-Schritt für diese Datei entfällt.
import { handler } from './build/handler.js';
import { createApp } from './src/uebungen/11-deploy/loesung/app.ts';

const port = Number(process.env.PORT ?? 3000);

createApp(handler).listen(port, () => {
	console.log(`Werkstatt-Shop läuft auf http://localhost:${port}`);
});

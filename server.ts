// Runs the build behind Express 5: first `npm run build`, then `npm run start:express`.
// Node.js 26 runs TypeScript directly (type stripping), so this file needs no build step.
import { handler } from './build/handler.js';
import { createApp } from './src/uebungen/11-deploy/loesung/app.ts';

const port = Number(process.env.PORT ?? 3000);

createApp(handler).listen(port, () => {
	console.log(`Werkstatt-Shop läuft auf http://localhost:${port}`);
});

// Express 5 vor dem SvelteKit-Handler aus `build/handler.js` (adapter-node).
import express, { type RequestHandler } from 'express';

export function createApp(svelteKitHandler: RequestHandler) {
	const app = express();
	app.disable('x-powered-by');

	// Eigene Routen stehen vor dem Handler, z. B. für Health Checks des Load Balancers.
	app.get('/healthz', (_req, res) => {
		res.json({ ok: true });
	});

	// Alles andere beantwortet SvelteKit: Seiten, Load-Funktionen, Form Actions, statische Dateien.
	app.use(svelteKitHandler);
	return app;
}

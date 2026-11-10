// Express 5 in front of the SvelteKit handler from `build/handler.js` (adapter-node).
import express, { type RequestHandler } from 'express';

export function createApp(svelteKitHandler: RequestHandler) {
	const app = express();
	app.disable('x-powered-by');

	// Your own routes come before the handler, e.g. for the load balancer's health checks.
	app.get('/healthz', (_req, res) => {
		res.json({ ok: true });
	});

	// SvelteKit answers everything else: pages, load functions, Form Actions, static files.
	app.use(svelteKitHandler);
	return app;
}

// Express 5 in front of the SvelteKit handler from `build/handler.js` (adapter-node).
import express, { type RequestHandler } from 'express';

export function createApp(svelteKitHandler: RequestHandler) {
	const app = express();
	// TODO 1: Turn off the `X-Powered-By` header with `app.disable('x-powered-by')`.

	// TODO 2: Answer `GET /healthz` with `res.json({ ok: true })`.
	//         The route comes before the handler, otherwise SvelteKit answers with 404.

	// TODO 3: Pass all other requests to `svelteKitHandler` with `app.use(...)`.
	void svelteKitHandler;
	return app;
}

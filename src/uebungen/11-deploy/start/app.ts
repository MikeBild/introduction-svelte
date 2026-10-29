// Express 5 vor dem SvelteKit-Handler aus `build/handler.js` (adapter-node).
import express, { type RequestHandler } from 'express';

export function createApp(svelteKitHandler: RequestHandler) {
	const app = express();
	// TODO 1: Schalte den Header `X-Powered-By` mit `app.disable('x-powered-by')` ab.

	// TODO 2: Beantworte `GET /healthz` mit `res.json({ ok: true })`.
	//         Die Route steht vor dem Handler, sonst antwortet SvelteKit mit 404.

	// TODO 3: Reiche alle anderen Requests mit `app.use(...)` an `svelteKitHandler` weiter.
	void svelteKitHandler;
	return app;
}

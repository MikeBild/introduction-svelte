import type { Server } from 'node:http';
import type { AddressInfo } from 'node:net';
import type { RequestHandler } from 'express';
import { afterEach, describe, expect, it } from 'vitest';
import { createApp } from './loesung/app.js';

// Ersatz für `build/handler.js`: antwortet wie SvelteKit auf jede Seite.
const fakeSvelteKit: RequestHandler = (req, res) => {
	res.type('html').send(`<h1>SvelteKit: ${req.path}</h1>`);
};

let server: Server | undefined;
afterEach(() => server?.close());

const start = async () => {
	server = createApp(fakeSvelteKit).listen(0);
	await new Promise((resolve) => server!.once('listening', resolve));
	const { port } = server.address() as AddressInfo;
	return (path: string) => fetch(`http://127.0.0.1:${port}${path}`);
};

describe('11 Deploy – Express vor SvelteKit', () => {
	it('beantwortet den Health Check selbst', async () => {
		const get = await start();
		const response = await get('/healthz');
		expect(response.status).toBe(200);
		expect(await response.json()).toEqual({ ok: true });
	});

	it('reicht Seiten an SvelteKit weiter', async () => {
		const get = await start();
		const response = await get('/products');
		expect(response.status).toBe(200);
		expect(await response.text()).toBe('<h1>SvelteKit: /products</h1>');
	});

	it('verrät nicht, dass Express läuft', async () => {
		const get = await start();
		const response = await get('/healthz');
		expect(response.headers.get('x-powered-by')).toBeNull();
	});
});

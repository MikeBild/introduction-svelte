import { loadOrders, placeOrder } from '#uebungen/08-sveltekit/loesung/orders.server.js';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = () => loadOrders();

export const actions = {
	default: (event) => placeOrder(event)
} satisfies Actions;

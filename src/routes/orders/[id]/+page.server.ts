import { loadOrder } from '#uebungen/08-sveltekit/loesung/orders.server.js';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = (event) => loadOrder(event);

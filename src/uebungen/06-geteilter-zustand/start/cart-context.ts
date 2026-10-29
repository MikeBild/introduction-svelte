import type { Cart } from '#lib/cart.svelte.js';

// TODO 1: Erzeuge mit `createContext<Cart>()` aus 'svelte' ein typisiertes Paar
//         und exportiere es als `getCart` und `setCart`.
export const getCart = (): Cart => {
	throw new Error('getCart ist noch nicht umgesetzt');
};
export const setCart = (cart: Cart): Cart => cart;

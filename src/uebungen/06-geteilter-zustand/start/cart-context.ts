import type { Cart } from '#lib/cart.svelte.js';

// TODO 1: Create a typed pair with `createContext<Cart>()` from 'svelte'
//         and export it as `getCart` and `setCart`.
export const getCart = (): Cart => {
	throw new Error('getCart ist noch nicht umgesetzt');
};
export const setCart = (cart: Cart): Cart => cart;

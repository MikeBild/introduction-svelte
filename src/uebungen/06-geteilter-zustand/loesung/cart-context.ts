import { createContext } from 'svelte';
import type { Cart } from '#lib/cart.svelte.js';

// Typisierter Context: `getCart` wirft, wenn kein Vorfahre `setCart` aufgerufen hat.
export const [getCart, setCart] = createContext<Cart>();

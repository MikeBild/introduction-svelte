import { createContext } from 'svelte';
import type { Cart } from '#lib/cart.svelte.js';

// Typed Context: `getCart` throws if no ancestor has called `setCart`.
export const [getCart, setCart] = createContext<Cart>();

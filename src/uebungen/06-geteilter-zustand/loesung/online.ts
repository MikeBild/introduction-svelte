import { readable } from 'svelte/store';

// Ein Store für eine externe Quelle: den Online-Status des Browsers.
export const online = readable(true, (set) => {
	if (typeof window === 'undefined') return; // beim Server-Side Rendering gibt es kein window
	const update = () => set(navigator.onLine);
	update();
	window.addEventListener('online', update);
	window.addEventListener('offline', update);
	return () => {
		window.removeEventListener('online', update);
		window.removeEventListener('offline', update);
	};
});

import { readable } from 'svelte/store';

// A store for an external source: the browser's online status.
export const online = readable(true, (set) => {
	if (typeof window === 'undefined') return; // there is no window during server-side rendering
	const update = () => set(navigator.onLine);
	update();
	window.addEventListener('online', update);
	window.addEventListener('offline', update);
	return () => {
		window.removeEventListener('online', update);
		window.removeEventListener('offline', update);
	};
});

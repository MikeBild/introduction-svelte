import { readable } from 'svelte/store';

// TODO 2: Set the value to `navigator.onLine` and update it on the
//         window events `online` and `offline`. Clean up the listeners again.
//         Keep server-side rendering in mind: there is no `window` there.
export const online = readable(true);

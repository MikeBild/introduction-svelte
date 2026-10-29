import { readable } from 'svelte/store';

// TODO 2: Setze den Wert auf `navigator.onLine` und aktualisiere ihn bei den
//         window-Events `online` und `offline`. Räume die Listener wieder ab.
//         Denk an das Server-Side Rendering: dort gibt es kein `window`.
export const online = readable(true);

import adapter from '@sveltejs/adapter-node';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, type Plugin } from 'vitest/config';

/**
 * `npm run test:start` startet Vitest im Modus „start“.
 * Dann zeigen alle relativen Importe `./loesung/…` auf `./start/…` –
 * dieselben Tests prüfen also deinen eigenen Code.
 */
function uebungsModus(mode: string): Plugin {
	return {
			name: 'uebungs-modus',
			enforce: 'pre',
			async resolveId(source, importer, options) {
				if (mode !== 'start' || !importer?.includes('/src/uebungen/')) return null;
				if (!/^\.\.?\/loesung\//.test(source)) return null;
				const umgeleitet = source.replace('/loesung/', '/start/');
				return this.resolve(umgeleitet, importer, { ...options, skipSelf: true });
			}
		};
	}

	export default defineConfig(({ mode }) => {
		// Tests, die du selbst schreibst (Übung 10), liegen in start/ und loesung/.
		// Normal laufen die aus loesung/, im Modus „start“ deine aus start/.
		const andere = mode === 'start' ? 'loesung' : 'start';
		const ohne = [`src/uebungen/*/${andere}/**`];
		return {
		plugins: [
			uebungsModus(mode),
			sveltekit({
				compilerOptions: {
					// Runes überall erzwingen, außer in Bibliotheken
					runes: ({ filename }) =>
						filename.split(/[/\\]/).includes('node_modules') ? undefined : true
				},
				adapter: adapter()
			})
		],
		test: {
			expect: { requireAssertions: true },
			projects: [
				{
					extends: true,
					test: {
						name: 'server',
						environment: 'node',
						include: ['src/**/*.test.ts'],
						exclude: ['src/**/*.svelte.test.ts', ...ohne]
					}
				},
				{
					extends: true,
					resolve: { conditions: ['browser'] },
					test: {
						name: 'client',
						environment: 'jsdom',
						include: ['src/**/*.svelte.test.ts'],
						exclude: ohne
					}
				}
			]
		}
	};
});

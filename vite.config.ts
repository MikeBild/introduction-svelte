import adapter from '@sveltejs/adapter-node';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, type Plugin } from 'vitest/config';

/**
 * `npm run test:start` runs Vitest in “start” mode.
 * Then all relative imports `./loesung/…` point to `./start/…` –
 * so the same tests check your own code.
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
		// Tests you write yourself (exercise 10) live in start/ and loesung/.
		// Normally the ones in loesung/ run; in “start” mode, yours in start/ run.
		const andere = mode === 'start' ? 'loesung' : 'start';
		const ohne = [`src/uebungen/*/${andere}/**`];
		return {
		plugins: [
			uebungsModus(mode),
			sveltekit({
				compilerOptions: {
					// Force runes everywhere except in libraries
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

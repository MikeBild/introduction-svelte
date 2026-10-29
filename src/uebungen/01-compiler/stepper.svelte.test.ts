import { flushSync, mount, unmount } from 'svelte';
import { afterEach, describe, expect, it } from 'vitest';
import { euro } from '#lib/shop.js';
import Stepper from './loesung/Stepper.svelte';

describe('01 Compiler – Stepper', () => {
	let app: ReturnType<typeof mount> | undefined;
	afterEach(() => {
		if (app) unmount(app);
		document.body.innerHTML = '';
	});

	const setup = () => {
		app = mount(Stepper, { target: document.body });
		const button = (label: string) =>
			document.body.querySelector<HTMLButtonElement>(`button[aria-label="${label}"]`)!;
		return {
			mehr: button('Menge erhöhen'),
			weniger: button('Menge verringern'),
			menge: () => document.body.querySelector('[data-testid="menge"]')!.textContent,
			summe: () => document.body.querySelector('p')!.textContent
		};
	};

	it('startet mit Menge 1 und der Summe eines Stücks', () => {
		const ui = setup();
		expect(ui.menge()).toBe('1');
		expect(ui.summe()).toBe(`Summe: ${euro(4990)}`);
	});

	it('erhöht Menge und Summe per Klick', () => {
		const ui = setup();
		ui.mehr.click();
		ui.mehr.click();
		flushSync();
		expect(ui.menge()).toBe('3');
		expect(ui.summe()).toBe(`Summe: ${euro(3 * 4990)}`);
	});

	it('lässt die Menge nicht unter 1 fallen', () => {
		const ui = setup();
		expect(ui.weniger.disabled).toBe(true);
		ui.mehr.click();
		flushSync();
		expect(ui.weniger.disabled).toBe(false);
		ui.weniger.click();
		flushSync();
		expect(ui.menge()).toBe('1');
	});
});

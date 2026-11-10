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

	it('starts with quantity 1 and the total of one item', () => {
		const ui = setup();
		expect(ui.menge()).toBe('1');
		expect(ui.summe()).toBe(`Summe: ${euro(4990)}`);
	});

	it('increases quantity and total on click', () => {
		const ui = setup();
		ui.mehr.click();
		ui.mehr.click();
		flushSync();
		expect(ui.menge()).toBe('3');
		expect(ui.summe()).toBe(`Summe: ${euro(3 * 4990)}`);
	});

	it('does not let the quantity drop below 1', () => {
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

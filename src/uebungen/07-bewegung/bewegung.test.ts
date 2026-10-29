import { parse, type AST } from 'svelte/compiler';
import { render } from 'svelte/server';
import { describe, expect, it } from 'vitest';
import { Cart } from '#lib/cart.svelte.js';
import { euro, sampleProducts } from '#lib/shop.js';
import CartHarness from './CartHarness.svelte';
import cartListSource from './loesung/CartList.svelte?raw';
import cartTotalSource from './loesung/CartTotal.svelte?raw';

const [hammer, schrauber] = sampleProducts;

/** Quelltext ohne Kommentare – TODO-Hinweise zählen nicht als Lösung. */
const code = (source: string) =>
	source.replace(/<!--[\s\S]*?-->/g, '').replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '');

/** Sammelt alle Direktiven (in:, out:, animate: …) aus dem Markup einer Komponente. */
function directives(source: string) {
	const found: string[] = [];
	const visit = (node: unknown) => {
		if (!node || typeof node !== 'object') return;
		if (Array.isArray(node)) return node.forEach(visit);
		const n = node as Record<string, unknown> & { type?: string };
		if (n.type === 'TransitionDirective') {
			const t = n as unknown as AST.TransitionDirective;
			found.push(`${t.intro && t.outro ? 'transition' : t.intro ? 'in' : 'out'}:${t.name}`);
		}
		if (n.type === 'AnimateDirective') found.push(`animate:${(n as { name: string }).name}`);
		Object.values(n).forEach(visit);
	};
	visit(parse(source, { modern: true }).fragment);
	return found;
}

describe('07 Bewegung – CartList', () => {
	it('rendert jede Position', () => {
		const cart = new Cart();
		cart.add(hammer);
		cart.add(hammer);
		cart.add(schrauber);
		const { body } = render(CartHarness, { props: { cart } });
		expect(body).toContain(`2 × ${hammer.name}`);
		expect(body).toContain(`1 × ${schrauber.name}`);
	});

	it('nutzt einen keyed each-Block', () => {
		const ast = parse(cartListSource, { modern: true });
		const blocks: AST.EachBlock[] = [];
		const visit = (node: unknown) => {
			if (!node || typeof node !== 'object') return;
			if (Array.isArray(node)) return node.forEach(visit);
			if ((node as { type?: string }).type === 'EachBlock') blocks.push(node as AST.EachBlock);
			Object.values(node).forEach(visit);
		};
		visit(ast.fragment);
		expect(blocks.some((block) => block.key)).toBe(true);
	});

	it('blendet ein, blendet aus und schiebt nach', () => {
		expect(directives(cartListSource)).toEqual(
			expect.arrayContaining(['in:fly', 'out:fade', 'animate:flip'])
		);
	});

	it('berücksichtigt reduzierte Bewegung', () => {
		expect(code(cartListSource)).toContain('prefersReducedMotion.current');
	});
});

describe('07 Bewegung – CartTotal', () => {
	it('zeigt beim ersten Rendern die aktuelle Summe', () => {
		const cart = new Cart();
		cart.add(hammer);
		cart.add(schrauber);
		const { body } = render(CartHarness, { props: { cart } });
		expect(body).toContain(`Summe: ${euro(hammer.priceCents + schrauber.priceCents)}`);
	});

	it('lässt die Summe mit Tween gleiten – mit Rücksicht', () => {
		expect(code(cartTotalSource)).toMatch(/Tween\.of\(/);
		expect(code(cartTotalSource)).toContain('prefersReducedMotion.current');
	});
});

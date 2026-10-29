import type { z } from 'zod';

// Texte für Nutzende stehen in der Oberfläche, nicht im Schema.
const messages: Record<string, string> = {
	quantity: 'Gib eine ganze Zahl ab 1 ein.',
	productId: 'Wähle ein Produkt.'
};

/** Macht aus zod-Issues ein Objekt „Pfad → Meldung“, z. B. `items.0.quantity`. */
export const toFieldErrors = (issues: readonly z.core.$ZodIssue[]): Record<string, string> =>
	Object.fromEntries(
		issues.map((issue) => [
			issue.path.join('.'),
			messages[String(issue.path.at(-1))] ?? issue.message
		])
	);

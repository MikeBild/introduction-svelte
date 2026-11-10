import type { z } from 'zod';

// Texts for users live in the UI, not in the schema.
const messages: Record<string, string> = {
	quantity: 'Gib eine ganze Zahl ab 1 ein.',
	productId: 'Wähle ein Produkt.'
};

/** Turns zod issues into an object “path → message”, e.g. `items.0.quantity`. */
export const toFieldErrors = (issues: readonly z.core.$ZodIssue[]): Record<string, string> =>
	Object.fromEntries(
		issues.map((issue) => [
			issue.path.join('.'),
			messages[String(issue.path.at(-1))] ?? issue.message
		])
	);

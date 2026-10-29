import type { z } from 'zod';

// Texte für Nutzer stehen in der Oberfläche, nicht im Schema.
const messages: Record<string, string> = {
	quantity: 'Bitte eine ganze Zahl ab 1',
	productId: 'Bitte ein Produkt wählen'
};

/** Macht aus zod-Issues ein Objekt „Pfad → Meldung“, z. B. `items.0.quantity`. */
export const toFieldErrors = (issues: readonly z.core.$ZodIssue[]): Record<string, string> =>
	Object.fromEntries(
		issues.map((issue) => [
			issue.path.join('.'),
			messages[String(issue.path.at(-1))] ?? issue.message
		])
	);

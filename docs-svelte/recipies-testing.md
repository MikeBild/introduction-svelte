# Svelte Testing

- [Svelte + TypeScript Testing Example](../examples/svelte-components/README.md)

```sh
yarn test 
```

```sh
yarn test:watch
```

## Setup

Install additional dependencies:

**package.json**
```json
{
    "devDependencies": {
            "@types/jest": "^27.4.0",
            "jest": "^27.4.7",
            "ts-jest": "^27.1.3",
            "svelte-jester": "^2.1.5",
            "@testing-library/svelte": "^3.0.3",
            "@testing-library/jest-dom": "^5.16.1"
    }
}
```

Add **jest.config.cjs**

```javascript
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.svelte$': [
			'svelte-jester',
			{
				preprocess: true
			}
		],
		'^.+\\.ts$': 'ts-jest'
	},
	moduleFileExtensions: ['js', 'ts', 'svelte']
};
```

## Write a test (side by side)

**Button.test.ts**

```typescript
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/svelte';
import Button from './Button.svelte';

test('shows proper text when rendered', () => {
	const { getByText } = render(Button, { label: 'Hello World!' });

	expect(getByText('Hello World!')).toBeInTheDocument();
});

test('popup window.alert on click', async () => {
	// Attach Spy to test window.alert
	window.alert = jest.fn();

	const { getByText } = render(Button);
	const button = getByText('Click Me!');

	await fireEvent.click(button);

	expect(window.alert).toHaveBeenCalledWith('Hello from Svelte!');
});
```

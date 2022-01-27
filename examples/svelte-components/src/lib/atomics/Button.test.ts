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

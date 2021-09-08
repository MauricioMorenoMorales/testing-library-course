import React from 'react';
import Counter from '../Counter';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('Heade renders with correct text', () => {
	//? Primera forma de hacer esto sin destructuracion
	// const component = render(<Counter />);
	// const headerEl = component.getByTestId('header');
	const { getByTestId } = render(<Counter />);
	const headerEl = getByTestId('header');
	expect(headerEl.textContent).toBe('My Counter');
});

test('Counter initially start with value of 0 ', () => {
	const { getByTestId } = render(<Counter />);
	const counterEl = getByTestId('counter');
	expect(counterEl.textContent).toBe('0');
});

test('Input contains initial value of 1.', () => {
	const { getByTestId } = render(<Counter />);
	const inputEl = getByTestId('input');
	expect(inputEl.value).toBe('1');
});

test('Add button renders with +', () => {
	const { getByTestId } = render(<Counter />);
	const addButton = getByTestId('add-button');

	expect(addButton.textContent).toBe('+');
});

test('Subtract button renders with +', () => {
	const { getByTestId } = render(<Counter />);
	const subtractButton = getByTestId('subtract-button');

	expect(subtractButton.textContent).toBe('-');
});

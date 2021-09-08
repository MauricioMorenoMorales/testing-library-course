import React from 'react';
import Counter from '../Counter';

import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

let getByTestId;

beforeEach(() => {
	const component = render(<Counter />);
	getByTestId = component.getByTestId;
});

test('Heade renders with correct text', () => {
	//? Primera forma de hacer esto sin destructuracion
	// const component = render(<Counter />);
	// const headerEl = component.getByTestId('header');
	const headerEl = getByTestId('header');
	expect(headerEl.textContent).toBe('My Counter');
});

test('Counter initially start with value of 0 ', () => {
	const counterEl = getByTestId('counter');
	expect(counterEl.textContent).toBe('0');
});

test('Input contains initial value of 1.', () => {
	const inputEl = getByTestId('input');
	expect(inputEl.value).toBe('1');
});

test('Add button renders with +', () => {
	const addButton = getByTestId('add-button');

	expect(addButton.textContent).toBe('+');
});

test('Subtract button renders with +', () => {
	const subtractButton = getByTestId('subtract-button');

	expect(subtractButton.textContent).toBe('-');
});

test('Change value of input works correctly', () => {
	const inputEl = getByTestId('input');
	expect(inputEl.value).toBe('1');
	fireEvent.change(inputEl, {
		target: {
			value: 5,
		},
	});
	expect(inputEl.value).toBe('5');
});

test('Clicking on the plus button adds one to the counter', () => {
	const ButtonElement = getByTestId('add-button');
	const counterElement = getByTestId('counter');
	fireEvent.click(ButtonElement);

	expect(counterElement.textContent).toBe('1');
});

test('Clicking on the subtract button subtract one to the counter', () => {
	const subtractButtonElement = getByTestId('subtract-button');
	const counterElement = getByTestId('counter');
	fireEvent.click(subtractButtonElement);

	expect(counterElement.textContent).toBe('-1');
});

test('Changing input value then clicking on add or subratct button works correctly', () => {
	const subtractButtonElement = getByTestId('subtract-button');
	const addButtonElement = getByTestId('add-button');
	const inputEl = getByTestId('input');
	const counterElement = getByTestId('counter');

	fireEvent.change(inputEl, {
		target: {
			value: '5',
		},
	});
	fireEvent.click(addButtonElement);
	expect(counterElement.textContent).toBe('5');

	fireEvent.change(inputEl, {
		target: {
			value: '15',
		},
	});
	fireEvent.click(subtractButtonElement);
	expect(counterElement.textContent).toBe('-10');
});

test('Adding and then subtracting leads to the correct counter number', () => {
	const subtractButtonElement = getByTestId('subtract-button');
	const addButtonElement = getByTestId('add-button');
	const inputEl = getByTestId('input');
	const counterElement = getByTestId('counter');

	fireEvent.change(inputEl, {
		target: {
			value: '10',
		},
	});
	fireEvent.click(addButtonElement);
	fireEvent.click(addButtonElement);
	fireEvent.click(addButtonElement);
	fireEvent.click(addButtonElement);
	fireEvent.click(subtractButtonElement);
	fireEvent.click(subtractButtonElement);
	expect(counterElement.textContent).toBe('20');

	fireEvent.change(inputEl, {
		target: {
			value: '5',
		},
	});
	fireEvent.click(addButtonElement);
	fireEvent.click(subtractButtonElement);
	fireEvent.click(subtractButtonElement);
	expect(counterElement.textContent).toBe('15');
});

test('Counter contains correct className', () => {
	const subtractButtonElement = getByTestId('subtract-button');
	const addButtonElement = getByTestId('add-button');
	const counterElement = getByTestId('counter');
	const inputEl = getByTestId('input');

	expect(counterElement.className).toBe('');
	fireEvent.change(inputEl, {
		target: {
			value: '50',
		},
	});
	fireEvent.click(addButtonElement);
	expect(counterElement.className).toBe('');
	fireEvent.click(addButtonElement);
	expect(counterElement.className).toBe('green');
	fireEvent.click(addButtonElement);
	expect(counterElement.className).toBe('green');
	fireEvent.click(subtractButtonElement);
	fireEvent.click(subtractButtonElement);
	expect(counterElement.className).toBe('');
	fireEvent.click(subtractButtonElement);
	fireEvent.click(subtractButtonElement);
	fireEvent.click(subtractButtonElement);
	fireEvent.click(subtractButtonElement);
	expect(counterElement.className).toBe('red');
});

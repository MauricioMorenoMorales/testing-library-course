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

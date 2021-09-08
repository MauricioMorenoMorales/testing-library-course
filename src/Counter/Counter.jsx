import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
	const [counterValue, setCounterValue] = useState(0);
	const [inputValue, setInputValue] = useState(1);
	return (
		<div>
			<h1 data-testid="header">My Counter</h1>
			<h2 data-testid="counter">{counterValue}</h2>
			<button data-testid="subtract-button">-</button>
			<input
				data-testid="input"
				type="number"
				value={inputValue}
				className="text-center"
			/>
			<button data-testid="add-button">+</button>
		</div>
	);
};

export default Counter;

// 38:00

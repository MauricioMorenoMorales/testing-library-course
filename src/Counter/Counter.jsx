import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
	const [counterValue, setCounterValue] = useState(0);
	const [inputValue, setInputValue] = useState(1);

	const addToCounter = () => setCounterValue(counterValue + inputValue);
	const subtractToCounter = () => setCounterValue(counterValue - inputValue);
	return (
		<div>
			<h1 data-testid="header">My Counter</h1>
			<h2
				data-testid="counter"
				className={`${counterValue >= 100 ? 'green' : ''}${
					counterValue <= -100 ? 'red' : ''
				}`}
			>
				{counterValue}
			</h2>
			<button data-testid="subtract-button" onClick={subtractToCounter}>
				-
			</button>
			<input
				data-testid="input"
				type="number"
				value={inputValue}
				className="text-center"
				onChange={event => setInputValue(Number(event.target.value))}
			/>
			<button data-testid="add-button" onClick={addToCounter}>
				+
			</button>
		</div>
	);
};

export default Counter;

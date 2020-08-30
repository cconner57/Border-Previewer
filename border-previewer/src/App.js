import React, { useState } from 'react';
import './App.css';

function App() {
	const [color, setColor] = useState('#235583');
	const [width, setWidth] = useState('5');

	return (
		<div className='App-Container'>
      <h1>Border Previewer</h1>
			<div
				className='box'
				style={{ border: `${width}px solid ${color}` }}></div>
			<div className='inputs'>
				<label htmlFor='border-color'>Change Border Color </label>
				<input
					id='border-color'
					type='color'
					value={color}
					onChange={(e) => setColor(e.target.value)}
				/>
				<label className='label-width' htmlFor='border-width'>
					Change Border Width{' '}
				</label>
				<input
					id='border-width'
					type='range'
					min='0'
					max='100'
					value={width}
					onChange={(e) => setWidth(e.target.value)}
				/>
			</div>
		</div>
	);
}

export default App;

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1>Счетчик: {count}</h1>
        <button onClick={increment} style={{ marginRight: '10px' }}>Увеличить</button>
        <button onClick={decrement}>Уменьшить</button>
      </div>
  );
}

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter className="counter" />
        </header>
      </div>
  );
}

export default App;

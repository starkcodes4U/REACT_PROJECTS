import React, { useState, useEffect } from 'react';
import './Counter.css'; // import CSS file

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  useEffect(() => {
    console.log(`Count changed to: ${count}`);
  }, [count]);

  return (
    <div className="counter-container">
      <h1>Count: {count}</h1>
      <button onClick={increment} className="increment">Increment</button>
      <button onClick={decrement} disabled={count === 0} className="decrement">Decrement</button>
      <button onClick={reset} className="reset">Reset</button>
    </div>
  );
};

export default Counter;

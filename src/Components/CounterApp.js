import React, { useState } from "react";

const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1)
  }

  return (
    <div>
      <button onClick={incrementCounter}>
        Increment
      </button>
      <button >
        Reset
      </button>
      <h1>Contador por Click: {counter}</h1>
    </div>
  );
};

export default CounterApp;

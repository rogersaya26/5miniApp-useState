import React, { useState } from "react";

const ConditionalApp = () => {
  const [condition, setCondition] = useState(true);

  return (
    <div>
      <h1>ConditionalApp</h1>

      <h1>state Values: {condition.toString()}</h1>
      <button onClick={() => setCondition(!condition)}>Toggle</button>

      {
        condition && <h1>Show message True</h1>
        //condition ? <h1>True message</h1> : <h1>False message</h1>
      }
    </div>
  );
};

export default ConditionalApp;

import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>
        +: <button onClick={() => setCount(count + 1)}></button>
      </p>
      <p>
        -: <button onClick={() => setCount(count - 1)}></button>
      </p>
      {count}
    </div>
  );
};

export default Counter;

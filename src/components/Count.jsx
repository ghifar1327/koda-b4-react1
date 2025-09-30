import { useState } from "react";
import { decrement, increment } from "./Calc";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center items-center h-screen gap-4">
      <button
        onClick={() => decrement(count, setCount)}
        className="w-20 h-20 bg-purple-500 text-5xl rounded-md"
      >
        -
      </button>

      <p className="text-8xl w-40 flex justify-center">{count}</p>

      <button
        onClick={() => increment(count, setCount)}
        className="w-20 h-20 bg-orange-500 text-5xl rounded-md"
      >
        +
      </button>
    </div>
  );
}

export default Counter;

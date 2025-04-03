"use client";

import { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center gap-4 p-6 rounded-lg border border-gray-300 shadow-md bg-white">
      <h2 className="text-lg font-semibold">{props.title}</h2>

      <div className="flex items-center gap-4">
        <button
          onClick={() => setCount((prev) => prev - 1)}
          className="btn btn-circle btn-outline"
        >
          -
        </button>
        <span className="text-2xl font-mono min-w-[3ch] text-center">
          {count}
        </span>
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="btn btn-circle btn-outline"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;

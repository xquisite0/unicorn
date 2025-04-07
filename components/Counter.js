"use client";

import { useState } from "react";

function Counter({ title, id }) {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  async function handleCounterAction(action) {
    setIsLoading(true);

    try {
      const response = await fetch("api/counter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action,
          counterId: id,
        }),
      });

      if (!response.ok) throw new Error("Failed to update counter");

      // Update local state after successful API call
      setCount((prev) => (action === "increment" ? prev + 1 : prev - 1));
    } catch (error) {
      console.error("Error updating counter:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center gap-4 p-6 rounded-lg border border-gray-300 shadow-md bg-background">
      <h2 className="text-lg font-semibold">{title}</h2>

      <div className="flex items-center gap-4">
        <button
          onClick={() => handleCounterAction("decrement")}
          className="btn btn-circle btn-outline"
          disabled={isLoading}
        >
          -
        </button>
        <span className="text-2xl font-mono min-w-[3ch] text-center">
          {count}
        </span>
        <button
          onClick={() => handleCounterAction("increment")}
          className="btn btn-circle btn-outline"
          disabled={isLoading}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;

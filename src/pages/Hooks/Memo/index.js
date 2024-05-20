import React, { useMemo } from "react";

export const MemoTask = () => {
  const [count, setCount] = useState(0);

  const expensiveFunction = useMemo(() => {}, []);

  return (
    <div>
      <div></div>
      <div>count - {count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};

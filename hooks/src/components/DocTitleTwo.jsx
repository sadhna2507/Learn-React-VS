import React, { useState, useEffect } from "react";

export function DocTitleTwo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `count - ${count}`;
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Click - {count}
      </button>
    </div>
  );
}

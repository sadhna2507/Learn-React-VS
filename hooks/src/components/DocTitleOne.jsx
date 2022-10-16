import React, { useState } from "react";
import { UseUpdateTitle } from "./hooks/UseUpdateTitle";

export function DocTitleOne() {
  const [count, setCount] = useState(0);
  UseUpdateTitle(count)

//   useEffect(() => {
//     document.title = `count - ${count}`;
//   }, [count]);

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Click - {count}
      </button>
    </div>
  );
}

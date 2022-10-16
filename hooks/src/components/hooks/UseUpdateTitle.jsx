import { useEffect } from "react";

export function UseUpdateTitle(count) {
  //   const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `count - ${count}`;
  }, [count]);
}

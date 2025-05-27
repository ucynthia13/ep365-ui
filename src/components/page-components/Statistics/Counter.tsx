import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  target: string;
  duration?: number;
}

const Counter = ({ target, duration = 2000 }: CounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseFloat(target.replace(/[^0-9.]/g, ""));
    const stepTime = Math.max(Math.floor(duration / end), 20);

    const interval = setInterval(() => {
      start += 1;
      if (start >= end) {
        clearInterval(interval);
        setCount(end);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {target.includes("$") && "$"}
      {Math.floor(count)}
      {target.includes("%") && "%"}
    </span>
  );
};


export default Counter;
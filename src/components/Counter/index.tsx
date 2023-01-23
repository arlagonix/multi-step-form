import { animate } from "framer-motion";
import { useEffect, useRef } from "react";

type CounterProps = {
  /** Initial value of the counter */
  from: number;
  /** Final value of the counter by the end of the animation */
  to: number;
};

// Code taken from https://stackoverflow.com/a/60523470/19449790
export default function Counter({ from, to }: CounterProps) {
  const nodeRef = useRef(null);

  useEffect(() => {
    const node: any = nodeRef.current;

    const controls = animate(from, to, {
      duration: 1,
      onUpdate(value) {
        node.textContent = value.toFixed(0);
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return <span ref={nodeRef} />;
}

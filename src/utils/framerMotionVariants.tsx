import { type Variants } from "framer-motion";

export const slightBounce: Variants = {
  initial: { opacity: 0.5, scale: 0.95 },
  animate: { opacity: 1, scale: 1, transition: { type: "spring", bounce: 0.6 } },
};

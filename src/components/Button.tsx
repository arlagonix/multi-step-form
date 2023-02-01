import classNames from "classnames";
import { motion } from "framer-motion";

type ButtonProps = {
  /** If `true` the button is disabled */
  isDisabled?: boolean;
  /** If `true` the button has `submit` type otherwise type `button` */
  isSubmit?: boolean;
  /** Button type */
  type?: "primary" | "secondary";
  /** Click handler */
  clickHandler?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  /** Children React nodes */
  children: React.ReactNode;
};

/** Button component */
function Button({
  isDisabled = false,
  isSubmit = false,
  type = "primary",
  clickHandler,
  children,
}: ButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", bounce: 0.6 }}
      onClick={clickHandler}
      type={isSubmit ? "submit" : "button"}
      disabled={isDisabled}
      layout
      className={classNames(
        "flex h-12 select-none items-center self-end rounded-lg px-6 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-50 sm:text-base",
        { "border bg-black text-white hover:bg-darkBlue": type === "primary" },
        { "text-grayOne hover:bg-grayThree": type === "secondary" }
      )}
    >
      {children}
    </motion.button>
  );
}

export default Button;

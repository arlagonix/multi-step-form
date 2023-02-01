import classNames from "classnames";
import { motion, type Variants } from "framer-motion";

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  shown: {
    opacity: 1,
  },
};

type TabProps = {
  /** Step sequence number */
  sequenceNumber: number;
  /** Step title */
  title: string;
  /** If `true`, tab is highlighted as active */
  isActive?: boolean;
};

/** A navigation menu tab */
function Tab({ sequenceNumber, title, isActive }: TabProps) {
  return (
    <motion.li
      className={classNames(
        "tab-animation flex select-none items-center gap-4 rounded-md transition sm:p-2"
      )}
      variants={itemVariants}
    >
      <div
        className={classNames(
          "flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium transition",
          { "border-none bg-blue text-black": isActive },
          { "border border-white text-white": !isActive }
        )}
      >
        {sequenceNumber}
      </div>
      <div className="hidden sm:block">
        <p className="text-xs font-light uppercase leading-none text-transparentWhite">
          Step {sequenceNumber}
        </p>
        <p className="text-sm font-medium uppercase tracking-wide text-white">{title}</p>
      </div>
    </motion.li>
  );
}

export default Tab;

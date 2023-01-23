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
        "tab-animation flex items-center gap-4 sm:p-2 \
        rounded-md transition select-none"
      )}
      variants={itemVariants}
    >
      <div
        className={classNames(
          "rounded-full w-8 h-8 flex justify-center \
          items-center font-medium text-sm transition",
          { "border-none text-black bg-blue": isActive },
          { "border border-white text-white": !isActive }
        )}
      >
        {sequenceNumber}
      </div>
      <div className="hidden sm:block">
        <p
          className="
          uppercase text-xs text-transparentWhite 
          font-light leading-none"
        >
          Step {sequenceNumber}
        </p>
        <p
          className="
          uppercase text-sm font-medium 
          tracking-wide text-white"
        >
          {title}
        </p>
      </div>
    </motion.li>
  );
}

export default Tab;

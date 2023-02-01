import classNames from "classnames";
import Tab from "../Tab";
export type StepType = 1 | 2 | 3 | 4;
import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  shown: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.25,
    },
  },
};

type StepsListProps = {
  /** Number of active Tab */
  activeStep: StepType;
  /** If `true` is displayed for mobile devices */
  small?: boolean;
};

function StepsList({ activeStep, small = false }: StepsListProps) {
  return (
    <nav
      className={classNames(
        "min-w-[274px] px-6 py-8",
        {
          "hidden bg-[url(./assets/bg-sidebar-desktop.svg)] bg-cover sm:block": !small,
        },
        {
          "bg-[url(./assets/bg-sidebar-mobile.svg)]bg-cover absolute inset-x-0 top-0 block h-[172px] sm:hidden":
            small,
        }
      )}
    >
      <motion.ul
        className="flex justify-center gap-4 sm:flex-col"
        variants={container}
        initial="hidden"
        animate="shown"
      >
        <Tab sequenceNumber={1} isActive={activeStep === 1} title="Your Info" />
        <Tab sequenceNumber={2} isActive={activeStep === 2} title="Select Plan" />
        <Tab sequenceNumber={3} isActive={activeStep === 3} title="Add-ons" />
        <Tab sequenceNumber={4} isActive={activeStep === 4} title="Summary" />
      </motion.ul>
    </nav>
  );
}

export default StepsList;

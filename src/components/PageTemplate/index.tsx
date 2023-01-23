import classNames from "classnames";
import { motion } from "framer-motion";
import { slightBounce } from "../../utils/framerMotionVariants";

type PageTemplateProps = {
  /** Additional classes for customizing the standard template */
  extraClasses?: string;
  /** React children Nodes */
  children: React.ReactNode;
};

function PageTemplate({ extraClasses = "", children }: PageTemplateProps) {
  return (
    <div className="w-full min-h-full">
      <motion.article
        variants={slightBounce}
        initial="initial"
        animate="animate"
        layout
        className={classNames(
          "sm:pb-4 sm:pl-4 sm:pt-8 flex flex-col max-w-[450px] mx-auto h-full",
          extraClasses
        )}
      >
        {children}
      </motion.article>
    </div>
  );
}

export default PageTemplate;

import { motion } from "framer-motion";
import { getAnimationVariants } from "./animationVariants";

const AnimateWrapper = ({
  children,
  duration,
  delay,
  type,
  className,
}: {
  children: React.ReactNode;
  duration: number;
  delay: number;
  type: "FadeInLeft" | "FadeInRight" | "FadeInBottom" | "FadeInTop";
  className?: string;
}) => {
  const animationVariant = getAnimationVariants(type);
  return (
    <motion.div
      initial={animationVariant.initial}
      whileInView={animationVariant.whileInView}
      transition={{ type: "spring", duration: duration, delay: delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimateWrapper;

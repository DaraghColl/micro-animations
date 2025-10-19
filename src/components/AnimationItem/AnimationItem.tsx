import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface AnimationItemProps {
  title: string;
  children?: ReactNode;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

const AnimationItem = (props: AnimationItemProps) => {
  const { title, children, handleMouseEnter, handleMouseLeave } = props;
  return (
    <motion.button
      initial={{ y: 20 }}
      animate={{ y: 0 }}
      exit={{ y: 20 }}
      transition={{ duration: 0.3, type: 'spring', stiffness: 100 }}
      className="w-fit cursor-pointer rounded bg-neutral-50 p-4 shadow-sm transition-shadow duration-300 hover:shadow-lg dark:border dark:border-neutral-900 dark:bg-neutral-950"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={title}
    >
      {children}
    </motion.button>
  );
};

export { AnimationItem };

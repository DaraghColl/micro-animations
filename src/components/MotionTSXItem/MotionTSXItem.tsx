import type { MotionTSXAnimation } from '@/animation-data';
import { useState } from 'react';
import { AnimationItem } from '../AnimationItem/AnimationItem';

const MotionTSXItem = ({ animation }: { animation: MotionTSXAnimation }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <AnimationItem handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}>
      {animation.motionTSX(isHovered)}
    </AnimationItem>
  );
};

export { MotionTSXItem };

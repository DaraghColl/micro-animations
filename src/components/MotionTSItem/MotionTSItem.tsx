import type { MotionTSAnimation } from '@/animation-data';
import { AnimationItem } from '../AnimationItem/AnimationItem';

const MotionTSItem = ({ animation }: { animation: MotionTSAnimation }) => {
  const handleMouseEnter = () => {
    animation.motionTS();
  };

  const handleMouseLeave = () => {};

  // Create unique HTML for motion.js to avoid CSS conflicts
  const motionHtml = animation.html.replace(
    new RegExp(`id="${animation.id}"`, 'g'),
    `id="${animation.id}-motion"`
  );

  return (
    <AnimationItem
      title={animation.title}
      handleMouseEnter={handleMouseEnter}
      handleMouseLeave={handleMouseLeave}
    >
      <div dangerouslySetInnerHTML={{ __html: motionHtml }} />
    </AnimationItem>
  );
};

export { MotionTSItem };

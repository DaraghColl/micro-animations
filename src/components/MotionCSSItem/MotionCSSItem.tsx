import { useState } from 'react';
import type { CSSAnimation } from '@/animation-data';
import { AnimationItem } from '../AnimationItem/AnimationItem';

const CSSAnimationItem = ({ animation }: { animation: CSSAnimation }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [cssLoaded, setCssLoaded] = useState(false);

  const loadCSS = async (css: string) => {
    if (!css || cssLoaded) return;

    const styleId = `css-${animation.id}`;
    const existingStyle = document.getElementById(styleId);

    if (!existingStyle) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = css;
      document.head.appendChild(style);
      setCssLoaded(true);
    }
  };

  const handleMouseEnter = async () => {
    setIsHovered(true);
    if (animation.css) {
      await loadCSS(animation.css);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <AnimationItem
      title={animation.title}
      handleMouseEnter={handleMouseEnter}
      handleMouseLeave={handleMouseLeave}
    >
      <div
        className={`example-trigger-element ${isHovered ? 'hover' : ''}`}
        dangerouslySetInnerHTML={{ __html: animation.html }}
      />
    </AnimationItem>
  );
};

export { CSSAnimationItem };

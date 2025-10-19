import { useState } from 'react';
import type { AnimationVariant } from './models';
import { AnimationTypeTabs } from './components/AnimationTypeTabs/AnimationTypeTabs';
import { ThemeToggle } from './components/ThemeToggle/ThemeToggle';
import { motionTSAnimations, motionTSXAnimations, cssAnimations } from './animation-data';
import { MotionTSItem } from './components/MotionTSItem/MotionTSItem';
import { MotionTSXItem } from './components/MotionTSXItem/MotionTSXItem';
import { CSSAnimationItem } from './components/MotionCSSItem/MotionCSSItem';
import { motion } from 'motion/react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

function App() {
  const [activeTab, setActiveTab] = useState<AnimationVariant>('motionTS');
  return (
    <div className="mx-auto min-h-screen max-w-4xl p-8">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>
      {/* Header */}
      <div className="mt-5 mb-10 text-center">
        <h1 className="mb-10 text-center text-7xl">Micro Animations</h1>
        <p className="text-lg">
          A growing list of micro animations, based on{' '}
          <a
            href="https://lucide.dev/icons/"
            className="text-indigo-600 underline dark:text-indigo-400"
            target="_blank"
          >
            lucide icons
          </a>
        </p>
      </div>

      <div className="mb-10 flex justify-center">
        <AnimationTypeTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Animations List */}
      <div className="mb-12">
        <div className="mb-8 text-center">
          <p className="darktext-neutral-400 text-sm text-neutral-500 dark:text-neutral-200">
            Hover over any icon to see the animation in action
          </p>
        </div>
        <motion.div variants={container} initial="hidden" animate="show">
          {activeTab === 'motionTS' && (
            <div className="grid grid-cols-3 gap-10 md:grid-cols-6">
              {motionTSAnimations.map(animation => (
                <MotionTSItem key={`motionTS-${animation.id}`} animation={animation} />
              ))}
            </div>
          )}
          {activeTab === 'motionTSX' && (
            <div className="grid grid-cols-3 gap-10 md:grid-cols-6">
              {motionTSXAnimations.map(animation => (
                <MotionTSXItem key={`motionTSX-${animation.id}`} animation={animation} />
              ))}
            </div>
          )}
          {activeTab === 'css' && (
            <div className="grid grid-cols-3 gap-10 md:grid-cols-6">
              {cssAnimations.map(animation => (
                <CSSAnimationItem key={`css-${animation.id}`} animation={animation} />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default App;

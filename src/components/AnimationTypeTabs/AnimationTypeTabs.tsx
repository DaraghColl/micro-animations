import { motion } from 'framer-motion';
import type { AnimationVariant } from '@/models';

interface AnimationTypeTabsProps {
  activeTab: AnimationVariant;
  setActiveTab: (tab: AnimationVariant) => void;
}

const tabItems: Record<AnimationVariant, string> = {
  css: 'CSS',
  motionTS: 'Motion TS',
  motionTSX: 'Motion TSX',
};

const AnimationTypeTabs = (props: AnimationTypeTabsProps) => {
  const { activeTab, setActiveTab } = props;

  return (
    <div className="inline-flex rounded-lg bg-white p-1 dark:bg-neutral-900">
      {Object.entries(tabItems).map(([key, label]) => (
        <button
          key={key}
          className="relative w-32 cursor-pointer rounded-xl px-6 py-3 text-sm font-medium transition-all duration-200"
          onClick={() => setActiveTab(key as AnimationVariant)}
          onKeyDown={(event: { key: string }) =>
            event.key === 'Enter' ? setActiveTab(key as AnimationVariant) : null
          }
          tabIndex={0}
        >
          <div>{label}</div>
          {key === activeTab ? (
            <motion.div
              layoutId="indicator"
              className="absolute top-0 left-0 h-full w-32 rounded-lg border-2 border-indigo-500"
            ></motion.div>
          ) : null}
        </button>
      ))}
    </div>
  );
};

export { AnimationTypeTabs };

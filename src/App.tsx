import { useState } from 'react';
import type { AnimationVariant } from './models';
import { AnimationTypeTabs } from './components/AnimationTypeTabs/AnimationTypeTabs';
import { ThemeToggle } from './components/ThemeToggle/ThemeToggle';

function App() {
  const [activeTab, setActiveTab] = useState<AnimationVariant>('motionTS');
  return (
    <div className="mx-auto min-h-screen max-w-5xl p-8">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>
      {/* Header */}
      <div className="mt-5 mb-10 text-center">
        <h1 className="mb-10 text-center text-7xl">Micro Animations</h1>
        <p className="text-lg">
          A growing list of micro animations, based on{' '}
          <a href="https://lucide.dev/icons/" className="text-indigo-500" target="_blank">
            lucide icons
          </a>
        </p>
      </div>

      <div className="mb-10 flex justify-center">
        <AnimationTypeTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}

export default App;

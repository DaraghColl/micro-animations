import { animate } from 'motion';
import type { AnimationData } from '..';

const ID = 'toggle';

const toggleAnimation: AnimationData = {
  id: ID,
  title: 'Toggle Switch',
  html: /* HTML */ ` <svg
    id="${ID}"
    class="toggle"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <circle class="toggle__circle" cx="9" cy="12" r="3" />
    <rect width="20" height="14" x="2" y="5" rx="7" />
  </svg>`,
  animationScript: () => {
    const svgRoot = document.querySelector('#toggle');
    if (!svgRoot) return;
    const toggleCircle = svgRoot.querySelector('.toggle__circle');
    if (!toggleCircle) return;
    animate(toggleCircle, { translateX: ['0%', '100%', '0%'] }, { duration: 1, ease: 'easeInOut' });
  },
  runAnimation() {
    this.animationScript();
  },
};

export { toggleAnimation };

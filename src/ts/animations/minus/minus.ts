import { animate } from 'motion';
import type { AnimationData } from '..';

const ID = 'minus';

const minusAnimation: AnimationData = {
  id: ID,
  title: 'Minus',
  html: /* HTML */ ` <svg
    id="${ID}"
    class="minus"
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
    <path
      class="minus__container"
      d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
    />
    <line class="minus__line" x1="8" x2="16" y1="12" y2="12" />
  </svg>`,
  animationScript: () => {
    const svgRoot = document.querySelector('#minus');
    if (!svgRoot) return;
    const minusPath = svgRoot.querySelector('.minus__container');
    const minusLine = svgRoot.querySelector('.minus__line');
    if (!minusPath || !minusLine) return;
    animate(minusPath, { rotate: [0, -180] }, { duration: 1, ease: 'easeInOut' });
    animate(minusLine, { rotate: [0, 180] }, { duration: 1, ease: 'easeInOut' });
  },
  runAnimation() {
    this.animationScript();
  },
};

export { minusAnimation };

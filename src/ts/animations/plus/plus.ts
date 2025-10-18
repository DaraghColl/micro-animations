import { animate } from 'motion';
import type { AnimationData } from '..';

const ID = 'plus';

const plusAnimation: AnimationData = {
  id: ID,
  title: 'Plus',
  html: /* HTML */ ` <svg
    id="${ID}"
    class="plus"
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
      class="plus__container"
      d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
    />
    <line class="plus__line__1" x1="12" x2="12" y1="8" y2="16" />
    <line class="plus__line__2" x1="8" x2="16" y1="12" y2="12" />
  </svg>`,
  animationScript: () => {
    const svgRoot = document.querySelector('#plus');
    if (!svgRoot) return;
    const plusContainer = svgRoot.querySelector('.plus__container');
    const plusLine1 = svgRoot.querySelector('.plus__line__1');
    const plusLine2 = svgRoot.querySelector('.plus__line__2');
    if (!plusContainer || !plusLine1 || !plusLine2) return;
    animate(plusContainer, { rotate: [0, -180] }, { duration: 1, ease: 'easeInOut' });
    animate(plusLine1, { rotate: [0, 180] }, { duration: 1, ease: 'easeInOut' });
    animate(plusLine2, { rotate: [0, 180] }, { duration: 1, ease: 'easeInOut' });
  },
  runAnimation() {
    this.animationScript();
  },
};

export { plusAnimation };

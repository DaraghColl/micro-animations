import { animate } from 'motion';
import type { AnimationData } from '..';

const ID = 'orbit';

const orbitAnimation: AnimationData = {
  id: ID,
  title: 'Orbit',
  html: /* HTML */ ` <svg
    id="${ID}"
    class="orbit"
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
      <path d="M20.341 6.484A10 10 0 0 1 10.266 21.85" />
      <circle cx="19" cy="5" r="2" />
      <path d="M3.659 17.516A10 10 0 0 1 13.74 2.152" />
      <circle cx="5" cy="19" r="2" />
    <circle " cx="12" cy="12" r="3" />
  </svg>`,
  animationScript: () => {
    const svgRoot = document.querySelector('#orbit');
    if (!svgRoot) return;
    animate(svgRoot, { rotate: [0, 360], scale: [1, 1.05, 1] }, { duration: 1, ease: 'easeInOut' });
  },
  runAnimation() {
    this.animationScript();
  },
};

export { orbitAnimation };

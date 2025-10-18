import { animate } from 'motion';
import type { AnimationData } from '..';

const ID = 'atom';

const atomAnimation: AnimationData = {
  id: ID,
  title: 'Atom Spin',
  html: /* HTML */ ` <svg
    id="${ID}"
    class="atom"
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
    <circle class="atom__center" cx="12" cy="12" r="1" />
    <path
      class="atom__circle_1"
      d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"
    />
    <path
      class="atom__circle_2"
      d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"
    />
  </svg>`,
  animationScript: () => {
    const svgRoot = document.querySelector('#atom');
    if (!svgRoot) return;
    const atom__center = svgRoot.querySelector('.atom__center');
    const atom__circle_1 = svgRoot.querySelector('.atom__circle_1');
    const atom__circle_2 = svgRoot.querySelector('.atom__circle_2');
    if (!atom__center || !atom__circle_1 || !atom__circle_2) return;
    animate(atom__center, { opacity: [1, 0, 1, 0, 1] }, { duration: 1, ease: 'easeInOut' });
    animate(atom__circle_1, { rotate: [0, 180] }, { duration: 1, ease: 'easeInOut' });
    animate(atom__circle_2, { rotate: [0, -180] }, { duration: 1, ease: 'easeInOut' });
  },
  runAnimation() {
    this.animationScript();
  },
};

export { atomAnimation };

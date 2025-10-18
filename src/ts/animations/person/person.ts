import { animate } from 'motion';
import type { AnimationData } from '..';

const ID = 'person';

const personAnimation: AnimationData = {
  id: ID,
  title: 'person',
  html: /* HTML */ ` <svg
    id="${ID}"
    class="person"
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
    <g class="person__body">
      <path d="M18 20a6 6 0 0 0-12 0" />
      <circle cx="12" cy="10" r="4" />
    </g>
    <circle class="person__container" cx="12" cy="12" r="10" />
  </svg>`,
  animationScript: () => {
    const svgRoot = document.querySelector('#person');
    if (!svgRoot) return;
    const personBody = svgRoot.querySelector('.person__body');
    const personContainer = svgRoot.querySelector('.person__container');

    if (!personBody || !personContainer) return;

    const sequence: Parameters<typeof animate>[0] = [
      [personContainer, { pathLength: [0, 1] }, { at: 0 }],
      [personBody, { opacity: [0, 1] }, { at: 0.5 }],
    ];

    animate(sequence, { duration: 1, ease: 'easeOut' });
  },
  runAnimation() {
    this.animationScript();
  },
};

export { personAnimation };

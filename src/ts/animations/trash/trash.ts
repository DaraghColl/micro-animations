import { animate } from 'motion';
import type { AnimationData } from '..';

const ID = 'trash';

const trashAnimation: AnimationData = {
  id: ID,
  title: 'Trash Lid',
  html: /* HTML */ ` <svg
    id="${ID}"
    class="trash"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 -4 24 28"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M10 11v6" />
    <path d="M14 11v6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
    <g class="trash__lid">
      <path d="M3 6h18" />
      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </g>
  </svg>`,
  animationScript: () => {
    const svgRoot = document.querySelector('#trash');
    if (!svgRoot) return;
    const trashLid = svgRoot.querySelector('.trash__lid');
    if (!trashLid) return;
    animate(
      trashLid,
      { rotate: [0, 15, 0], translateY: [0, -2, 0] },
      { duration: 1, ease: 'easeInOut' }
    );
  },
  runAnimation() {
    this.animationScript();
  },
};

export { trashAnimation };

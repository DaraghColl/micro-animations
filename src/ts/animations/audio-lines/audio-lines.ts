import { animate, stagger } from 'motion';
import type { AnimationData } from '..';

const ID = 'audio-lines';

const audioLinesAnimation: AnimationData = {
  id: ID,
  title: 'Audio Lines',
  html: /* HTML */ ` <svg
    id="${ID}"
    class="audio-lines"
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
    <path class="audio-lines__line" d="M2 10v3" />
    <path class="audio-lines__line" d="M6 6v11" />
    <path class="audio-lines__line" d="M10 3v18" />
    <path class="audio-lines__line" d="M14 8v7" />
    <path class="audio-lines__line" d="M18 5v13" />
    <path class="audio-lines__line" d="M22 10v3" />
  </svg>`,
  animationScript: () => {
    const svgRoot = document.querySelector(`#${ID}`);
    if (!svgRoot) return;
    animate(`.audio-lines__line`, { scale: [1, 1.2, 1] }, { delay: stagger(0.1) });
  },
  runAnimation() {
    this.animationScript();
  },
};

export { audioLinesAnimation };

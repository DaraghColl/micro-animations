import { animate } from 'motion';
import type { AnimationData } from '..';

const ID = 'chart-line';

const chartLineAnimation: AnimationData = {
  id: ID,
  title: 'Line chart',
  html: /* HTML */ ` <svg
    id="${ID}"
    class="chart-line"
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
    <path d="M3 3v16a2 2 0 0 0 2 2h16" />
    <path class="chart-line__line" d="M5 19L8 15L11 17L14 11L17 13L19 5" />
  </svg>`,
  animationScript: () => {
    const svgRoot = document.querySelector(`#${ID}`);
    if (!svgRoot) return;
    const chartSplineLine = svgRoot.querySelector('.chart-line__line');
    if (!chartSplineLine) return;
    animate(chartSplineLine, { pathLength: [0, 1] }, { duration: 1 });
  },
  runAnimation() {
    this.animationScript();
  },
};

export { chartLineAnimation };

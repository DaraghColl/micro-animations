import { animate } from 'motion';
import type { AnimationData } from '..';

const ID = 'chart-spline';

const chartSplineAnimation: AnimationData = {
  id: ID,
  title: 'Spline chart',
  html: /* HTML */ ` <svg
    id="${ID}"
    class="chart-spline"
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
    <path class="chart-spline__line" d="M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7" />
  </svg>`,
  animationScript: () => {
    const svgRoot = document.querySelector(`#${ID}`);
    if (!svgRoot) return;
    const chartSplineLine = svgRoot.querySelector('.chart-spline__line');
    if (!chartSplineLine) return;
    animate(chartSplineLine, { pathLength: [0, 1] }, { duration: 1 });
  },
  runAnimation() {
    this.animationScript();
  },
};

export { chartSplineAnimation };

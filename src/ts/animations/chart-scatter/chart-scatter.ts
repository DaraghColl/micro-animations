import { animate, stagger } from 'motion';
import type { AnimationData } from '..';

const ID = 'chart-scatter';

const chartScatterAnimation: AnimationData = {
  id: ID,
  title: 'Scatter chart',
  html: /* HTML */ ` <svg
    id="${ID}"
    class="chart__scatter"
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
    <circle class="chart-scatter--circle" cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    <circle class="chart-scatter--circle" cx="18.5" cy="5.5" r=".5" fill="currentColor" />
    <circle class="chart-scatter--circle" cx="11.5" cy="11.5" r=".5" fill="currentColor" />
    <circle class="chart-scatter--circle" cx="7.5" cy="16.5" r=".5" fill="currentColor" />
    <circle class="chart-scatter--circle" cx="17.5" cy="14.5" r=".5" fill="currentColor" />
    <path d="M3 3v16a2 2 0 0 0 2 2h16" />
  </svg>`,
  animationScript: () => {
    const svgRoot = document.querySelector(`#${ID}`);
    if (!svgRoot) return;
    const chartScatterCircles = svgRoot.querySelectorAll('.chart-scatter--circle');
    if (!chartScatterCircles.length) return;
    animate(
      chartScatterCircles,
      { opacity: [0, 1] },
      { delay: stagger(0.1), duration: 1, ease: 'easeInOut' }
    );
  },
  runAnimation() {
    this.animationScript();
  },
};

export { chartScatterAnimation };

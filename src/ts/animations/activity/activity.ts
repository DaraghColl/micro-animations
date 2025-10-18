import { animate } from 'motion';
import type { AnimationData } from '..';

const ID = 'activity';

const activityAnimation: AnimationData = {
  id: ID,
  title: 'Activity Path',
  html: /* HTML */ ` <svg
    id="${ID}"
    class="activity"
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
      class="activity__path"
      d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
    />
  </svg>`,
  animationScript: () => {
    const svgRoot = document.querySelector('#activity');
    if (!svgRoot) return;
    const activityPath = svgRoot.querySelector('.activity__path');
    if (!activityPath) return;
    animate(activityPath, { pathLength: [0, 1] }, { duration: 1, repeatType: 'loop' });
  },
  runAnimation() {
    this.animationScript();
  },
};

export { activityAnimation };

import { animate } from 'motion';
import type { AnimationData } from '..';

const ID = 'wifi';

const wifiAnimation: AnimationData = {
  id: ID,
  title: 'Wifi Signal',
  html: /* HTML */ ` <svg
    id="${ID}"
    class="wifi"
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
    <path class="wifi__4" d="M2 8.82a15 15 0 0 1 20 0" />
    <path class="wifi__3" d="M5 12.859a10 10 0 0 1 14 0" />
    <path class="wifi__2" d="M8.5 16.429a5 5 0 0 1 7 0" />
    <path class="wifi__1" d="M12 20h.01" />
  </svg>`,
  animationScript: () => {
    const svgRoot = document.querySelector('#wifi');
    if (!svgRoot) return;
    const wifi1 = svgRoot.querySelector('.wifi__1');
    const wifi2 = svgRoot.querySelector('.wifi__2');
    const wifi3 = svgRoot.querySelector('.wifi__3');
    const wifi4 = svgRoot.querySelector('.wifi__4');
    if (!wifi1 || !wifi2 || !wifi3 || !wifi4) return;

    const sequence: Parameters<typeof animate>[0] = [
      [wifi1, { opacity: [0.2, 1] }, { at: 0 }],
      [wifi2, { opacity: [0.2, 1] }, { at: 0.25 }],
      [wifi3, { opacity: [0.2, 1] }, { at: 0.5 }],
      [wifi4, { opacity: [0.2, 1] }, { at: 0.75 }],
    ];

    animate(sequence, { duration: 1, ease: 'easeOut' });
  },
  runAnimation() {
    this.animationScript();
  },
};

export { wifiAnimation };

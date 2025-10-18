import { animate } from 'motion';
import type { AnimationData } from '..';

const ID = 'bubbles';

const bubblesAnimation: AnimationData = {
  id: ID,
  title: 'bubbles',
  html: /* HTML */ ` <svg
    id="${ID}"
    class="bubbles"
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
    <path class="bubbles__line" d="M7.2 14.8a2 2 0 0 1 2 2" />
    <circle class="bubbles__circle__2" cx="18.5" cy="8.5" r="3.5" />
    <circle class="bubbles__circle__1" cx="7.5" cy="16.5" r="5.5" />
    <circle class="bubbles__circle__3" cx="7.5" cy="4.5" r="2.5" />
  </svg>`,
  animationScript: () => {
    const svgRoot = document.querySelector('#bubbles');
    if (!svgRoot) return;
    const bubblesLine = svgRoot.querySelector('.bubbles__line');
    const bubblesCircle1 = svgRoot.querySelector('.bubbles__circle__1');
    const bubblesCircle2 = svgRoot.querySelector('.bubbles__circle__2');
    const bubblesCircle3 = svgRoot.querySelector('.bubbles__circle__3');
    if (!bubblesLine || !bubblesCircle1 || !bubblesCircle2 || !bubblesCircle3) return;
    const sequence: Parameters<typeof animate>[0] = [
      [bubblesCircle1, { opacity: [0, 1] }, { at: 0 }],
      [bubblesLine, { opacity: [0, 1] }, { at: 0 }],
      [bubblesCircle2, { opacity: [0, 1] }, { at: 0.5 }],
      [bubblesCircle3, { opacity: [0, 1] }, { at: 1 }],
    ];

    animate(sequence, { duration: 1, ease: 'easeOut' });
  },
  runAnimation() {
    this.animationScript();
  },
};

export { bubblesAnimation };

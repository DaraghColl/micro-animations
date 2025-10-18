import { animate, stagger } from 'motion';
import type { AnimationData } from '..';

const ID = 'keyboard';

const keyboardAnimation: AnimationData = {
  id: ID,
  title: 'Keyboard',
  html: /* HTML */ `<svg
    id="${ID}"
    class="keyboard"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-keyboard-music-icon lucide-keyboard-music"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="M6 8h4" />
    <path d="M14 8h.01" />
    <path d="M18 8h.01" />
    <path d="M2 12h20" />
    <path class="keyboard__key" d="M6 12v4" />
    <path class="keyboard__key" d="M10 12v4" />
    <path class="keyboard__key" d="M14 12v4" />
    <path class="keyboard__key" d="M18 12v4" />
  </svg>`,
  animationScript: () => {
    const svgRoot = document.querySelector('#keyboard');
    if (!svgRoot) return;
    animate(`.keyboard__key`, { opacity: [0, 1] }, { delay: stagger(0.1) });
  },
  runAnimation() {
    this.animationScript();
  },
};

export { keyboardAnimation };

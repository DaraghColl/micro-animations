import { animate } from 'motion';
interface AnimationData {
  id: string;
  title: string;
  html: string;
  animationScript: () => void;
  runAnimation: () => void;
}

const ID = 'check';

const checkAnimation: AnimationData = {
  id: ID,
  title: 'Check mark path',
  html: /* HTML */ ` <svg
    id="${ID}"
    class="check"
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
    <path class="check__circle" d="M21.801 10A10 10 0 1 1 17 3.335" />
    <path class="check__line" d="m9 11 3 3L22 4" />
  </svg>`,
  animationScript: () => {
    const svgRoot = document.querySelector('#check');
    if (!svgRoot) return;
    const checkCircle = svgRoot.querySelector('.check__circle');
    const checkLine = svgRoot.querySelector('.check__line');
    if (!checkCircle || !checkLine) return;

    const sequence: Parameters<typeof animate>[0] = [
      [checkCircle, { pathLength: [0, 1] }, { at: 0 }],
      [checkLine, { pathLength: [0, 1] }, { at: 0.25 }],
    ];

    animate(sequence, { duration: 1, ease: 'easeOut' });
  },
  runAnimation() {
    this.animationScript();
  },
};

export { checkAnimation };

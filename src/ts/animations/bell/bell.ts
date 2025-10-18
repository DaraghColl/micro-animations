import { animate } from 'motion';
interface AnimationData {
  id: string;
  title: string;
  html: string;
  animationScript: () => void;
  runAnimation: () => void;
}

const ID = 'bell';

const bellAnimation: AnimationData = {
  id: ID,
  title: 'Notification Bell Shake',
  html: /* HTML */ ` <svg
    id="${ID}"
    class="bell"
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
      class="bell__container"
      d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"
    />
    <path class="bell__ringer" d="M10.268 21a2 2 0 0 0 3.464 0" />
  </svg>`,
  animationScript: () => {
    const svgRoot = document.querySelector('#bell');
    if (!svgRoot) return;
    const bellContainer = svgRoot.querySelector('.bell__container');
    const bellRinger = svgRoot.querySelector('.bell__ringer');

    if (!bellContainer || !bellRinger) return;

    animate(
      bellContainer,
      { rotate: [0, -15, 15, -15, 15, 0] },
      { duration: 1, ease: 'easeInOut' }
    );
    animate(
      bellRinger,
      {
        rotate: [0, 15, -15, 15, -15, 0],
        translateX: [0, -3, 3, -3, 3, 0],
      },
      { duration: 1, ease: 'easeInOut' }
    );
  },
  runAnimation() {
    this.animationScript();
  },
};

export { bellAnimation };

import { useEffect } from 'react';
import { animate } from 'motion';
import { motion, useAnimate } from 'motion/react';
import type { AnimationData } from '@/models';

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
  css: /* CSS */ `
  @keyframes bell-shake-container {
	0%,
	100% {
		transform: rotate(0deg);
	}
	20% {
		transform: rotate(-15deg);
	}
	40% {
		transform: rotate(15deg);
	}
	60% {
		transform: rotate(-15deg);
	}
	80% {
		transform: rotate(15deg);
	}
}

@keyframes bell-shake-ringer {
	0%,
	100% {
		transform: rotate(0deg) translateX(0);
	}
	20% {
		transform: rotate(15deg) translateX(-3px);
	}
	40% {
		transform: rotate(-15deg) translateX(3px);
	}
	60% {
		transform: rotate(15deg) translateX(-3px);
	}
	80% {
		transform: rotate(-15deg) translateX(3px);
	}
}

.bell {
	overflow: visible;
}

.example-trigger-element.hover .bell__container {
	animation: bell-shake-container 1s ease-in-out;
	transform-origin: center center;
}

.example-trigger-element.hover .bell__ringer {
	animation: bell-shake-ringer 1s ease-in-out;
	transform-origin: center center;
}
  `,
  motionTS: () => {
    const svgRoot = document.querySelector('#bell-motion');
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
  motionTSX: (isHovered = false) => {
    const [scope, animate] = useAnimate();

    useEffect(() => {
      if (isHovered) {
        animate(
          scope.current.querySelector('.bell__container'),
          { rotate: [0, -15, 15, -15, 15, 0] },
          { duration: 1, ease: 'easeInOut' }
        );
        animate(
          scope.current.querySelector('.bell__ringer'),
          {
            rotate: [0, 15, -15, 15, -15, 0],
            translateX: [0, -3, 3, -3, 3, 0],
          },
          { duration: 1, ease: 'easeInOut' }
        );
      }
    }, [isHovered]);

    return (
      <svg
        ref={scope}
        id="bell"
        className="bell"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path
          className="bell__container"
          d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"
        />
        <motion.path className="bell__ringer" d="M10.268 21a2 2 0 0 0 3.464 0" />
      </svg>
    );
  },
};

export { bellAnimation };

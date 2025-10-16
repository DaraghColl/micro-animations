import './style.css';
import { animate, stagger } from 'motion';

import { animationsData } from './animations.ts';

const animationList = document.getElementById('animation-list');

if (animationList) {
  animationsData.forEach(animation => {
    const card = document.createElement('div');
    card.className = 'animation-card';
    card.dataset.id = animation.id;

    const animationItem = document.createElement('div');
    animationItem.className =
      'animation-item w-fit cursor-pointer rounded bg-white p-4 opacity-0 transition-shadow duration-300 hover:shadow-lg';
    animationItem.innerHTML = animation.html;

    animationItem.addEventListener('mouseenter', () => {
      animation.runAnimation();
    });

    card.appendChild(animationItem);
    animationList.appendChild(card);
  });
}

animate(
  '.animation-item',
  { y: [50, 0], opacity: 1 },
  {
    duration: 1,
    delay: stagger(0.1),
    type: 'spring',
    stiffness: 100,
    bounce: 1,
  }
);

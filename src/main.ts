import { animate, stagger } from 'motion';
import './style.css';
import { animationsData } from './animations.ts';

// setup animation examples
const animationList = document.getElementById('animation-list');

if (animationList) {
  animationsData.forEach(animation => {
    const button = document.createElement('button');
    button.className = 'animation-card';
    button.dataset.id = animation.id;
    button.ariaLabel = animation.title;

    const animationItem = document.createElement('div');
    animationItem.className =
      'animation-item w-fit cursor-pointer rounded bg-white p-4 opacity-0 transition-shadow duration-300 hover:shadow-lg';
    animationItem.innerHTML = animation.html;

    animationItem.addEventListener('mouseenter', () => {
      animation.runAnimation();
    });

    button.appendChild(animationItem);
    animationList.appendChild(button);
  });

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
}

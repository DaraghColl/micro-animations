import { animate, stagger } from 'motion';
import '../styles/style.css';
import { animationsData } from './animations/index.ts';
import { setupThemeToggle } from './theme-toggle.ts';

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
      'animation-item w-fit cursor-pointer rounded bg-neutral-200/50 dark:bg-neutral-950 dark:border-neutral-900 dark:border p-4 opacity-0 transition-shadow duration-300 hover:shadow-lg';
    animationItem.innerHTML = animation.html;

    animationItem.addEventListener('mouseenter', () => {
      animation.runAnimation();
    });

    button.appendChild(animationItem);
    animationList.appendChild(button);
  });

  // animate in the animation items
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

setupThemeToggle(document.querySelector<HTMLButtonElement>('#app')!);

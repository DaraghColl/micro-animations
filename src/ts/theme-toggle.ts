import { animate } from 'motion';

const moonIcon = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-moon-icon lucide-moon"
  >
    <path
      d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
    />
  </svg>
`;

const sunIcon = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-sun-icon lucide-sun"
  >
    <circle cx="12" cy="12" r="4"/>
    <path d="M12 2v2"/>
    <path d="M12 20v2"/>
    <path d="m4.93 4.93 1.41 1.41"/>
    <path d="m17.66 17.66 1.41 1.41"/>
    <path d="M2 12h2"/>
    <path d="M20 12h2"/>
    <path d="m6.34 17.66-1.41 1.41"/>
    <path d="m19.07 4.93-1.41 1.41"/>
  </svg>
`;

const createThemeToggleMarkup = (): string => {
  return /* HTML */ `
    <div class="flex justify-end">
      <button
        id="dark-mode-toggle"
        class="cursor-pointer rounded-full bg-neutral-200/50 p-3 dark:border dark:border-neutral-900 dark:bg-neutral-950"
        aria-label="Toggle dark mode"
      >
        ${moonIcon}
      </button>
    </div>
  `;
};

const animateToggleIcon = (darkModeToggle: HTMLElement, toDarkMode: boolean) => {
  const toIcon = toDarkMode ? moonIcon : sunIcon;

  animate(darkModeToggle, { rotateY: [0, 90, 0] }, { duration: 0.3, ease: 'easeInOut' });
  setTimeout(() => {
    darkModeToggle.innerHTML = toIcon;
  }, 100);
};

const toggleClassAndIcon = (htmlElement: HTMLElement, darkModeToggle: HTMLElement) => {
  if (htmlElement.classList.contains('dark')) {
    animateToggleIcon(darkModeToggle, false);
  } else {
    animateToggleIcon(darkModeToggle, true);
  }
};

const setupThemeToggle = (app: HTMLElement) => {
  if (!app) {
    throw new Error('Invalid app element provided');
  }

  app.insertAdjacentHTML('afterbegin', createThemeToggleMarkup());

  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const htmlElement = document.documentElement;

  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
      htmlElement.classList.toggle('dark');
      htmlElement.classList.toggle('light');

      toggleClassAndIcon(htmlElement, darkModeToggle);
    });

    toggleClassAndIcon(htmlElement, darkModeToggle);
  }
};

export { setupThemeToggle };

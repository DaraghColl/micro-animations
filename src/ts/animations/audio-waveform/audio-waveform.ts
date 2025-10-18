import { animate } from 'motion';
import type { AnimationData } from '..';

const ID = 'audio-waveform';

const audioWaveformAnimation: AnimationData = {
  id: ID,
  title: 'Audio Waveform',
  html: /* HTML */ ` <svg
    id="${ID}"
    class="audio-waveform"
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
      class="audio-waveform__path"
      d="M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2"
    />
  </svg>`,
  animationScript: () => {
    const svgRoot = document.querySelector(`#${ID}`);
    if (!svgRoot) return;
    const audioWaveformPath = svgRoot.querySelector('.audio-waveform__path');
    if (!audioWaveformPath) return;
    animate(audioWaveformPath, { pathLength: [0, 1] }, { duration: 1, repeatType: 'loop' });
  },
  runAnimation() {
    this.animationScript();
  },
};

export { audioWaveformAnimation };

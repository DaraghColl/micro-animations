import { bellAnimation } from './bell/bell';
import { checkAnimation } from './check/check';
import { toggleAnimation } from './toggle/toggle';
import { activityAnimation } from './activity/activity';
import { trashAnimation } from './trash/trash';
import { atomAnimation } from './atom/atom';
import { orbitAnimation } from './orbit/orbit';
import { rocketAnimation } from './rocket/rocket';
import { fanAnimation } from './fan/fan';
import { audioWaveformAnimation } from './audio-waveform/audio-waveform';
import { audioLinesAnimation } from './audio-lines/audio-lines';
import { keyboardAnimation } from './keyboard/keyboard';
import { minusAnimation } from './minus/minus';
import { plusAnimation } from './plus/plus';
import { brushAnimation } from './brush/brush';
import { chartLineAnimation } from './chart-line/chart-line';
import { chartSplineAnimation } from './chart-spline/chart-spline';
import { chartScatterAnimation } from './chart-scatter/chart-scatter';
import { bubblesAnimation } from './bubbles/bubbles';
import { personAnimation } from './person/person';
import { clipboardAnimation } from './clipboard/clipboard';
import { wifiAnimation } from './wifi/wifi';
import { bikeAnimation } from './bike/bike';

export interface AnimationData {
  id: string;
  title: string;
  html: string;
  animationScript: () => void;
  runAnimation: () => void;
}

export const animationsData: AnimationData[] = [
  bellAnimation,
  checkAnimation,
  toggleAnimation,
  activityAnimation,
  trashAnimation,
  atomAnimation,
  orbitAnimation,
  rocketAnimation,
  fanAnimation,
  audioWaveformAnimation,
  audioLinesAnimation,
  keyboardAnimation,
  minusAnimation,
  plusAnimation,
  brushAnimation,
  chartLineAnimation,
  chartSplineAnimation,
  chartScatterAnimation,
  bubblesAnimation,
  personAnimation,
  clipboardAnimation,
  wifiAnimation,
  bikeAnimation,
];

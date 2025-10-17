import { animate, stagger } from 'motion';

export interface AnimationData {
  id: string;
  title: string;
  html: string;
  animationScript: () => void;
  runAnimation: () => void;
}
export const animationsData: AnimationData[] = [
  // bell
  {
    id: 'bell',
    title: 'Notification Bell Shake',
    html: /* HTML */ ` <svg
      id="bell"
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
  },
  // check
  {
    id: 'check',
    title: 'Check mark path',
    html: /* HTML */ ` <svg
      id="check"
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
  },
  // toggle
  {
    id: 'toggle',
    title: 'Toggle Switch',
    html: /* HTML */ ` <svg
      id="toggle"
      class="toggle"
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
      <circle class="toggle__circle" cx="9" cy="12" r="3" />
      <rect width="20" height="14" x="2" y="5" rx="7" />
    </svg>`,
    animationScript: () => {
      const svgRoot = document.querySelector('#toggle');
      if (!svgRoot) return;
      const toggleCircle = svgRoot.querySelector('.toggle__circle');
      if (!toggleCircle) return;
      animate(
        toggleCircle,
        { translateX: ['0%', '100%', '0%'] },
        { duration: 1, ease: 'easeInOut' }
      );
    },
    runAnimation() {
      this.animationScript();
    },
  },
  // activity
  {
    id: 'activity',
    title: 'Activity Path',
    html: /* HTML */ ` <svg
      id="activity"
      class="activity"
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
        class="activity__path"
        d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
      />
    </svg>`,
    animationScript: () => {
      const svgRoot = document.querySelector('#activity');
      if (!svgRoot) return;
      const activityPath = svgRoot.querySelector('.activity__path');
      if (!activityPath) return;
      animate(activityPath, { pathLength: [1, 0, 1] }, { duration: 1, repeatType: 'loop' });
    },
    runAnimation() {
      this.animationScript();
    },
  },
  // trash
  {
    id: 'trash',
    title: 'Trash Lid',
    html: /* HTML */ ` <svg
      id="trash"
      class="trash"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 -4 24 28"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M10 11v6" />
      <path d="M14 11v6" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
      <g class="trash__lid">
        <path d="M3 6h18" />
        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </g>
    </svg>`,
    animationScript: () => {
      const svgRoot = document.querySelector('#trash');
      if (!svgRoot) return;
      const trashLid = svgRoot.querySelector('.trash__lid');
      if (!trashLid) return;
      animate(
        trashLid,
        { rotate: [0, 15, 0], translateY: [0, -2, 0] },
        { duration: 1, ease: 'easeInOut' }
      );
    },
    runAnimation() {
      this.animationScript();
    },
  },
  // atom
  {
    id: 'atom',
    title: 'Atom Spin',
    html: /* HTML */ ` <svg
      id="atom"
      class="atom"
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
      <circle class="atom__center" cx="12" cy="12" r="1" />
      <path
        class="atom__circle_1"
        d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"
      />
      <path
        class="atom__circle_2"
        d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"
      />
    </svg>`,
    animationScript: () => {
      const svgRoot = document.querySelector('#atom');
      if (!svgRoot) return;
      const atom__center = svgRoot.querySelector('.atom__center');
      const atom__circle_1 = svgRoot.querySelector('.atom__circle_1');
      const atom__circle_2 = svgRoot.querySelector('.atom__circle_2');
      if (!atom__center || !atom__circle_1 || !atom__circle_2) return;
      animate(atom__center, { opacity: [1, 0, 1, 0, 1] }, { duration: 1, ease: 'easeInOut' });
      animate(atom__circle_1, { rotate: [0, 180] }, { duration: 1, ease: 'easeInOut' });
      animate(atom__circle_2, { rotate: [0, -180] }, { duration: 1, ease: 'easeInOut' });
    },
    runAnimation() {
      this.animationScript();
    },
  },
  // orbit
  {
    id: 'orbit',
    title: 'Orbit',
    html: /* HTML */ ` <svg
      id="orbit"
      class="orbit"
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
        <path d="M20.341 6.484A10 10 0 0 1 10.266 21.85" />
        <circle cx="19" cy="5" r="2" />
        <path d="M3.659 17.516A10 10 0 0 1 13.74 2.152" />
        <circle cx="5" cy="19" r="2" />
      <circle " cx="12" cy="12" r="3" />
    </svg>`,
    animationScript: () => {
      const svgRoot = document.querySelector('#orbit');
      if (!svgRoot) return;
      animate(
        svgRoot,
        { rotate: [0, 360], scale: [1, 1.05, 1] },
        { duration: 1, ease: 'easeInOut' }
      );
    },
    runAnimation() {
      this.animationScript();
    },
  },
  // rocket
  {
    id: 'rocket',
    title: 'Rocket',
    html: /* HTML */ ` <svg
      id="rocket"
      class="rocket"
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
        class="rocket__fire"
        d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
      />
      <path
        d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
      />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>`,
    animationScript: () => {
      const svgRoot = document.querySelector('#rocket');
      if (!svgRoot) return;
      const rocketFire = svgRoot.querySelector('.rocket__fire');
      if (!rocketFire) return;

      animate(
        svgRoot,
        { rotate: [1, 5, -5, 5, -5, 1], y: [0, -2, 0] },
        { duration: 1, ease: 'easeInOut' }
      );

      animate(rocketFire, { scaleY: [1, 1.2, 1] }, { duration: 1, ease: 'easeInOut' });
    },
    runAnimation() {
      this.animationScript();
    },
  },
  // fan
  {
    id: 'fan',
    title: 'Fan Blades',
    html: /* HTML */ ` <svg
      id="fan"
      class="fan"
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
        class="fan__blades"
        d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"
      />
      <path d="M12 12v.01" />
    </svg>`,
    animationScript: () => {
      const svgRoot = document.querySelector('#fan');
      if (!svgRoot) return;
      const fanBlades = svgRoot.querySelector('.fan__blades');
      if (!fanBlades) return;
      animate(fanBlades, { rotate: [0, 360] }, { duration: 1, ease: 'easeInOut' });
    },
    runAnimation() {
      this.animationScript();
    },
  },
  // minus
  {
    id: 'minus',
    title: 'Minus',
    html: /* HTML */ ` <svg
      id="minus"
      class="minus"
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
        class="minus__container"
        d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
      />
      <line class="minus__line" x1="8" x2="16" y1="12" y2="12" />
    </svg>`,
    animationScript: () => {
      const svgRoot = document.querySelector('#minus');
      if (!svgRoot) return;
      const minusPath = svgRoot.querySelector('.minus__container');
      const minusLine = svgRoot.querySelector('.minus__line');
      if (!minusPath || !minusLine) return;
      animate(minusPath, { rotate: [0, -180] }, { duration: 1, ease: 'easeInOut' });
      animate(minusLine, { rotate: [0, 180] }, { duration: 1, ease: 'easeInOut' });
    },
    runAnimation() {
      this.animationScript();
    },
  },
  // plus
  {
    id: 'plus',
    title: 'Plus',
    html: /* HTML */ ` <svg
      id="plus"
      class="plus"
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
        class="plus__container"
        d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
      />
      <line class="plus__line__1" x1="12" x2="12" y1="8" y2="16" />
      <line class="plus__line__2" x1="8" x2="16" y1="12" y2="12" />
    </svg>`,
    animationScript: () => {
      const svgRoot = document.querySelector('#plus');
      if (!svgRoot) return;
      const plusContainer = svgRoot.querySelector('.plus__container');
      const plusLine1 = svgRoot.querySelector('.plus__line__1');
      const plusLine2 = svgRoot.querySelector('.plus__line__2');
      if (!plusContainer || !plusLine1 || !plusLine2) return;
      animate(plusContainer, { rotate: [0, -180] }, { duration: 1, ease: 'easeInOut' });
      animate(plusLine1, { rotate: [0, 180] }, { duration: 1, ease: 'easeInOut' });
      animate(plusLine2, { rotate: [0, 180] }, { duration: 1, ease: 'easeInOut' });
    },
    runAnimation() {
      this.animationScript();
    },
  },
  // brush
  {
    id: 'brush',
    title: 'brush',
    html: /* HTML */ ` <svg
      id="brush"
      class="brush"
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
      <path d="m16 22-1-4" />
      <path
        d="M19 13.99a1 1 0 0 0 1-1V12a2 2 0 0 0-2-2h-3a1 1 0 0 1-1-1V4a2 2 0 0 0-4 0v5a1 1 0 0 1-1 1H6a2 2 0 0 0-2 2v.99a1 1 0 0 0 1 1"
      />
      <path d="M5 14h14l1.973 6.767A1 1 0 0 1 20 22H4a1 1 0 0 1-.973-1.233z" />
      <path d="m8 22 1-4" />
    </svg>`,
    animationScript: () => {
      const svgRoot = document.querySelector('#brush');
      if (!svgRoot) return;
      animate(svgRoot, { rotate: [0, -15, 15, -15, 15, 0] }, { duration: 1, ease: 'easeInOut' });
    },
    runAnimation() {
      this.animationScript();
    },
  },
  // chart line
  {
    id: 'chart-line',
    title: 'Line chart',
    html: /* HTML */ ` <svg
      id="chart_line"
      class="chart-line"
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
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <path class="chart-line__line" d="M5 19L8 15L11 17L14 11L17 13L19 5" />
    </svg>`,
    animationScript: () => {
      const svgRoot = document.querySelector('#chart_line');
      if (!svgRoot) return;
      const chartSplineLine = svgRoot.querySelector('.chart-line__line');
      if (!chartSplineLine) return;
      animate(chartSplineLine, { pathLength: [0, 1] }, { duration: 1 });
    },
    runAnimation() {
      this.animationScript();
    },
  },
  // chart spline
  {
    id: 'chart-spline',
    title: 'Spline chart',
    html: /* HTML */ ` <svg
      id="chart_spline"
      class="chart-spline"
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
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <path class="chart-spline__line" d="M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7" />
    </svg>`,
    animationScript: () => {
      const svgRoot = document.querySelector('#chart_spline');
      if (!svgRoot) return;
      const chartSplineLine = svgRoot.querySelector('.chart-spline__line');
      if (!chartSplineLine) return;
      animate(chartSplineLine, { pathLength: [0, 1] }, { duration: 1 });
    },
    runAnimation() {
      this.animationScript();
    },
  },
  // chart scatter
  {
    id: 'chart-scatter',
    title: 'Scatter chart',
    html: /* HTML */ ` <svg
      id="chart_scatter"
      class="chart__scatter"
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
      <circle class="chart-scatter--circle" cx="7.5" cy="7.5" r=".5" fill="currentColor" />
      <circle class="chart-scatter--circle" cx="18.5" cy="5.5" r=".5" fill="currentColor" />
      <circle class="chart-scatter--circle" cx="11.5" cy="11.5" r=".5" fill="currentColor" />
      <circle class="chart-scatter--circle" cx="7.5" cy="16.5" r=".5" fill="currentColor" />
      <circle class="chart-scatter--circle" cx="17.5" cy="14.5" r=".5" fill="currentColor" />
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
    </svg>`,
    animationScript: () => {
      const svgRoot = document.querySelector('#chart_scatter');
      if (!svgRoot) return;
      const chartScatterCircles = svgRoot.querySelectorAll('.chart-scatter--circle');
      if (!chartScatterCircles.length) return;
      animate(
        chartScatterCircles,
        { opacity: [0, 1] },
        { delay: stagger(0.1), duration: 1, ease: 'easeInOut' }
      );
    },
    runAnimation() {
      this.animationScript();
    },
  },
  // bubbles
  {
    id: 'bubbles',
    title: 'bubbles',
    html: /* HTML */ ` <svg
      id="bubbles"
      class="bubbles"
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
      <path class="bubbles__line" d="M7.2 14.8a2 2 0 0 1 2 2" />
      <circle class="bubbles__circle__2" cx="18.5" cy="8.5" r="3.5" />
      <circle class="bubbles__circle__1" cx="7.5" cy="16.5" r="5.5" />
      <circle class="bubbles__circle__3" cx="7.5" cy="4.5" r="2.5" />
    </svg>`,
    animationScript: () => {
      const svgRoot = document.querySelector('#bubbles');
      if (!svgRoot) return;
      const bubblesLine = svgRoot.querySelector('.bubbles__line');
      const bubblesCircle1 = svgRoot.querySelector('.bubbles__circle__1');
      const bubblesCircle2 = svgRoot.querySelector('.bubbles__circle__2');
      const bubblesCircle3 = svgRoot.querySelector('.bubbles__circle__3');
      if (!bubblesLine || !bubblesCircle1 || !bubblesCircle2 || !bubblesCircle3) return;
      const sequence: Parameters<typeof animate>[0] = [
        [bubblesCircle1, { opacity: [0, 1] }, { at: 0 }],
        [bubblesLine, { opacity: [0, 1] }, { at: 0 }],
        [bubblesCircle2, { opacity: [0, 1] }, { at: 0.5 }],
        [bubblesCircle3, { opacity: [0, 1] }, { at: 1 }],
      ];

      animate(sequence, { duration: 1, ease: 'easeOut' });
    },
    runAnimation() {
      this.animationScript();
    },
  },
  // person
  {
    id: 'person',
    title: 'person',
    html: /* HTML */ ` <svg
      id="person"
      class="person"
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
      <g class="person__body">
        <path d="M18 20a6 6 0 0 0-12 0" />
        <circle cx="12" cy="10" r="4" />
      </g>
      <circle class="person__container" cx="12" cy="12" r="10" />
    </svg>`,
    animationScript: () => {
      const svgRoot = document.querySelector('#person');
      if (!svgRoot) return;
      const personBody = svgRoot.querySelector('.person__body');
      const personContainer = svgRoot.querySelector('.person__container');

      if (!personBody || !personContainer) return;

      const sequence: Parameters<typeof animate>[0] = [
        [personContainer, { pathLength: [0, 1] }, { at: 0 }],
        [personBody, { opacity: [0, 1] }, { at: 0.5 }],
      ];

      animate(sequence, { duration: 1, ease: 'easeOut' });
    },
    runAnimation() {
      this.animationScript();
    },
  },
  // clipboard
  {
    id: 'clipboard',
    title: 'clipboard',
    html: /* HTML */ ` <svg
      id="clipboard"
      class="clipboard"
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
      <rect width="8" height="4" x="8" y="2" rx="1" />
      <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5" />
      <path d="M16 4h2a2 2 0 0 1 1.73 1" />
      <path class="clipboard__note" d="M8 18h1" />
      <path
        class="clipboard__pen"
        d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
      />
    </svg>`,
    animationScript: () => {
      const svgRoot = document.querySelector('#clipboard');
      if (!svgRoot) return;
      const clipboardPen = svgRoot.querySelector('.clipboard__pen');
      const clipboardNote = svgRoot.querySelector('.clipboard__note');

      if (!clipboardPen || !clipboardNote) return;

      const sequence: Parameters<typeof animate>[0] = [
        [clipboardPen, { rotate: [-15, 15, -15, 15] }, { at: 0 }],
        [clipboardNote, { opacity: [0, 1] }, { at: 0.1 }],
      ];

      animate(sequence, { duration: 1, ease: 'easeOut' });
    },
    runAnimation() {
      this.animationScript();
    },
  },
  // wifi
  {
    id: 'wifi',
    title: 'Wifi Signal',
    html: /* HTML */ ` <svg
      id="wifi"
      class="wifi"
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
      <path class="wifi__4" d="M2 8.82a15 15 0 0 1 20 0" />
      <path class="wifi__3" d="M5 12.859a10 10 0 0 1 14 0" />
      <path class="wifi__2" d="M8.5 16.429a5 5 0 0 1 7 0" />
      <path class="wifi__1" d="M12 20h.01" />
    </svg>`,
    animationScript: () => {
      const svgRoot = document.querySelector('#wifi');
      if (!svgRoot) return;
      const wifi1 = svgRoot.querySelector('.wifi__1');
      const wifi2 = svgRoot.querySelector('.wifi__2');
      const wifi3 = svgRoot.querySelector('.wifi__3');
      const wifi4 = svgRoot.querySelector('.wifi__4');
      if (!wifi1 || !wifi2 || !wifi3 || !wifi4) return;

      const sequence: Parameters<typeof animate>[0] = [
        [wifi1, { opacity: [0.2, 1] }, { at: 0 }],
        [wifi2, { opacity: [0.2, 1] }, { at: 0.25 }],
        [wifi3, { opacity: [0.2, 1] }, { at: 0.5 }],
        [wifi4, { opacity: [0.2, 1] }, { at: 0.75 }],
      ];

      animate(sequence, { duration: 1, ease: 'easeOut' });
    },
    runAnimation() {
      this.animationScript();
    },
  },
  // bike
  {
    id: 'bike',
    title: 'Bike Rotate',
    html: /* HTML */ ` <svg
      id="bike"
      class="bike"
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
      <circle class="bike__wheel__1" cx="18.5" cy="17.5" r="3.5" />
      <circle class="bike__wheel__2" cx="5.5" cy="17.5" r="3.5" />
      <circle class="bike__center" cx="15" cy="5" r="1" />
      <path class="bike__frame" d="M12 17.5V14l-3-3 4-3 2 3h2" />
    </svg>`,
    animationScript: () => {
      const svgRoot = document.querySelector('#bike');
      if (!svgRoot) return;
      animate(svgRoot, { rotate: [0, -45, -45, -45, 0] }, { duration: 1, ease: 'easeInOut' });
    },
    runAnimation() {
      this.animationScript();
    },
  },
];

import { bellAnimation } from './bell';

const motionTSAnimations = [
  {
    id: bellAnimation.id,
    title: bellAnimation.title,
    html: bellAnimation.html,
    motionTS: bellAnimation.motionTS,
  },
];

const motionTSXAnimations = [
  {
    id: bellAnimation.id,
    title: bellAnimation.title,
    motionTSX: bellAnimation.motionTSX,
  },
];

const cssAnimations = [
  {
    id: bellAnimation.id,
    title: bellAnimation.title,
    html: bellAnimation.html,
    css: bellAnimation.css,
  },
];

export { motionTSAnimations, motionTSXAnimations, cssAnimations };
export type CSSAnimation = (typeof cssAnimations)[0];
export type MotionTSAnimation = (typeof motionTSAnimations)[0];
export type MotionTSXAnimation = (typeof motionTSXAnimations)[0];

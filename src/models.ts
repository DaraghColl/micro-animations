import type { JSX } from 'react';

export interface AnimationData {
  id: string;
  title: string;
  html: string;
  css?: string;
  motionTS: () => void;
  motionTSX: (isHovered?: boolean) => JSX.Element;
}

type AnimationVariant = 'css' | 'motionTS' | 'motionTSX';

export type { AnimationVariant };

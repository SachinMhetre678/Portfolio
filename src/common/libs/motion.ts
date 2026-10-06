import { CSSProperties } from 'react';

// Staggered reveal: `reveal` plays the entrance, `step(i)` sets the position in the sequence.
export const reveal = 'stagger motion-safe:animate-reveal';
export const step = (i: number) => ({ '--i': i } as CSSProperties);

// For elements that also lift on hover: no fill after the animation, so it can't pin `transform`.
export const revealCard = `${reveal} ![animation-fill-mode:backwards]`;

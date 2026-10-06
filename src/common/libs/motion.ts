import { CSSProperties } from 'react';

// Staggered reveal: `reveal` plays the entrance, `step(i)` sets the position in the sequence.
export const reveal = 'stagger motion-safe:animate-reveal';
export const step = (i: number) => ({ '--i': i } as CSSProperties);

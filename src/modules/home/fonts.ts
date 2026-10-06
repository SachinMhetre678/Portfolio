import { Caveat } from 'next/font/google';
import localFont from 'next/font/local';

// True Geist italic for the hero headline (geist only exports the upright face).
export const geistItalic = localFont({
  src: '../../../node_modules/geist/dist/fonts/geist-sans/Geist-Italic[wght].woff2',
  weight: '100 900',
  style: 'italic',
  display: 'swap',
});

// Handwritten annotation on the hero mockup. Self-hosted by next/font at build time.
export const caveat = Caveat({
  subsets: ['latin'],
  weight: ['500'],
  display: 'swap',
});

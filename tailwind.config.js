// Tokens are defined in src/common/styles/globals.css (see docs/DESIGN_SYSTEM.md).
const plugin = require('tailwindcss/plugin');

const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      colors: {
        canvas: token('canvas'),
        'surface-1': token('surface-1'),
        'surface-2': token('surface-2'),
        'surface-3': token('surface-3'),
        hairline: token('hairline'),
        'hairline-strong': token('hairline-strong'),
        ink: token('ink'),
        'ink-muted': token('ink-muted'),
        'ink-subtle': token('ink-subtle'),
        'ink-disabled': token('ink-disabled'),
        accent: token('accent'),
        'accent-hover': token('accent-hover'),
        'on-accent': token('on-accent'),
        'accent-soft': 'var(--accent-soft)',
      },
      fontSize: {
        display: [
          '3rem',
          { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '600' },
        ],
        'display-mobile': [
          '2.25rem',
          { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '600' },
        ],
        h1: [
          '2.25rem',
          { lineHeight: '1.15', letterSpacing: '-0.025em', fontWeight: '600' },
        ],
        'h1-mobile': [
          '1.875rem',
          { lineHeight: '1.15', letterSpacing: '-0.025em', fontWeight: '600' },
        ],
        h2: [
          '1.5rem',
          { lineHeight: '1.25', letterSpacing: '-0.02em', fontWeight: '600' },
        ],
        h3: [
          '1.125rem',
          { lineHeight: '1.35', letterSpacing: '-0.01em', fontWeight: '500' },
        ],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        body: ['1rem', { lineHeight: '1.65' }],
        'body-sm': ['0.875rem', { lineHeight: '1.55' }],
        caption: ['0.8125rem', { lineHeight: '1.4' }],
        mono: ['0.8125rem', { lineHeight: '1.5' }],
      },
      borderRadius: {
        chip: '6px',
        control: '8px',
        card: '12px',
      },
      maxWidth: {
        prose: '65ch',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.16, 1, 0.3, 1)',
        out: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      zIndex: {
        header: '30',
        drawer: '50',
        'skip-link': '60',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '15%': { transform: 'rotate(14deg)' },
          '30%': { transform: 'rotate(-8deg)' },
          '45%': { transform: 'rotate(14deg)' },
          '60%': { transform: 'rotate(-4deg)' },
          '75%': { transform: 'rotate(10deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        'wave-once': 'wave 1.2s ease-in-out 0.3s 1',
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('pointer-coarse', '@media (pointer: coarse)');
    }),
  ],
};

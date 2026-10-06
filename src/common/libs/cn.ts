import clsx, { ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

// Register the custom type scale so tailwind-merge doesn't treat e.g. `text-body-sm`
// as a text color and drop it next to `text-ink-muted`.
const twMerge = extendTailwindMerge({
  classGroups: {
    'font-size': [
      {
        text: [
          'display',
          'display-mobile',
          'h1',
          'h1-mobile',
          'h2',
          'h3',
          'body-lg',
          'body',
          'body-sm',
          'caption',
          'mono',
        ],
      },
    ],
  },
});

export default function cn(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}

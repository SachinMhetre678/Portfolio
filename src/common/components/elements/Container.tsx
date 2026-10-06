import { HTMLAttributes } from 'react';

import cn from '@/common/libs/cn';

// Page body below the floating nav: same max width and gutters as the home sections.
const Container = ({ className, ...rest }: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'mx-auto max-w-7xl space-y-16 px-4 pb-16 pt-28 md:space-y-24 md:px-8 md:pb-24 md:pt-36',
      className
    )}
    {...rest}
  />
);

export default Container;

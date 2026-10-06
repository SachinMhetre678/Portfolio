import { HTMLAttributes } from 'react';

import cn from '@/common/libs/cn';

const Container = ({ className, ...rest }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('space-y-12 md:space-y-16', className)} {...rest} />
);

export default Container;

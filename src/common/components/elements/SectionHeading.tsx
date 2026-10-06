import { ReactNode } from 'react';

import cn from '@/common/libs/cn';

interface SectionHeadingProps {
  title: string;
  id?: string;
  action?: ReactNode;
  className?: string;
}

const SectionHeading = ({
  title,
  id,
  action,
  className,
}: SectionHeadingProps) => (
  <div
    className={cn('mb-6 flex items-baseline justify-between gap-4', className)}
  >
    <h2 id={id} className='text-h2'>
      {title}
    </h2>
    {action}
  </div>
);

export default SectionHeading;

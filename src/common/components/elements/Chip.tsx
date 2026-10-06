import { ReactNode } from 'react';

import cn from '@/common/libs/cn';

interface ChipProps {
  children: ReactNode;
  className?: string;
}

const Chip = ({ children, className }: ChipProps) => (
  <span
    className={cn(
      'inline-flex items-center rounded-chip bg-surface-2 px-[10px] py-1 font-mono text-mono text-ink-muted transition-colors duration-150',
      className
    )}
  >
    {children}
  </span>
);

export const ChipList = ({
  items,
  chipClassName,
}: {
  items: string[];
  chipClassName?: string;
}) => (
  <ul className='flex flex-wrap gap-2'>
    {items.map((item) => (
      <li key={item}>
        <Chip className={chipClassName}>{item}</Chip>
      </li>
    ))}
  </ul>
);

export default Chip;

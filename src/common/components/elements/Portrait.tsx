import { ReactNode } from 'react';

import Image from '@/common/components/elements/Image';
import cn from '@/common/libs/cn';

interface PortraitProps {
  className?: string;
  priority?: boolean;
  sizes: string;
  children?: ReactNode;
}

// Arch-framed portrait with emerald glow and a slight tilt. The photo is square, so it is
// zoomed (scale + origin) to head and shoulders; object-position keeps the head near the top.
const Portrait = ({ className, priority, sizes, children }: PortraitProps) => (
  <div className={cn('relative mx-auto w-full', className)}>
    <div
      aria-hidden
      className='absolute -inset-6 -z-10 rounded-full bg-accent/20 blur-3xl'
    />
    <div className='rotate-3 overflow-hidden rounded-[999px_999px_32px_32px] border border-accent/40 bg-surface-1 p-[3%] shadow-[0_0_0_6px_var(--accent-soft),0_30px_70px_-30px_rgb(0_0_0/0.5)]'>
      <div className='relative aspect-[4/5] overflow-hidden rounded-[999px_999px_24px_24px]'>
        <Image
          src='/images/sachin-portrait.jpg'
          alt='Sachin Mhetre'
          fill
          priority={priority}
          sizes={sizes}
          quality={85}
          className='origin-[50%_15%] scale-[1.6] object-cover object-[50%_15%]'
        />
      </div>
    </div>
    {children}
  </div>
);

export default Portrait;

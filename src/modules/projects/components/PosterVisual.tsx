'use client';

import { useRef } from 'react';

import Image from '@/common/components/elements/Image';
import cn from '@/common/libs/cn';

interface PosterVisualProps {
  src: string;
  alt: string;
  className?: string;
  // Tailwind object-position class for the cropped card view.
  position?: string;
}

// Cropped poster that opens full size in a native modal <dialog>:
// the browser handles Esc, focus trapping and inerting the page behind it.
const PosterVisual = ({
  src,
  alt,
  className,
  position = 'object-[50%_40%]',
}: PosterVisualProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  return (
    <>
      <button
        type='button'
        onClick={() => dialogRef.current?.showModal()}
        aria-haspopup='dialog'
        aria-label='View the full project poster'
        className={cn(
          'relative block w-full cursor-zoom-in overflow-hidden bg-surface-2 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent',
          className
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes='(min-width: 768px) 60vw, 100vw'
          className={cn(
            'rounded-[inherit] border border-hairline object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.03]',
            position
          )}
        />
        <span className='absolute bottom-3 left-3 rounded-full border border-hairline bg-surface-1/80 px-2 py-0.5 text-[11px] leading-4 text-ink-muted backdrop-blur'>
          Project poster
        </span>
      </button>
      <dialog
        ref={dialogRef}
        aria-label='Project poster'
        onClick={(e) => e.target === e.currentTarget && e.currentTarget.close()}
        className='m-auto w-[min(96vw,1200px)] max-w-none overflow-visible rounded-2xl border border-hairline bg-surface-1 p-2 backdrop:bg-black/80'
      >
        <Image
          src={src}
          alt={alt}
          width={1536}
          height={1024}
          sizes='96vw'
          className='h-auto max-h-[80vh] w-full rounded-xl object-contain'
        />
        <button
          type='button'
          autoFocus
          onClick={() => dialogRef.current?.close()}
          className='mt-2 w-full rounded-full border border-hairline px-4 py-2 text-body-sm text-ink hover:border-hairline-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent'
        >
          Close
        </button>
      </dialog>
    </>
  );
};

export default PosterVisual;

import { ReactNode } from 'react';

import cn from '@/common/libs/cn';

export type Chip = 'projects' | 'about' | 'contact' | 'copy';

interface BubbleProps {
  /** A one-line comment from Strobi. */
  text: string | null;
  /** The quick menu: its "Where to?" line, or null when closed. */
  menu: string | null;
  muted: boolean;
  onChip: (chip: Chip) => void;
  onToggleMute: () => void;
}

const CHIPS: { id: Chip; label: string }[] = [
  { id: 'projects', label: 'See projects' },
  { id: 'about', label: 'About me' },
  { id: 'contact', label: 'Get in touch' },
  { id: 'copy', label: 'Copy email' },
];

const Pill = ({
  children,
  onClick,
  subtle,
  label,
}: {
  children: ReactNode;
  onClick: () => void;
  subtle?: boolean;
  label?: string;
}) => (
  <button
    type='button'
    onClick={onClick}
    aria-label={label}
    className={cn(
      'inline-flex h-9 items-center rounded-full px-3.5 text-body-sm font-medium transition-colors duration-150',
      subtle
        ? 'text-ink-muted underline underline-offset-2 hover:text-ink'
        : 'border border-hairline-strong bg-surface-1 text-ink hover:bg-surface-2'
    )}
  >
    {children}
  </button>
);

const Bubble = ({ text, menu, muted, onChip, onToggleMute }: BubbleProps) => {
  if (text === null && menu === null) return null;

  return (
    <div className='pointer-events-auto absolute bottom-full right-0 mb-3 w-[min(20rem,calc(100vw-2rem))] rounded-[20px] border border-hairline-strong bg-surface-1 p-4 text-body-sm text-ink shadow-[0_16px_40px_-16px_rgb(0_0_0/0.5)]'>
      <span
        aria-hidden
        className='absolute -bottom-1.5 right-8 h-3 w-3 rotate-45 border-b border-r border-hairline-strong bg-surface-1'
      />
      {menu !== null ? (
        <>
          <p>{menu}</p>
          <div className='mt-3 flex flex-wrap gap-2'>
            {CHIPS.map(({ id, label }) => (
              <Pill key={id} onClick={() => onChip(id)}>
                {label}
              </Pill>
            ))}
          </div>
          <div className='mt-1 flex justify-end'>
            <Pill
              subtle
              onClick={onToggleMute}
              label={
                muted
                  ? 'Unmute Strobi’s automatic bubbles'
                  : 'Mute Strobi’s automatic bubbles'
              }
            >
              {muted ? 'Unmute' : 'Shh'}
            </Pill>
          </div>
        </>
      ) : (
        <p>{text}</p>
      )}
    </div>
  );
};

export default Bubble;

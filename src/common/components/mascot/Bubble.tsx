import { ReactNode } from 'react';

import cn from '@/common/libs/cn';

import { GREETING, TOUR, View } from './tour';

interface BubbleProps {
  view: View;
  onAccept: () => void;
  onDecline: () => void;
  onNext: () => void;
  onSkip: () => void;
  onSayHi: () => void;
  onDone: () => void;
  onChip: (chip: 'projects' | 'about' | 'contact' | 'copy') => void;
}

const Action = ({
  children,
  onClick,
  primary,
  chip,
}: {
  children: ReactNode;
  onClick: () => void;
  primary?: boolean;
  chip?: boolean;
}) => (
  <button
    type='button'
    onClick={onClick}
    className={cn(
      'inline-flex h-9 items-center rounded-full px-4 text-body-sm font-medium transition-colors duration-150',
      primary
        ? 'bg-accent text-on-accent hover:bg-accent-hover'
        : 'border border-hairline-strong bg-surface-1 text-ink hover:bg-surface-2',
      chip && 'px-3.5'
    )}
  >
    {children}
  </button>
);

const CHIPS = [
  { id: 'projects', label: 'See projects' },
  { id: 'about', label: 'About me' },
  { id: 'contact', label: 'Get in touch' },
  { id: 'copy', label: 'Copy email' },
] as const;

const Bubble = ({
  view,
  onAccept,
  onDecline,
  onNext,
  onSkip,
  onSayHi,
  onDone,
  onChip,
}: BubbleProps) => {
  if (view.t === 'none') return null;
  const last = view.t === 'step' && view.i === TOUR.length - 1;

  return (
    <div className='pointer-events-auto absolute bottom-full right-0 mb-3 w-[min(20rem,calc(100vw-2rem))] rounded-[20px] border border-hairline-strong bg-surface-1 p-4 text-body-sm text-ink shadow-[0_16px_40px_-16px_rgb(0_0_0/0.5)]'>
      <span
        aria-hidden
        className='absolute -bottom-1.5 right-8 h-3 w-3 rotate-45 border-b border-r border-hairline-strong bg-surface-1'
      />

      {view.t === 'greeting' && (
        <>
          <p>{GREETING}</p>
          <div className='mt-3 flex flex-wrap gap-2'>
            <Action primary onClick={onAccept}>
              Show me around
            </Action>
            <Action onClick={onDecline}>I’ll explore myself</Action>
          </div>
        </>
      )}

      {view.t === 'step' && (
        <>
          <p className='text-caption text-ink-subtle'>
            {view.i + 1} of {TOUR.length}
          </p>
          <p className='mt-1'>{TOUR[view.i].line}</p>
          <div className='mt-3 flex flex-wrap gap-2'>
            {last ? (
              <>
                <Action primary onClick={onSayHi}>
                  Say hi
                </Action>
                <Action onClick={onDone}>Done</Action>
              </>
            ) : (
              <>
                <Action primary onClick={onNext}>
                  Next
                </Action>
                <Action onClick={onSkip}>Skip tour</Action>
              </>
            )}
          </div>
        </>
      )}

      {view.t === 'menu' && (
        <>
          <p>Where to?</p>
          <div className='mt-3 flex flex-wrap gap-2'>
            {CHIPS.map(({ id, label }) => (
              <Action key={id} chip onClick={() => onChip(id)}>
                {label}
              </Action>
            ))}
          </div>
        </>
      )}

      {view.t === 'note' && <p>{view.text}</p>}
    </div>
  );
};

export default Bubble;

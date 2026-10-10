import { MouseEvent, useEffect, useRef, useState } from 'react';
import {
  PiBatteryFull as BatteryIcon,
  PiCaretLeft as BackIcon,
  PiCellSignalFull as SignalIcon,
  PiCheck as CheckIcon,
  PiCopySimple as CopyIcon,
  PiWifiHigh as WifiIcon,
} from 'react-icons/pi';

import { PillLink, pillClassName } from '@/common/components/elements/PillLink';
import { App, APPS, AppBlock, AppId, DOCK_IDS } from './apps';
import useCopyEmail, { EMAIL } from './useCopyEmail';

const MAX_TILT = 6; // degrees
const small = 'h-11 px-5 text-body-sm';

const pad = (n: number) => String(n).padStart(2, '0');

// Static in the server HTML, the real time after mount. Fixed width, so nothing shifts.
const useClock = () => {
  const [time, setTime] = useState('09:41');
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(`${pad(now.getHours())}:${pad(now.getMinutes())}`);
    };
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);
  return time;
};

// Slight 3D tilt toward the cursor: one rAF-throttled pointermove, fine pointers only.
const useTilt = (
  root: React.RefObject<HTMLDivElement>,
  tilt: React.RefObject<HTMLDivElement>
) => {
  useEffect(() => {
    const rootEl = root.current;
    const tiltEl = tilt.current;
    const query = window.matchMedia(
      '(min-width: 768px) and (pointer: fine) and (prefers-reduced-motion: no-preference)'
    );
    if (!rootEl || !tiltEl || !query.matches) return;

    let frame = 0;
    let x = 0;
    let y = 0;
    const apply = () => {
      frame = 0;
      const box = rootEl.getBoundingClientRect();
      const dx = (x - (box.left + box.width / 2)) / (window.innerWidth / 2);
      const dy = (y - (box.top + box.height / 2)) / (window.innerHeight / 2);
      const clamp = (n: number) => Math.max(-1, Math.min(1, n));
      tiltEl.style.transform = `rotateX(${(-clamp(dy) * MAX_TILT).toFixed(
        2
      )}deg) rotateY(${(clamp(dx) * MAX_TILT).toFixed(2)}deg)`;
    };
    const onMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (!frame) frame = requestAnimationFrame(apply);
    };
    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      tiltEl.style.transform = '';
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', reset);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', reset);
    };
  }, [root, tilt]);
};

const StatusBar = ({ time }: { time: string }) => (
  <div
    aria-hidden='true'
    className='absolute inset-x-0 top-0 z-20 flex h-11 items-center justify-between px-7 pt-1 text-ink'
  >
    <span className='w-12 text-caption font-semibold tabular-nums'>{time}</span>
    <span className='flex items-center gap-1'>
      <SignalIcon size={14} />
      <WifiIcon size={14} />
      <BatteryIcon size={16} />
    </span>
  </div>
);

interface AppButtonProps {
  app: App;
  onOpen: (id: AppId, event: MouseEvent<HTMLButtonElement>) => void;
  dock?: boolean;
}

const AppButton = ({ app, onOpen, dock }: AppButtonProps) => (
  <button
    type='button'
    data-strobi={`app-${app.id}`}
    onClick={(event) => onOpen(app.id, event)}
    className='rack-block-wrap app-icon flex w-20 flex-col items-center gap-2 rounded-control focus-visible:outline-offset-4'
  >
    <AppBlock app={app} />
    <span className={dock ? 'sr-only' : 'text-caption text-ink'}>
      <span className='sr-only'>Open </span>
      {app.label}
    </span>
  </button>
);

const MailApp = () => {
  const { state, copy } = useCopyEmail();
  return (
    <>
      <p className='text-[0.8125rem] font-medium text-ink [overflow-wrap:anywhere]'>
        {EMAIL.value}
      </p>
      <div className='mt-5 flex flex-wrap gap-2'>
        <button
          type='button'
          onClick={copy}
          className={pillClassName('primary', small)}
        >
          {state === 'copied' ? (
            <CheckIcon size={16} aria-hidden />
          ) : (
            <CopyIcon size={16} aria-hidden />
          )}
          {state === 'copied' ? 'Copied' : 'Copy'}
        </button>
        <a href={EMAIL.href} className={pillClassName('secondary', small)}>
          Send
        </a>
      </div>
      <p role='status' className='mt-3 text-caption text-ink-subtle'>
        {state === 'copied' && 'Email address copied.'}
        {state === 'failed' && 'Copy failed. Use Send instead.'}
      </p>
    </>
  );
};

const LinkApp = ({ app }: { app: App }) => (
  <>
    {app.id === 'calendar' ? (
      <>
        <p className='text-h3 text-ink'>Book a 30-minute call</p>
        <p className='mt-1 text-body-sm text-ink-muted'>
          Google Meet, via Calendly.
        </p>
      </>
    ) : (
      <>
        <p className='text-caption text-ink-subtle'>{app.label}</p>
        <p className='mt-1 break-all text-h3 text-ink'>{app.handle}</p>
      </>
    )}
    <PillLink href={app.href} className={`mt-5 ${small}`}>
      {app.id === 'calendar' ? 'Book a call' : 'Open'}
      <span className='sr-only'> {app.label}</span>
    </PillLink>
  </>
);

const PhoneMockup = () => {
  const [open, setOpen] = useState<AppId | null>(null);
  const [origin, setOrigin] = useState('50% 50%');
  const rootRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLButtonElement>(null);
  const trigger = useRef<HTMLElement | null>(null);
  const time = useClock();
  useTilt(rootRef, tiltRef);

  // Focus moves into the app, and back to the icon that opened it.
  useEffect(() => {
    if (open) {
      backRef.current?.focus();
      return;
    }
    trigger.current?.focus();
    trigger.current = null;
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(null);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const openApp = (id: AppId, event: MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const screen = screenRef.current?.getBoundingClientRect();
    const icon = button.getBoundingClientRect();
    if (screen) {
      setOrigin(
        `${icon.left + icon.width / 2 - screen.left}px ${
          icon.top + icon.height / 2 - screen.top
        }px`
      );
    }
    trigger.current = button;
    setOpen(id);
  };

  const app = APPS.find((item) => item.id === open);
  const dock = DOCK_IDS.map((id) => APPS.find((item) => item.id === id) as App);

  return (
    <div
      ref={rootRef}
      data-strobi='phone'
      className='rack-scope phone-stage mx-auto hidden md:block'
    >
      <div ref={tiltRef} className='phone-tilt'>
        <div className='phone-frame'>
          <span
            aria-hidden='true'
            className='phone-button left-[-3px] top-28 h-8'
          />
          <span
            aria-hidden='true'
            className='phone-button left-[-3px] top-44 h-14'
          />
          <span
            aria-hidden='true'
            className='phone-button right-[-3px] top-40 h-20'
          />

          <div
            ref={screenRef}
            role='region'
            aria-label='Contact phone'
            className='phone-wallpaper relative h-full overflow-hidden rounded-[2.25rem]'
          >
            <span aria-hidden='true' className='phone-island' />
            <StatusBar time={time} />

            <div className={open ? 'invisible' : undefined}>
              <ul
                aria-label='Apps'
                className='absolute inset-x-0 top-16 grid grid-cols-3 justify-items-center gap-y-6 px-4'
              >
                {APPS.map((item) => (
                  <li key={item.id}>
                    <AppButton app={item} onOpen={openApp} />
                  </li>
                ))}
              </ul>
              <ul
                aria-label='Dock'
                className='phone-dock absolute inset-x-3 bottom-3 flex justify-center gap-6 rounded-[1.75rem] px-4 py-3'
              >
                {dock.map((item) => (
                  <li key={item.id}>
                    <AppButton app={item} onOpen={openApp} dock />
                  </li>
                ))}
              </ul>
            </div>

            {app && (
              <section
                key={app.id}
                aria-label={app.label}
                style={{ transformOrigin: origin }}
                className='phone-app absolute inset-0 z-10 bg-surface-1 px-5 pt-14'
              >
                <div className='flex items-center gap-2'>
                  <button
                    ref={backRef}
                    type='button'
                    onClick={() => setOpen(null)}
                    className='inline-flex h-11 items-center gap-1 rounded-full pr-3 text-body-sm font-medium text-accent hover:bg-surface-2'
                  >
                    <BackIcon size={18} aria-hidden />
                    Back
                  </button>
                  <h2 className='text-h3'>{app.label}</h2>
                </div>
                <div className='mt-6 rounded-[1.25rem] border border-hairline bg-surface-2 p-3.5'>
                  {app.id === 'mail' ? <MailApp /> : <LinkApp app={app} />}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;

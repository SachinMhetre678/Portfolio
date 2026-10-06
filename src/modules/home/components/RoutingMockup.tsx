import { CSSProperties } from 'react';

import cn from '@/common/libs/cn';

// Illustration only: generic, made-up data. Not a screenshot of any real system.
const ROWS = [
  {
    scenario: 'Login flow',
    step: 'submit credentials',
    owner: 'Owner A',
    via: 'Author map',
  },
  {
    scenario: 'Checkout',
    step: 'apply coupon',
    owner: 'Owner C',
    via: 'Git history',
  },
  {
    scenario: 'Search filters',
    step: 'sort by price',
    owner: 'Owner B',
    via: 'Step keyword',
  },
  {
    scenario: 'Profile update',
    step: 'upload avatar',
    owner: 'Owner D',
    via: 'Directory rule',
  },
  {
    scenario: 'Password reset',
    step: 'open email link',
    owner: 'Owner A',
    via: 'Author map',
  },
  {
    scenario: 'Cart totals',
    step: 'remove item',
    owner: 'Owner E',
    via: 'Round-robin',
  },
];

const NIGHTS = [47, 53, 58, 51, 56, 49, 54];
const MAX = Math.max(...NIGHTS);

const delay = (ms: number) => ({ '--base': `${ms}ms` } as CSSProperties);

const RoutingMockup = () => (
  <div
    role='img'
    aria-label='Illustration of a dashboard that assigns each nightly test failure to an owner'
    className='overflow-hidden rounded-[20px] border border-hairline bg-surface-1 shadow-[0_24px_60px_-24px_rgb(0_0_0/0.35)]'
  >
    <div aria-hidden>
      <div className='flex items-center justify-between gap-4 border-b border-hairline px-5 py-3.5'>
        <div className='flex items-center gap-2'>
          <span className='h-2.5 w-2.5 rounded-full bg-surface-3' />
          <span className='h-2.5 w-2.5 rounded-full bg-surface-3' />
          <span className='h-2.5 w-2.5 rounded-full bg-surface-3' />
        </div>
        <p className='font-mono text-[11px] text-ink-subtle'>
          nightly regression
        </p>
      </div>

      <div className='grid gap-5 p-5 sm:grid-cols-[1fr_auto]'>
        <div>
          <p className='text-body-sm font-medium text-ink'>
            Failures, last night
          </p>
          <p className='mt-0.5 text-caption text-ink-subtle'>
            54 failed, 54 assigned, 0 waiting
          </p>
        </div>
        <div className='flex h-12 items-end gap-1.5' title='Failures per night'>
          {NIGHTS.map((count, i) => (
            <span
              key={i}
              className={cn(
                'stagger w-2.5 origin-bottom rounded-t-[3px] motion-safe:animate-grow-y',
                i === NIGHTS.length - 1 ? 'bg-accent' : 'bg-surface-3'
              )}
              style={
                {
                  height: `${(count / MAX) * 100}%`,
                  '--i': i,
                  ...delay(400),
                } as CSSProperties
              }
            />
          ))}
        </div>
      </div>

      <table className='w-full border-t border-hairline text-left text-caption'>
        <thead className='text-ink-subtle'>
          <tr>
            <th className='px-5 py-2.5 font-normal'>Scenario</th>
            <th className='hidden px-2 py-2.5 font-normal md:table-cell'>
              Failed step
            </th>
            <th className='px-2 py-2.5 font-normal'>Owner</th>
            <th className='px-5 py-2.5 text-right font-normal'>Status</th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map(({ scenario, step, owner, via }, i) => (
            <tr
              key={scenario}
              className='stagger border-t border-hairline motion-safe:animate-row-in'
              style={{ '--i': i, ...delay(500) } as CSSProperties}
            >
              <td className='pl-4 pr-2 sm:px-5 py-2.5 font-medium text-ink'>
                {scenario}
              </td>
              <td className='hidden px-2 py-2.5 font-mono text-[11px] text-ink-subtle md:table-cell'>
                {step}
              </td>
              <td className='px-2 py-2.5 text-ink-muted'>
                <span className='inline-flex items-center gap-2 whitespace-nowrap'>
                  <span className='hidden h-5 w-5 sm:inline-flex items-center justify-center rounded-full bg-surface-2 font-mono text-[10px] text-ink-muted'>
                    {owner.slice(-1)}
                  </span>
                  {owner}
                </span>
              </td>
              <td className='px-5 py-2.5 text-right'>
                <span className='relative inline-grid justify-items-end'>
                  {/* Under reduced motion only the final "assigned" state renders. */}
                  <span
                    className='stagger col-start-1 row-start-1 hidden rounded-full bg-surface-2 px-2 py-0.5 text-ink-subtle motion-safe:inline motion-safe:animate-fade-out'
                    style={{ '--i': i, ...delay(1300) } as CSSProperties}
                  >
                    Routing…
                  </span>
                  <span
                    className='stagger col-start-1 row-start-1 rounded-full bg-accent-soft px-2 py-0.5 text-accent motion-safe:animate-fade-in'
                    style={{ '--i': i, ...delay(1450) } as CSSProperties}
                  >
                    {via}
                  </span>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default RoutingMockup;

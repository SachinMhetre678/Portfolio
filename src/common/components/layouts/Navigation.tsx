import Link from 'next/link';
import { useRouter } from 'next/router';

import { MENU_ITEMS } from '@/common/constant/menu';
import cn from '@/common/libs/cn';

interface NavigationProps {
  onNavigate?: () => void;
}

const Navigation = ({ onNavigate }: NavigationProps) => {
  const { pathname } = useRouter();

  return (
    <nav aria-label='Main'>
      <ul className='space-y-1'>
        {MENU_ITEMS.map(({ title, href, icon }) => {
          const isActive = pathname === href;

          return (
            <li key={href}>
              <Link
                href={href}
                onClick={onNavigate}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'flex min-h-[40px] items-center gap-3 rounded-control px-3 text-body-sm transition-colors duration-150',
                  isActive
                    ? 'bg-accent-soft text-ink'
                    : 'text-ink-subtle hover:bg-surface-2 hover:text-ink'
                )}
              >
                <span
                  aria-hidden
                  className={cn(isActive ? 'text-accent' : 'text-current')}
                >
                  {icon}
                </span>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;

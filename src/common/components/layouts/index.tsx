import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { ReactNode } from 'react';

import HomeNav from './HomeNav';
import MobileHeader from './MobileHeader';
import SidebarContent from './SidebarContent';

interface LayoutProps {
  children: ReactNode;
}

const THEME_COLOR = { dark: '#0b0c0e', light: '#f7f8f8', homeLight: '#f4f2ed' };

const Layout = ({ children }: LayoutProps) => {
  const { resolvedTheme } = useTheme();
  const { pathname } = useRouter();
  const isHome = pathname === '/';

  return (
    <>
      <Head>
        <meta
          name='theme-color'
          content={
            resolvedTheme !== 'light'
              ? THEME_COLOR.dark
              : isHome
              ? THEME_COLOR.homeLight
              : THEME_COLOR.light
          }
        />
      </Head>

      <a
        href='#main'
        className='sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-skip-link focus:rounded-control focus:bg-accent focus:px-4 focus:py-2 focus:text-body-sm focus:font-medium focus:text-on-accent'
      >
        Skip to content
      </a>

      {isHome ? (
        // Home uses a floating pill nav and a full-width canvas instead of the sidebar.
        <div className='home-shell min-h-[100dvh] bg-canvas'>
          <HomeNav />
          <main id='main' tabIndex={-1} className='focus:outline-none'>
            {children}
          </main>
        </div>
      ) : (
        <>
          <MobileHeader />

          <div className='mx-auto flex max-w-6xl gap-12 px-4 md:px-6'>
            <aside className='hidden w-[260px] shrink-0 lg:block'>
              <div className='sticky top-0 h-[100dvh] py-12'>
                <SidebarContent isPrimary />
              </div>
            </aside>

            <main
              id='main'
              tabIndex={-1}
              className='min-w-0 max-w-3xl flex-1 py-12 focus:outline-none lg:py-16'
            >
              {children}
            </main>
          </div>
        </>
      )}

      <SpeedInsights />
      <Analytics />
    </>
  );
};

export default Layout;

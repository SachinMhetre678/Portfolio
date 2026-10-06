import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Head from 'next/head';
import { useTheme } from 'next-themes';
import { ReactNode } from 'react';

import Footer from './Footer';
import PillNav from './PillNav';

interface LayoutProps {
  children: ReactNode;
}

const THEME_COLOR = { dark: '#0b0c0e', light: '#f4f2ed' };

const Layout = ({ children }: LayoutProps) => {
  const { resolvedTheme } = useTheme();

  return (
    <>
      <Head>
        <meta
          name='theme-color'
          content={
            resolvedTheme !== 'light' ? THEME_COLOR.dark : THEME_COLOR.light
          }
        />
      </Head>

      <a
        href='#main'
        className='sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-skip-link focus:rounded-control focus:bg-accent focus:px-4 focus:py-2 focus:text-body-sm focus:font-medium focus:text-on-accent'
      >
        Skip to content
      </a>

      <div className='home-shell min-h-[100dvh] bg-canvas'>
        <PillNav />
        <main id='main' tabIndex={-1} className='focus:outline-none'>
          {children}
        </main>
        <Footer />
      </div>

      <SpeedInsights />
      <Analytics />
    </>
  );
};

export default Layout;

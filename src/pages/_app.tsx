import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';

import '@/common/styles/globals.css';

import Layout from '@/common/components/layouts';
import { SITE } from '@/common/constant/site';

const App = ({ Component, pageProps }: AppProps) => {
  const { pathname } = useRouter();
  const url = `${SITE.url}${pathname === '/' ? '' : pathname}`;

  return (
    <>
      <style jsx global>
        {`
          html {
            --font-sans: ${GeistSans.style.fontFamily};
            --font-mono: ${GeistMono.style.fontFamily};
          }
        `}
      </style>

      <DefaultSeo
        titleTemplate={`%s · ${SITE.name}`}
        defaultTitle={SITE.title}
        description={SITE.description}
        canonical={url}
        openGraph={{
          type: 'website',
          locale: 'en_IN',
          url,
          siteName: SITE.name,
          title: SITE.title,
          description: SITE.description,
          images: [
            {
              url: `${SITE.url}${SITE.ogImage}`,
              width: 1200,
              height: 630,
              alt: SITE.title,
            },
          ],
        }}
        twitter={{ handle: SITE.twitter, cardType: 'summary_large_image' }}
      />

      <ThemeProvider attribute='class' defaultTheme='dark' enableSystem={false}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;

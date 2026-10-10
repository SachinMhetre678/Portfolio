import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

// Client-only and loaded after idle, so the mascot chunk stays out of First Load JS.
const Mascot = dynamic(() => import('./Mascot'), { ssr: false });

const MascotLoader = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Safari has no requestIdleCallback, hence the cast and the timeout fallback.
    const idle = window as Partial<Window>;
    if (idle.requestIdleCallback) {
      const id = idle.requestIdleCallback(() => setReady(true), {
        timeout: 4000,
      });
      return () => idle.cancelIdleCallback?.(id);
    }
    const id = window.setTimeout(() => setReady(true), 2000);
    return () => window.clearTimeout(id);
  }, []);

  return ready ? <Mascot /> : null;
};

export default MascotLoader;

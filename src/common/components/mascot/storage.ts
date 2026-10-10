const MUTED_KEY = 'strobi-muted'; // localStorage: automatic bubbles off
const VISITED_KEY = 'strobi-visited'; // localStorage: first visit vs return visit
const MINIMIZED_KEY = 'strobi-minimized'; // sessionStorage
const GREETED_KEY = 'strobi-greeted'; // sessionStorage: one greeting per session
const SECTIONS_KEY = 'strobi-sections'; // sessionStorage: sections already commented on

type Store = 'localStorage' | 'sessionStorage';

// Storage can throw (private mode, blocked cookies); every helper fails soft.
const read = (store: Store, key: string) => {
  try {
    return window[store].getItem(key);
  } catch {
    return null;
  }
};
const write = (store: Store, key: string, value: string | null) => {
  try {
    if (value === null) window[store].removeItem(key);
    else window[store].setItem(key, value);
  } catch {
    // Ignore: the choice just won't persist.
  }
};

export const isMuted = () => read('localStorage', MUTED_KEY) === '1';
export const setMuted = (value: boolean) =>
  write('localStorage', MUTED_KEY, value ? '1' : null);

export const hasVisited = () => read('localStorage', VISITED_KEY) === '1';
export const setVisited = () => write('localStorage', VISITED_KEY, '1');

export const isMinimized = () => read('sessionStorage', MINIMIZED_KEY) === '1';
export const setMinimized = (value: boolean) =>
  write('sessionStorage', MINIMIZED_KEY, value ? '1' : null);

export const wasGreeted = () => read('sessionStorage', GREETED_KEY) === '1';
export const setGreeted = () => write('sessionStorage', GREETED_KEY, '1');

export const seenSection = (key: string) =>
  (read('sessionStorage', SECTIONS_KEY) ?? '').split(',').includes(key);
export const markSection = (key: string) =>
  write(
    'sessionStorage',
    SECTIONS_KEY,
    [read('sessionStorage', SECTIONS_KEY), key].filter(Boolean).join(',')
  );

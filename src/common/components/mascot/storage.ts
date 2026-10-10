import { MASCOT_TOUR_EVENT } from './constants';

const SEEN_KEY = 'strobi-tour-seen'; // localStorage: the greeting is shown once per browser
const STEP_KEY = 'strobi-tour-step'; // sessionStorage: survives a reload mid-tour
const MINIMIZED_KEY = 'strobi-minimized'; // sessionStorage

// Storage can throw (private mode, blocked cookies); every helper fails soft.
const read = (store: 'localStorage' | 'sessionStorage', key: string) => {
  try {
    return window[store].getItem(key);
  } catch {
    return null;
  }
};
const write = (
  store: 'localStorage' | 'sessionStorage',
  key: string,
  value: string | null
) => {
  try {
    if (value === null) window[store].removeItem(key);
    else window[store].setItem(key, value);
  } catch {
    // Ignore: the choice just won't persist.
  }
};

export const tourSeen = () => read('localStorage', SEEN_KEY) === '1';
export const setTourSeen = () => write('localStorage', SEEN_KEY, '1');

export const getTourStep = () => {
  const value = Number(read('sessionStorage', STEP_KEY));
  return read('sessionStorage', STEP_KEY) === null || Number.isNaN(value)
    ? null
    : value;
};
export const setTourStep = (step: number | null) =>
  write('sessionStorage', STEP_KEY, step === null ? null : String(step));

export const isMinimized = () => read('sessionStorage', MINIMIZED_KEY) === '1';
export const setMinimized = (value: boolean) =>
  write('sessionStorage', MINIMIZED_KEY, value ? '1' : null);

// Footer link: clear the flag and start the tour, even if Strobi is still loading
// (the saved step is picked up when the mascot mounts).
export const restartTour = () => {
  write('localStorage', SEEN_KEY, null);
  setMinimized(false);
  setTourStep(0);
  window.dispatchEvent(new Event(MASCOT_TOUR_EVENT));
};

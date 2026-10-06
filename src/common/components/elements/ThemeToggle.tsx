import { useTheme } from 'next-themes';
import { PiMoon as MoonIcon, PiSun as SunIcon } from 'react-icons/pi';

import useHasMounted from '@/common/hooks/useHasMounted';

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const hasMounted = useHasMounted();

  const isDark = !hasMounted || resolvedTheme !== 'light';
  const nextTheme = isDark ? 'light' : 'dark';

  return (
    <button
      type='button'
      onClick={() => setTheme(nextTheme)}
      aria-label={hasMounted ? `Switch to ${nextTheme} theme` : 'Toggle theme'}
      className='inline-flex h-10 w-10 items-center justify-center rounded-control border border-hairline bg-surface-1 text-ink-muted transition-colors duration-150 hover:border-hairline-strong hover:bg-surface-2 hover:text-ink'
    >
      {isDark ? (
        <SunIcon size={18} aria-hidden />
      ) : (
        <MoonIcon size={18} aria-hidden />
      )}
    </button>
  );
};

export default ThemeToggle;

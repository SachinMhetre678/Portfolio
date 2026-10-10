import { useEffect, useRef, useState } from 'react';

import { MASCOT_CELEBRATE_EVENT } from '@/common/components/mascot/constants';
import { CONTACT_LINKS } from '@/common/constant/contact';

export const EMAIL = CONTACT_LINKS[0];

// Copies the email address and tells Strobi to celebrate. Shared by the email card and the Mail app.
const useCopyEmail = () => {
  const [state, setState] = useState<'idle' | 'copied' | 'failed'>('idle');
  const timer = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL.value);
      setState('copied');
      window.dispatchEvent(new Event(MASCOT_CELEBRATE_EVENT));
    } catch {
      setState('failed');
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setState('idle'), 2500);
  };

  return { state, copy };
};

export default useCopyEmail;

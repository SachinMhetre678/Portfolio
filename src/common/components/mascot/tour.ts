// Scripted tour: no AI, no network. Copy comes from docs/CONTENT_APPROVED.md.
// Moods are animation names that exist in public/strobi.avatar.json.
export type Mood =
  | 'waking'
  | 'idle'
  | 'excited'
  | 'celebrate'
  | 'laughing'
  | 'drowsy'
  | 'happy'
  | 'curious'
  | 'playful';

export interface TourStep {
  path: string;
  target: string; // matches a data-tour attribute on the page
  mood: Mood;
  line: string;
}

export const TOUR: TourStep[] = [
  {
    path: '/',
    target: 'proof',
    mood: 'excited',
    line: 'First stop: the proof strip. Sachin’s team won FOSS Hack 2025, and Sachin was a top 3 finalist at BMC Hackademia.',
  },
  {
    path: '/',
    target: 'selected-work',
    mood: 'happy',
    line: 'Selected work. Scribly comes first: a Chrome extension for notes and drawing on YouTube videos. It won FOSS Hack 2025.',
  },
  {
    path: '/about',
    target: 'experience',
    mood: 'curious',
    line: 'About has the experience and skills. Sachin is an automation engineer at Vimo, working with Playwright, Cucumber and Java.',
  },
  {
    path: '/projects',
    target: 'earlier-work',
    mood: 'playful',
    line: 'Earlier work collects Sachin’s older projects. Have a look around.',
  },
  {
    path: '/contact',
    target: 'contact',
    mood: 'celebrate',
    line: 'Last stop. Email is the fastest way to reach Sachin, or you can book a 30-minute call on Calendly.',
  },
];

export const GREETING = 'Hi, I’m Strobi, Sachin’s guide. Want a 30-second tour?';

export type View =
  | { t: 'none' }
  | { t: 'greeting' }
  | { t: 'step'; i: number }
  | { t: 'menu' }
  | { t: 'note'; text: string };

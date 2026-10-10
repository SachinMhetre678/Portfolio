// All of Strobi's dialogue lives here. Edit freely.
//
// A line is a string, or [text, mood] to also play an animation.
// Rules of thumb: max 12 words, first person as Strobi, Sachin by name, no em dashes,
// and only facts from docs/CONTENT_APPROVED.md. Keep the first word different inside a group.

// Animation names that exist in public/strobi.avatar.json.
export type Mood =
  | 'waking'
  | 'idle'
  | 'excited'
  | 'celebrate'
  | 'laughing'
  | 'drowsy'
  | 'happy'
  | 'curious'
  | 'playful'
  | 'suspicious'
  | 'proud'
  | 'surprised'
  | 'shy'
  | 'thinking';

export type Line = string | [text: string, mood: Mood];

type Group = Line[];
interface Shape {
  arrival: Record<'home' | 'about' | 'projects' | 'contact', Group>;
  firstVisit: Group;
  welcomeBack: Group;
  time: Record<'morning' | 'afternoon' | 'evening' | 'night', Group>;
  hover: Record<string, Group>;
  hoverLong: Group;
  section: Record<string, Group>;
  idle: Group;
  wake: Group;
  copy: Group;
  theme: Record<'dark' | 'light', Group>;
  clickEgg: Group;
  konami: Group;
  menu: string[];
  muted: Group;
  unmuted: Group;
}

// The notification card on the Contact phone's home screen (shown as written, not spoken). The page imports it dynamically so the lines stay out of its bundle.
export const PHONE_NOTIFICATION = 'New message: tap Mail and say hi.';

export const LINES: Shape = {
  // Page arrival, one random line per visit. Home also mixes in `time`.
  arrival: {
    home: [
      ['Psst, scroll down. The good stuff is below.', 'excited'],
      'Hover anything and I’ll narrate. I speak in bubbles.',
      'Sachin automates tests for a living. I automate being cute.',
      'I run on pure vibes and 0 API calls.',
      ['Tour guide on duty. No mouth, so bubbles it is.', 'happy'],
      'Yes, I’m a ball with eyes. Yes, I have opinions.',
      ['FOSS Hack 2025 winner, right down there. Just saying.', 'proud'],
      'Click me for shortcuts. I promise I don’t mind.',
      'Welcome in! I’m the blob. Sachin’s the one in the photo.',
    ],
    about: [
      ['Okay, gossip time: Sachin captained a Kho-Kho team.', 'playful'],
      'Plot twist: Sachin also plays the tabla.',
      'Between us, Sachin studied CSE at Symbiosis Institute of Technology.',
      'Scroll to Experience. Three roles, and Vimo is my favourite.',
      [
        'Fun fact: Sachin mentored 15+ children during an internship.',
        'curious',
      ],
      'Honestly, I’m a bit proud of the FOSS Hack win.',
      'I know Sachin well. I live on this very site.',
      'Skills section is long. Sachin collects tools like I collect boops.',
      'React Native apps too? Sachin built one, with OTP login.',
      'Psst, CGPA 8+ out of 10. Not that I’m counting.',
    ],
    projects: [
      ['Curator mode on. My money’s on Scribly.', 'proud'],
      'Scribly won FOSS Hack, but Hope has a robot. Fight me.',
      'Click a poster to open it bigger. Trust me.',
      'Failure management is the quiet champion. No poster, all impact.',
      'Hotel Management has JWT, S3 and an admin dashboard. Sturdy.',
      'RAG answers from your PDFs, or politely declines to guess.',
      'Earlier work is below. Even the old projects get a card.',
      'Pick a favourite. I’ll pretend not to judge.',
      'Hackathon builds, university projects, one work tool. Quite the range.',
      ['I’m a bit jealous of the Scribly poster, honestly.', 'suspicious'],
    ],
    contact: [
      ['Deep breath. Just say hi. Email is the fastest way.', 'shy'],
      'I’ll wait here, nervously. Copy the email, go on.',
      'No pressure, but a hello goes a long way.',
      'Prefer talking? There’s a 30-minute call on Calendly.',
      'Subject line idea: hi from a friendly blob.',
      'Copy button is right there. I believe in you.',
      'Questions about test automation are very welcome here.',
      'GitHub, LinkedIn, X, Instagram: pick your favourite door.',
      ['Shy? Same. I have no mouth, so I send bubbles.', 'shy'],
    ],
  },

  firstVisit: [
    [
      'Hi, I’m Strobi, Sachin’s tiny guide. Hover me, I bite. Jokes only.',
      'excited',
    ],
  ],
  welcomeBack: [
    ['Welcome back! I kept your spot warm.', 'happy'],
    'You again! Best part of my day.',
    'Back for more? Sachin would be flattered.',
    'Hey, you’re back. I only blinked twice.',
  ],
  // Mixed into the Home arrival pool (and returning-visitor greeting).
  time: {
    morning: [
      'Good morning! Coffee is optional, scrolling is encouraged.',
      'Morning! Fresh page, fresh blob.',
      'Early visitor! I’ll try to look awake.',
    ],
    afternoon: [
      'Good afternoon! Perfect time to browse Sachin’s projects.',
      'Afternoon already? I was just warming up.',
      'Lunch break browsing? I respect that.',
    ],
    evening: [
      'Good evening! Grab a seat, I’ll narrate.',
      'Evening visit? The projects are right where you left them.',
      'Winding down? Scroll through Sachin’s projects with me.',
    ],
    night: [
      'You’re up late. Sachin codes late too.',
      'Night visitor! The dark theme was made for this.',
      'Late visit! I glow in the dark. Mostly.',
    ],
  },

  // Hover, focus or tap, by data-strobi key.
  hover: {
    'rack-languages': [
      ['Languages! My favourite subject, after myself.', 'happy'],
      'Java first, naturally.',
      'Polyglot energy. I only speak bubble.',
    ],
    'rack-backend': [
      'Spring Boot, Node, Express. The engine room.',
      'Backends! Where the quiet magic lives.',
      ['Servers hum, I approve.', 'happy'],
    ],
    'rack-frontend': [
      ['React, Next.js, SvelteKit. The pretty things live here.', 'happy'],
      'Frontend! My home turf, bubbles and all.',
      'Tailwind classes everywhere. Very tidy.',
    ],
    'rack-data': [
      'Data rack! Postgres, MySQL, Mongo, all tidy.',
      'Rows, documents, queries. I just watch.',
      'Databases never forget. Unlike me.',
    ],
    'rack-cloud': [
      ['AWS, Docker, Git and friends. Very shiny.', 'excited'],
      'Cloud and tools. The glue holds everything.',
      'Jenkins is in there too. Fancy butler.',
    ],
    self: [
      ['Hey there!', 'happy'],
      'Boop received.',
      'You found me.',
      'Careful, I’m ticklish. Allegedly.',
      'Hi hi! Click me for the quick menu.',
    ],
    phone: [
      'Nice phone. Say hi through any of these apps.',
      'Tap an app. I’ll be nervously watching.',
      ['I want my own app icon. Just saying.', 'shy'],
      'Everything opens inside the phone. Go on, tap.',
    ],
    'app-mail': [
      'Mail is the fastest way. No pressure though.',
      'That red badge is a lie. Write anyway.',
      ['Just say hi. Three words is plenty.', 'shy'],
    ],
    'app-calendar': [
      'Thirty minutes on Google Meet. Very low pressure.',
      'Booking a call? I’m nervous for you.',
      'Calendly handles the awkward part. Nice.',
    ],
    'app-github': [
      'Sachin’s code lives here. Go peek.',
      'Stars are free, by the way.',
      ['Where’s my own app icon, though?', 'suspicious'],
    ],
    'app-linkedin': [
      'The professional door. Wear your best hello.',
      'Connect politely. Sachin will be thrilled.',
      'LinkedIn: where hellos wear ties.',
    ],
    'app-x': [
      'Short and sweet, like my bubbles.',
      'Say hi in 280 characters or fewer.',
      'Perhaps a DM? I’m too shy.',
    ],
    'app-instagram': [
      'Photos and hellos are both welcome.',
      'Instagram! I’d make a cute profile picture.',
      ['Double tap Sachin’s page. Metaphorically.', 'playful'],
    ],
    email: [
      'That’s the fastest way to reach Sachin.',
      'One click copies it. I’ll cheer, obviously.',
      'Email beats everything here. Just saying.',
      'Go on, copy it. Nobody’s watching. Except me.',
    ],
    cta: [
      ['Ooh, the big green button. Go on.', 'excited'],
      'Get in touch? I’m already nervous.',
      'Bold choice. I like it.',
      'Click it. Sachin’s inbox is waiting.',
    ],
    theme: [
      'Light or dark? I look good in both.',
      'Ooh, a light switch. Flip it, I dare you.',
      'Theme switcher! My second favourite button.',
    ],
    nav: [
      'Four pages: Home, About, Projects, Contact. Easy.',
      'About has gossip. Projects has bragging rights.',
      'Fun fact: I live in the corner, not the nav.',
    ],
    'proof-0': [
      ['FOSS Hack 2025 winner. Top project among 800+ submissions.', 'proud'],
      'Scribly did that. Sachin built the drawing tools.',
    ],
    'proof-1': [
      'BMC Hackademia top 3, in a 48-hour hackathon. Wild.',
      'RAG QnA bot for PDFs. Sachin built it end to end.',
    ],
    'proof-2': [
      'B.Tech CSE 2026, Symbiosis Institute of Technology. Respect.',
      'Four years of CSE, plus a CGPA of 8+.',
    ],
    'project-scribly': [
      ['Scribly! The one that won FOSS Hack 2025.', 'proud'],
      'Notes and drawing on YouTube. Sachin built the drawing tools.',
    ],
    'project-regression-failure-management': [
      '360 scenarios, 9 owners. Failures route themselves.',
      'Sachin turned 3 to 4 hours into 5 to 10 minutes. Show-off.',
    ],
    'project-hope': [
      'Hope reads emotion from face, voice and text.',
      'A robot on a Raspberry Pi. Final-year project, no big deal.',
    ],
    'project-hotel-management-system': [
      'Hotel bookings, admin dashboard, JWT auth. Properly sturdy.',
      'Room images live in AWS S3. Even hotels need a cloud.',
    ],
    'project-rag-document-qa': [
      'RAG: upload a PDF, ask it anything. It stays on topic.',
      'BMC Hackademia top 3, built in 48 hours.',
    ],
    'project-personal-finance-management': [
      'Personal finance, with a 3NF MySQL schema. Fancy.',
      'Swing dashboard, XChart charts, savings goals. Old school, still cute.',
    ],
    'hero-avatar': [
      ['Sachin got a 3D avatar. I’m still a flat ball.', 'suspicious'],
      'Look at that depth. I only have eyes.',
      'Fine, he waves nicely. I can’t even wave.',
    ],
    footer: [
      'Secret spot! Nobody hovers the footer. Except you.',
      'You read the footer. Respect. Also, thanks to my makers!',
    ],
  },
  // Hovering Strobi for a while.
  hoverLong: [
    ['Still hovering? Suspicious.', 'suspicious'],
    ['That’s a long hover. I’m watching you now.', 'suspicious'],
    ['Okay, this is getting weird. We’re both staring.', 'suspicious'],
  ],

  // A section scrolls into view for the first time this session.
  section: {
    proof: [
      'Ooh, receipts. FOSS Hack 2025 winner, front and centre.',
      'Proof strip! Brags, but with evidence.',
    ],
    'selected-work': [
      'Selected work. Scribly’s poster is staring at me.',
      'Four picks. I’d click Scribly first, no bias.',
      'Pick a card. I’ll act surprised.',
    ],
    'home-skills': [
      'Sachin’s stack, racked up and glowing.',
      'A tidy rack! Hover a block, I dare you.',
    ],
    closing: [
      'Last stop! Get in touch, I’ll hold the door.',
      'That’s the end. Say hi before you go?',
    ],
    experience: [
      'Experience! Vimo, Ab-normal Home, Meta Craftlab. In that order.',
      'Scroll slowly. This is the good gossip.',
    ],
    education: [
      'School bit! Symbiosis, with CGPA 8+/10.',
      'Symbiosis, 2022 to 2026. Sounds like it went well.',
    ],
    'about-skills': [
      'Seven skill groups. Sachin likes things organised.',
      'Skills, grouped neatly. I’m a fan of tidy.',
    ],
    'earlier-work': [
      'Earlier work! Old projects, still looking good.',
      'Older projects below. Yes, there are plenty.',
    ],
  },

  idle: [
    ['Hello? I’m getting sleepy.', 'drowsy'],
    ['Zzz. Wake me if something happens.', 'drowsy'],
    ['Nothing’s moving. I’ll just blink slowly.', 'drowsy'],
    ['Quiet in here. Recharging my vibes.', 'drowsy'],
  ],
  wake: [
    ['I’m up, I’m up!', 'surprised'],
    ['Oh! Movement! Hi again.', 'happy'],
    'Was I snoring? Don’t answer.',
    'Back online. Pure vibes restored.',
  ],

  copy: [
    ['Copied! Sachin will be so happy.', 'celebrate'],
    ['Email copied. Go forth and say hi.', 'celebrate'],
    ['Thank you! I got a little teary.', 'celebrate'],
  ],
  theme: {
    dark: [
      ['Dark mode, my favourite.', 'happy'],
      'Lights off, vibes on.',
      'Now I glow properly. Dark mode suits me.',
    ],
    light: [
      ['Lights on!', 'excited'],
      'Bright! Someone pass me sunglasses.',
      'Light mode. Bold of you. I respect it.',
    ],
  },

  // Easter eggs.
  clickEgg: [
    ['Five clicks! I’m dizzy. Wheee.', 'laughing'],
    ['Okay okay, I’m laughing. Stop tickling me.', 'laughing'],
    ['Click storm! My bubbles can’t keep up.', 'laughing'],
  ],
  konami: [
    ['Konami code! Sachin would approve. Probably.', 'celebrate'],
    ['Up, up, down, down. You’re a legend.', 'celebrate'],
    ['Cheat code accepted. Nothing changed, I just feel special.', 'celebrate'],
  ],

  menu: ['Where to?', 'Lead the way, friend.', 'Pick a destination.'],
  muted: ['Shh mode on. I’ll only talk when poked.'],
  unmuted: [['I’m back! Missed talking.', 'happy']],
};

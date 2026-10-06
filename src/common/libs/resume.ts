import fs from 'fs';
import path from 'path';

// The resume link stays hidden until public/resume.pdf is added (docs/TODO.md). Server-side only.
export const resumeExists = () =>
  fs.existsSync(path.join(process.cwd(), 'public', 'resume.pdf'));

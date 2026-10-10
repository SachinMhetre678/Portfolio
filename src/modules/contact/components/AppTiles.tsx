import { APPS, AppBlock } from './apps';

// Phones (< 768px): no device frame, each tile goes straight to its link.
const AppTiles = () => (
  <section
    aria-labelledby='social-title'
    data-strobi-section='contact-apps'
    className='rack-scope md:hidden'
  >
    <h2 id='social-title' className='text-h2'>
      Find me online
    </h2>
    <ul className='mt-6 grid grid-cols-3 gap-x-3 gap-y-8'>
      {APPS.map((app) => (
        <li key={app.id} className='flex justify-center'>
          <a
            href={app.href}
            data-strobi={`app-${app.id}`}
            {...(app.external
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
            className='rack-block-wrap flex w-24 flex-col items-center gap-3 rounded-control focus-visible:outline-offset-4'
          >
            <AppBlock app={app} />
            <span className='text-center text-body-sm text-ink'>
              <span className='sr-only'>Open </span>
              {app.label}
              {app.external && (
                <span className='sr-only'> (opens in new tab)</span>
              )}
            </span>
          </a>
        </li>
      ))}
    </ul>
  </section>
);

export default AppTiles;

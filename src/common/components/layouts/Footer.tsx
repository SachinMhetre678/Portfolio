const Footer = () => (
  <footer className='mx-auto max-w-7xl px-4 pb-10 md:px-8'>
    <p className='text-caption text-ink-subtle'>
      © {new Date().getFullYear()} with{' '}
      <span role='img' aria-label='love'>
        ❤
      </span>{' '}
      by Sachin
    </p>
    <p data-strobi='credit' className='mt-2 text-caption text-ink-subtle'>
      Mascot made with{' '}
      <a
        href='https://github.com/smontlouis/bible-strong-avatar-lab'
        target='_blank'
        rel='noopener noreferrer'
        className='underline underline-offset-2 hover:text-ink'
      >
        Bible Strong Avatar Lab
        <span className='sr-only'> (opens in new tab)</span>
      </a>{' '}
      by Stéphane Montlouis-Calixte (AGPL-3.0)
    </p>
  </footer>
);

export default Footer;

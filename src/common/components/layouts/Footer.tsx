const Footer = () => (
  <footer className='mx-auto max-w-7xl px-4 pb-10 md:px-8'>
    <p className='text-caption text-ink-subtle'>
      © {new Date().getFullYear()} with{' '}
      <span role='img' aria-label='love'>
        ❤
      </span>{' '}
      by Sachin
    </p>
  </footer>
);

export default Footer;

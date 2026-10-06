interface PageHeadingProps {
  title: string;
  description?: string;
}

const PageHeading = ({ title, description }: PageHeadingProps) => (
  <header className='space-y-3'>
    <h1 className='text-h1-mobile md:text-h1'>{title}</h1>
    {description && (
      <p className='max-w-prose text-body-lg text-ink-subtle'>{description}</p>
    )}
  </header>
);

export default PageHeading;

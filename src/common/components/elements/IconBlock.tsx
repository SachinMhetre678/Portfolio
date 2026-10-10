import Image from 'next/image';

export interface IconBlockProps {
  icon: string; // file name in public/icons/stack
  mono?: boolean; // single-colour logo, drawn dark on a light plate so it reads in both themes
  plate?: boolean; // dark-ish colour logo that needs the light plate too
}

// The glossy block from the stack rack. Needs a `.rack-scope` ancestor for the gloss and shade tokens.
const IconBlock = ({ icon, mono, plate }: IconBlockProps) => {
  const src = `/icons/stack/${icon}.svg`;
  const onPlate = mono || plate;
  return (
    <span className='rack-block' aria-hidden='true'>
      <span className={onPlate ? 'rack-plate' : 'contents'}>
        {mono ? (
          <span
            className='block h-6 w-6 bg-[#181816] md:h-7 md:w-7'
            style={{
              WebkitMaskImage: `url(${src})`,
              maskImage: `url(${src})`,
              WebkitMaskSize: 'contain',
              maskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
              maskPosition: 'center',
            }}
          />
        ) : (
          <Image
            src={src}
            alt=''
            width={32}
            height={32}
            className={
              onPlate ? 'h-6 w-6 md:h-7 md:w-7' : 'h-7 w-7 md:h-8 md:w-8'
            }
          />
        )}
      </span>
    </span>
  );
};

export default IconBlock;

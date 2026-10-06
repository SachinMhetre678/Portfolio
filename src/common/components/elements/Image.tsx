import NextImage, { ImageProps } from 'next/image';

// Thin wrapper so every image gets the same defaults: lazy below the fold, default quality.
const Image = (props: ImageProps) => <NextImage {...props} />;

export default Image;

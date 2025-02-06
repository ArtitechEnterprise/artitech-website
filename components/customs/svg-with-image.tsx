import { cn } from '@/lib/utils';
import React from 'react';

const SvgWithImage = ({
  imageUrl,
  className,
}: {
  imageUrl: string;
  className?: string;
}) => (
  <svg
    width='100%'
    height='100%'
    viewBox='0 0 1628 910'
    xmlns='http://www.w3.org/2000/svg'
    className={cn('w-full h-full', className)}
  >
    <defs>
      <clipPath id='clip-shape'>
        <path d='M0 50C0 22.3858 22.3858 0 50 0H1578C1605.61 0 1628 22.3858 1628 50V614C1628 641.614 1605.61 664 1578 664H1252.5C1226.27 664 1205 685.266 1205 711.5C1205 737.734 1183.73 759 1157.5 759H1061C1033.39 759 1011 781.386 1011 809V860C1011 887.614 988.614 910 961 910H50C22.3858 910 0 887.614 0 860V50Z' />
      </clipPath>
    </defs>
    <image
      href={imageUrl}
      x='0'
      y='0'
      width='100%'
      height='100%'
      className='w-full h-full object-cover'
      clipPath='url(#clip-shape)'
    />
  </svg>
);

export default SvgWithImage;

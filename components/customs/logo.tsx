import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Logo = () => {
  return (
    <div className='w-[200px] flex-shrink-0 mb-5 flex items-center justify-center'>
      <Link href={'/'} className='w-full h-full'>
        <Image
          src={'/logo-dark.jpg'}
          alt='Artitech logo'
          title='Artitech'
          loading='lazy'
          className='w-[200px] h-[50px] object-contain object-left'
          width={200}
          height={100}
        />
      </Link>
    </div>
  );
};

export default Logo;

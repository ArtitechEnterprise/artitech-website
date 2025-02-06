import React from 'react';
import NavLinks from './nav-links';
import Links from '@/data/links';
const Navigations = () => {
  return (
    <nav className='  flex-1'>
      <ul className='flex items-end  justify-center gap-12'>
        {Links.map((link) => (
          <NavLinks key={link.path} href={link.href} path={link.path} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigations;

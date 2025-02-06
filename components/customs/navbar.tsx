import React from 'react';
import Container from './container';
import Navigations from './navigations';
import Logo from './logo';
import RightHeader from './right-header';

const Navbar = () => {
  return (
    <header className='py-4 shadow-sm'>
      <Container className='flex items-center justify-between'>
        {/* logo */}
        <Logo />
        {/* navigations */}
        <Navigations />
        {/* changement de langue et theme */}
        <RightHeader />
      </Container>
    </header>
  );
};

export default Navbar;

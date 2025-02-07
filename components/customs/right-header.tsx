import React from 'react';
import SwitchTheme from './switch-theme';
import SwitchLanguage from './switch-language';

const RightHeader = () => {
  return (
    <div className=' flex items-center justify-center gap-5'>
      <SwitchTheme />
      <SwitchLanguage />
    </div>
  );
};

export default RightHeader;

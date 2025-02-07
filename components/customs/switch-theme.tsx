'use client';
import { useTheme } from 'next-themes';
import { Button } from '../ui/button';
import { Moon, Sun } from 'lucide-react';
const SwitchTheme = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant={'ghost'}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      size={'icon'}
      className='flex-shrink-0'
    >
      {theme === 'light' ? <Moon className='' /> : <Sun className='' />}
    </Button>
  );
};

export default SwitchTheme;

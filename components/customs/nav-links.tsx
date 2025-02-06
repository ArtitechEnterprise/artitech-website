'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinks = ({ href, path }: { href: string; path: string }) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <li className='py-2'>
      <Link
        href={href}
        className={`hover:underline hover:underline-offset-4 hover:text-[#222C2F] transition duration-300 ease-in-out  ${
          href === pathname
            ? 'text-[#222C2F] opacity-100 font-semibold underline underline-offset-4'
            : 'opacity-60'
        }`}
      >
        {path}
      </Link>
    </li>
  );
};

export default NavLinks;

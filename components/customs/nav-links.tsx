"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = ({ href, path }: { href: string; path: string }) => {
  const pathname = usePathname();
  return (
    <li className="py-2">
      <Link
        href={href}
        className={`transition duration-300 ease-in-out hover:text-[#222C2F] hover:underline hover:underline-offset-4 ${
          href === pathname
            ? "font-semibold text-[#222C2F] underline underline-offset-4 opacity-100"
            : "opacity-60"
        }`}
      >
        {path}
      </Link>
    </li>
  );
};

export default NavLinks;

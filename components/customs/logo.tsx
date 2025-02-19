"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useTheme } from "next-themes";

const Logo = () => {
  const { theme } = useTheme();
  return (
    <div className="flex flex-shrink-0 items-center justify-start">
      <Link href={"/"}>
        <Image
          src={theme === "light" ? "/logo-dark.png" : "/logo-light.png"}
          alt="Artitech logo"
          title="Artitech"
          loading="lazy"
          className="mb-4 w-fit object-contain md:mb-0 md:h-[65px] md:w-[200px]"
          width={200}
          height={100}
        />
      </Link>
    </div>
  );
};

export default Logo;

"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useTheme } from "next-themes";

const Logo = () => {
  const { theme } = useTheme();
  return (
    <div className="flex max-w-fit flex-shrink-0 items-center justify-center">
      <Link href={"/"}>
        <Image
          src={theme === "light" ? "/logo-dark.jpg" : "/logo-light.jpg"}
          alt="Artitech logo"
          title="Artitech"
          loading="lazy"
          className="w-fit object-contain"
          width={200}
          height={100}
        />
      </Link>
    </div>
  );
};

export default Logo;

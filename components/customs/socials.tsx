import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const SocialsIcons = [
  "/new-twitter.svg",
  "/linkedin-02.svg",
  "/facebook-02.svg",
];
const Socials = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex w-fit items-center gap-4 rounded-full border-2 border-[#DAE3E5] px-6 py-2",
        className,
      )}
    >
      <h3 className="text-lg font-semibold">Follow</h3>
      <div className="flex items-center gap-2">
        {SocialsIcons.map((icon, idx) => (
          <a
            href="#"
            target="_blank"
            key={idx}
            className="relative flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#DAE3E5] p-2"
          >
            <Image
              src={icon}
              alt={icon}
              loading="lazy"
              width={100}
              height={100}
              className="w-[100px] object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Socials;

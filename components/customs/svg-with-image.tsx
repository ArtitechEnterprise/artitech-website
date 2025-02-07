"use client";
import { cn } from "@/lib/utils";

const SvgWithImage = ({
  imageUrl,
  className,
  children,
}: {
  imageUrl?: string;
  className?: string;
  children?: React.ReactNode;
}) => (
  <div className="relative overflow-hidden">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1628 910"
      fill="000"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-full w-full", className)}
    >
      <defs>
        {/* Clip path pour la forme */}
        <clipPath id="clip-shape">
          <path d="M0 50C0 22.3858 22.3858 0 50 0H1578C1605.61 0 1628 22.3858 1628 50V614C1628 641.614 1605.61 664 1578 664H1252.5C1226.27 664 1205 685.266 1205 711.5C1205 737.734 1183.73 759 1157.5 759H1061C1033.39 759 1011 781.386 1011 809V860C1011 887.614 988.614 910 961 910H50C22.3858 910 0 887.614 0 860V50Z" />
        </clipPath>

        {/* Filtre d'ombre */}
        <filter id="shadow-filter" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="8" />
          <feOffset dx="10" dy="10" result="offsetblur" />
          <feFlood flood-color="rgba(0, 0, 0, 0.5)" />
          <feComposite in2="offsetblur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Ombre portée */}
      <path
        d="M0 50C0 22.3858 22.3858 0 50 0H1578C1605.61 0 1628 22.3858 1628 50V614C1628 641.614 1605.61 664 1578 664H1252.5C1226.27 664 1205 685.266 1205 711.5C1205 737.734 1183.73 759 1157.5 759H1061C1033.39 759 1011 781.386 1011 809V860C1011 887.614 988.614 910 961 910H50C22.3858 910 0 887.614 0 860V50Z"
        filter="url(#shadow-filter)"
        fill="#000"
        fillOpacity="0.3"
      />

      {/* Image avec clip-path */}
      <image
        href={imageUrl}
        x="0"
        y="0"
        width="100%"
        height="100%"
        className="h-full w-full object-cover brightness-75"
        clipPath="url(#clip-shape)"
      />
    </svg>
    {children}
  </div>
);

export default SvgWithImage;

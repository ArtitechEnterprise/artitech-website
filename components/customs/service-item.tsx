import servicesDatas from "@/data/services";
import Image from "next/image";
import React from "react";

type Props = (typeof servicesDatas)[number] &
  Pick<(typeof servicesDatas)[number], "title" | "text" | "image" | "id">;

const ServiceItem = ({ title, text, image, id }: Props) => {
  return (
    <div className="flex flex-1 justify-between gap-4 even:flex-row-reverse">
      {/* left */}
      <div className="w-1/2 space-y-4">
        <h2 className="flex scroll-m-20 items-center gap-1 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#DAE3E5] p-1">
            {id}
          </span>
          <span>{title}</span>
        </h2>
        <p className="leading-8 [&:not(:first-child)]:mt-6">{text}</p>
      </div>

      {/* right */}
      <div className="relative">
        {/* image */}
        <Image
          src={image}
          alt="services"
          width={600}
          height={600}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default ServiceItem;

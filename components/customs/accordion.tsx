"use client";

import React, { useCallback, useEffect, useState } from "react";
import { AccordionItem, type AccordionItemProps } from "./accordion-item";
import Image from "next/image";

interface AccordionProps {
  items: AccordionItemProps[];
  allowMultiple?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
}) => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleItem = useCallback(
    (index: number) => {
      setCurrentIndex(index);
      setOpenItems((prevOpenItems) => {
        if (allowMultiple) {
          return prevOpenItems.includes(index)
            ? prevOpenItems.filter((i) => i !== index)
            : [...prevOpenItems, index];
        } else {
          return prevOpenItems.includes(index) ? [] : [index];
        }
      });
    },
    [allowMultiple],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % items.length;
        setOpenItems([newIndex]);
        return newIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [items.length, openItems]);

  return (
    <div className="hidden gap-5 lg:flex">
      <div className="w-full space-y-2 md:w-1/2">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            {...item}
            isOpen={openItems.includes(index)}
            onToggle={() => toggleItem(index)}
          />
        ))}
      </div>
      <div className="hidden h-[400px] md:block md:w-1/2">
        <Image
          src={items[currentIndex].image}
          alt={`Image for item ${currentIndex + 1}`}
          width={400}
          height={300}
          className="h-full w-full rounded-lg object-cover object-center shadow-lg"
        />
      </div>
    </div>
  );
};

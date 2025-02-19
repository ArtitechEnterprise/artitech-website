"use client";

import React, { useCallback, useState } from "react";
import { AccordionItem, type AccordionItemProps } from "./accordion-item";

interface AccordionProps {
  items: AccordionItemProps[];
  allowMultiple?: boolean;
}

export const AccordionMobile: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
}) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = useCallback(
    (index: number) => {
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

  return (
    <div className="mb-8 flex gap-5 md:hidden">
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
    </div>
  );
};

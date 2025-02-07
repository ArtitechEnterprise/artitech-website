"use client";

import type React from "react";
import { useState } from "react";
import { AccordionItem, type AccordionItemProps } from "./accordion-item";

interface AccordionProps {
  items: AccordionItemProps[];
  allowMultiple?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
}) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prevOpenItems) => {
      if (allowMultiple) {
        return prevOpenItems.includes(index)
          ? prevOpenItems.filter((i) => i !== index)
          : [...prevOpenItems, index];
      } else {
        return prevOpenItems.includes(index) ? [] : [index];
      }
    });
  };

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          {...item}
          isOpen={openItems.includes(index)}
          onToggle={() => toggleItem(index)}
        />
      ))}
    </div>
  );
};

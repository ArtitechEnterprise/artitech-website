"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ReadMoreLessProps {
  text: string;
  maxLength?: number;
}

export default function ReadMoreLess({
  text,
  maxLength = 150,
}: ReadMoreLessProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const truncatedText = text.slice(0, maxLength);
  const shouldTruncate = text.length > maxLength;

  return (
    <div className="space-y-2">
      <AnimatePresence initial={false}>
        <motion.div
          key={isExpanded ? "expanded" : "collapsed"}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-sm leading-8">
            {isExpanded || !shouldTruncate ? text : `${truncatedText}...`}
          </p>
        </motion.div>
      </AnimatePresence>
      {shouldTruncate && (
        <Button
          variant="link"
          size="sm"
          onClick={toggleExpand}
          className="flex items-center gap-1 px-0"
        >
          {isExpanded ? (
            <>
              Lire moins <ChevronUp className="h-4 w-4" />
            </>
          ) : (
            <>
              Lire plus <ChevronDown className="h-4 w-4" />
            </>
          )}
        </Button>
      )}
    </div>
  );
}

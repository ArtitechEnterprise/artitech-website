import React from 'react';
import { cn } from '@/lib/utils';
const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={cn('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
    >
      {children}
    </section>
  );
};

export default Container;

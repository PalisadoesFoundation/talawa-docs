import React from 'react';
import type { JSX } from 'react';

interface ISectionProps {
  element?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  className?: string;
  background?: 'light' | 'dark' | 'tint';
}

function Section({
  element = 'section',
  children,
  className,
  background = 'light',
}: ISectionProps) {
  const El = element;
  return (
    <El
      className={
        className
          ? `Section ${className} ${background}`
          : `Section ${background}`
      }
    >
      {children}
    </El>
  );
}

export default Section;

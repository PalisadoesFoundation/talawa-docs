import React from 'react';

interface IActionButtonProps {
  href: string;
  type?: 'primary' | 'secondary';
  target?: string;
  children: React.ReactNode;
  buttonClassName?: string;
}

function ActionButton({
  href,
  type = 'primary',
  target,
  children,
  buttonClassName,
}: IActionButtonProps) {
  return (
    <a
      className={`ActionButton ${type} ${buttonClassName}`}
      rel="noopener"
      href={href}
      target={target}
    >
      {children}
    </a>
  );
}

export default ActionButton;

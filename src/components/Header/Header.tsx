import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { HeaderContent } from "@/components/Header/Header.style";

interface HeaderProps {
  title: string;
  asChild?: boolean;
  className?: string;
}

export const Header = ({ title, asChild, className }: HeaderProps) => {
  const Comp = asChild ? Slot : 'h2';

  return (
    <Comp className={clsx(
      'text-gray-100 font-bold font-sans',
      { 'text-lg': 'sm' },
      className
    )}>
      <HeaderContent>
        { title || 'React Next Docker' }
      </HeaderContent>
    </Comp>
  )
};

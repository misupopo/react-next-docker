import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { HeaderContent } from "@/components/Header/Header.style";

interface HeaderProps {
  size?: 'sm' | 'md' | 'lg';
  title: string;
  asChild?: boolean;
  className?: string;
  children: ReactNode;
}

export const Header = ({ size="lg", children, title, asChild, className }: HeaderProps) => {
  const Comp = asChild ? Slot : 'h2';

  return (
    <Comp className={clsx(
      'text-gray-100 font-bold font-sans',
      {
        'text-lg': size === 'sm',
        'text-xl': size === 'md',
        'text-2xl': size === 'lg',
      },
      className
    )}>
      <HeaderContent>
        { title || 'React Next Docker' }
        <div>{ children }</div>
      </HeaderContent>
    </Comp>
  )
};

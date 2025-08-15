import React from 'react'
import { cn } from '@/lib/utils'

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'gradient';
} & Omit<React.ComponentPropsWithoutRef<'button'>, 'className' | 'children' | 'onClick'>

export default function Button({
  className,
  children,
  onClick,
  variant = 'primary',
  ...props
}: ButtonProps) {
  const baseClasses = "px-6 py-1 rounded-md cursor-pointer transition-all duration-300"
  const variantClasses = {
    primary: "bg-yellow-500 text-black font-bold hover:bg-yellow-400",
    gradient: "bg-gradient-to-r from-yellow-300 to-orange-300 hover:from-yellow-400 hover:to-orange-400",
  }
  return (
    <button 
      className={cn(
        baseClasses,
        variantClasses[variant],
        className
      )} 
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}
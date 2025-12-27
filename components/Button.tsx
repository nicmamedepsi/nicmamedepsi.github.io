import React from 'react';
import { cn } from '../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  className, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  ...props 
}) => {
  
  const variants = {
    // Changed to spring-iris (Purple) for a more unique, psychology-focused look
    primary: "bg-spring-iris text-white hover:bg-violet-700 shadow-sm shadow-spring-iris/30",
    outline: "border border-spring-iris text-spring-iris hover:bg-spring-iris/5",
    ghost: "text-brand-700 hover:bg-brand-50 hover:text-brand-800",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg",
  };

  return (
    <button 
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-spring-iris focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95",
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )} 
      {...props}
    >
      {children}
    </button>
  );
};
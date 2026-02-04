import React from 'react';
import { cn } from '../utils/cn';

interface BlobProps {
  className?: string;
  color?: 'green' | 'pink' | 'yellow' | 'purple' | 'orange' | 'brand';
  variant?: 'default' | 'slow' | 'static';
  delay?: string;
}

export const Blob: React.FC<BlobProps> = ({ 
  className, 
  color = 'brand', 
  variant = 'default',
  delay = '0s'
}) => {
  
  const colors = {
    green: "bg-spring-leaf/30",
    pink: "bg-spring-tulip/20",
    yellow: "bg-spring-sun/30",
    purple: "bg-spring-iris/20",
    orange: "bg-spring-poppy/30",
    brand: "bg-brand-300/30"
  };

  const animations = {
    default: "animate-morph",
    slow: "animate-morph-slow",
    static: ""
  };

  return (
    <div 
      className={cn(
        "absolute rounded-full mix-blend-multiply filter blur-[80px] opacity-70",
        colors[color],
        animations[variant],
        className
      )}
      style={{ animationDelay: delay }} 
    />
  );
};
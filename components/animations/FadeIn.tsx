import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

const directionClass: Record<string, string> = {
  up: 'animate-fade-in-up',
  down: 'animate-fade-in-down',
  left: 'animate-fade-in-left',
  right: 'animate-fade-in-right',
  none: 'animate-fade-in-none',
};

const FadeIn = ({ children, delay = 0, duration = 0.5, direction = 'up', className }: FadeInProps) => {
  return (
    <div
      className={`${className || ''} ${directionClass[direction]}`}
      style={{ animationDelay: `${delay}s`, animationDuration: `${duration}s` }}
    >
      {children}
    </div>
  );
};

export default FadeIn;

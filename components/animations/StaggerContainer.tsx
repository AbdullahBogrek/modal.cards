import React, { ReactNode } from 'react';

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  _staggerIndex?: number;
  _staggerDelay?: number;
}

const StaggerContainer = ({ children, staggerDelay = 0.05, className }: StaggerContainerProps) => {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            _staggerIndex: index,
            _staggerDelay: staggerDelay,
          });
        }
        return child;
      })}
    </div>
  );
};

const StaggerItem = ({ children, className, _staggerIndex = 0, _staggerDelay = 0.05 }: StaggerItemProps) => {
  return (
    <div
      className={`${className || ''} animate-fade-in-up`}
      style={{ animationDelay: `${_staggerIndex * _staggerDelay}s` }}
    >
      {children}
    </div>
  );
};

export { StaggerContainer, StaggerItem };

import React from 'react';

const motion = new Proxy(
  {},
  {
    get: (_target, prop) => {
      return React.forwardRef((props: any, ref: any) => {
        const { initial, animate, exit, variants, whileHover, whileTap, whileInView, transition, layout, ...rest } = props;
        const Tag = prop as any;
        return <Tag ref={ref} {...rest} />;
      });
    },
  }
);

const AnimatePresence = ({ children }: { children: React.ReactNode }) => <>{children}</>;

const useInView = () => true;
const useAnimation = () => ({ start: () => Promise.resolve(), set: () => {} });
const useReducedMotion = () => false;

export { motion, AnimatePresence, useInView, useAnimation, useReducedMotion };

import { useState, useEffect, useCallback, useRef } from 'react';
import { TemplateDefaultsProvider } from '../../contexts/ModalCustomizationContext';

import Modal1 from '../Modals/Modal1';
import Modal2 from '../Modals/Modal2';
import Modal3 from '../Modals/Modal3';
import Modal4 from '../Modals/Modal4';
import Modal5 from '../Modals/Modal5';
import Modal6 from '../Modals/Modal6';
import Modal7 from '../Modals/Modal7';
import Modal8 from '../Modals/Modal8';
import Modal9 from '../Modals/Modal9';
import Modal10 from '../Modals/Modal10';
import Modal11 from '../Modals/Modal11';
import Modal12 from '../Modals/Modal12';

const MODALS = [
  <Modal1 />, <Modal2 />, <Modal3 />, <Modal4 />,
  <Modal5 />, <Modal6 />, <Modal7 />, <Modal8 />,
  <Modal9 />, <Modal10 />, <Modal11 />, <Modal12 />,
];

const INTERVAL = 3500;

const Card = ({ templateId, className }: { templateId: number; className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    const fit = () => {
      const cw = container.clientWidth;
      const ch = container.clientHeight;
      const sw = content.scrollWidth;
      const sh = content.scrollHeight;
      if (cw === 0 || ch === 0 || sw === 0 || sh === 0) return;
      const scale = Math.min(cw / sw, ch / sh) * 0.9;
      content.style.transform = `translate(-50%, -50%) scale(${scale})`;
    };

    fit();

    if (typeof ResizeObserver !== 'undefined') {
      const ro = new ResizeObserver(fit);
      ro.observe(container);
      return () => ro.disconnect();
    }
  }, []);

  return (
    <div className={`hero-carousel-card ${className || ''}`}>
      <div className="p-2 pb-1.5">
        <div className="flex items-center gap-1 mb-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
          <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
        </div>
        <div ref={containerRef} className="hero-carousel-modal-preview">
          <div ref={contentRef} className="template-thumb-modal">
            <TemplateDefaultsProvider templateId={templateId}>
              {MODALS[templateId - 1]}
            </TemplateDefaultsProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

const POSITION_CLASSES = [
  'hero-carousel-pos-far-left',
  'hero-carousel-pos-left',
  'hero-carousel-pos-center',
  'hero-carousel-pos-right',
  'hero-carousel-pos-far-right',
];

const ModalShowcase = () => {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % MODALS.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  const getPositionClass = (cardIndex: number) => {
    let diff = cardIndex - index;
    if (diff > MODALS.length / 2) diff -= MODALS.length;
    if (diff < -MODALS.length / 2) diff += MODALS.length;
    if (diff >= -2 && diff <= 2) return POSITION_CLASSES[diff + 2];
    return 'hero-carousel-pos-hidden';
  };

  return (
    <div className="hero-showcase-container relative w-full h-[400px] md:h-[500px] lg:h-[550px]">
      <div className="hero-showcase-glow" />

      <div className="hero-carousel-track">
        {MODALS.map((_, i) => (
          <Card
            key={i}
            templateId={i + 1}
            className={getPositionClass(i)}
          />
        ))}
      </div>

      {/* Floating micro-stat: conversion */}
      <div className="hero-showcase-float-element hero-showcase-float-1 hidden lg:block">
        <div className="hero-showcase-mini-card">
          <div className="w-3 h-3 rounded-full bg-green-400 mr-2" />
          <span className="font-secondary text-sm font-medium text-text">+127% conversion</span>
        </div>
      </div>

      {/* Floating micro-stat: no code */}
      <div className="hero-showcase-float-element hero-showcase-float-2 hidden lg:block">
        <div className="hero-showcase-mini-card">
          <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
          </svg>
          <span className="font-secondary text-sm font-medium text-text">No code required</span>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {MODALS.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === index ? 'bg-primary w-4' : 'bg-border-light hover:bg-text-muted'}`}
            aria-label={`Template ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ModalShowcase;

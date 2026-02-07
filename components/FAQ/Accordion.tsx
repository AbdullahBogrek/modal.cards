import React, { useState, useRef, useEffect } from 'react'

interface AccordionProps {
  title: React.ReactNode
  content: React.ReactNode
}

export const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
    const [isShowing, setIsShowing] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
      if (isShowing && contentRef.current) {
        setHeight(contentRef.current.scrollHeight);
      } else {
        setHeight(0);
      }
    }, [isShowing]);

    const toggle = () => {
      setIsShowing(!isShowing);
    };

    return (
        <div className={`w-full border-b border-border-light ${isShowing ? 'bg-surface-alt' : 'bg-surface'} transition-colors`}>
            <h2>
                <button type="button" className="flex items-center justify-between w-full py-5 px-1 text-left" onClick={toggle} aria-expanded={isShowing}>
                    <span className={`font-primary font-semibold text-sm lg:text-base leading-6 pr-4 ${isShowing ? 'text-text' : 'text-text-muted'} hover:text-text transition-colors`}>{title}</span>
                    <svg className={`w-5 h-5 flex-shrink-0 text-text-muted transition-transform ${isShowing ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </h2>
            <div
              role="region"
              ref={contentRef}
              style={{ height, overflow: 'hidden', transition: 'height 0.3s ease-in-out, opacity 0.3s ease-in-out', opacity: isShowing ? 1 : 0 }}
            >
              <p className="pb-5 px-1 pr-12 text-text-secondary font-primary font-normal text-sm leading-relaxed">{content}</p>
            </div>
        </div>
    );
  }

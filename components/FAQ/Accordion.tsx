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
        <div className={`${isShowing ? "bg-surface-alt p-6" : "bg-surface p-6"} w-full`}>
            <h2>
                <button type="button" className="accordion-button" onClick={toggle} aria-expanded={isShowing}>
                    <span className={`accordion-button-text ${isShowing ? "text-text" : "text-text-muted" } hover:text-primary pr-4 lg:pr-0`}>{title}</span>
                    <i>
                        {isShowing ? (<img src="/assets/remove_circle_outline.svg" className='w-6 h-6'/>)
                            : (<img src="/assets/add_circle_outline.svg" className='w-6 h-6'/>)
                        }
                    </i>
                </button>
            </h2>
            <div
              role="region"
              ref={contentRef}
              style={{ height, overflow: 'hidden', transition: 'height 0.3s ease-in-out, opacity 0.3s ease-in-out', opacity: isShowing ? 1 : 0 }}
              className="flex- items-center justify-start w-full"
            >
              <p className="mb-2 pr-14 lg:pr-60 text-text font-primary font-normal text-base">{content}</p>
            </div>
        </div>
    );
  }

import React, { useRef, useState } from 'react'

interface AccordionProps {
  title: React.ReactNode
  content: React.ReactNode
}


export const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
    const [isShowing, setIsShowing] = useState(false);

    const toggle = () => {
      setIsShowing(!isShowing);
    };

    return (
        <div className={`${isShowing ? "bg-[#F5F5F5] p-6" : "bg-white p-6"} w-full`}>
            <h2>
                <button type="button" className="accordion-button" onClick={toggle}>
                    <span className={`accordion-button-text ${isShowing ? "text-black" : "text-[#777777]" } hover:text-[#7D4AEA] pr-4 lg:pr-0`}>{title}</span>
                    <i>
                        {isShowing ? (<img src="/assets/remove_circle_outline.svg" className='w-6 h-6'/>) 
                            : (<img src="/assets/add_circle_outline.svg" className='w-6 h-6'/>)
                        }
                    </i>
                </button>
            </h2>
            <div className={`${isShowing ? "block" : "hidden"} flex- items-center justify-start w-full`}>
                <p className="mb-2 pr-14 lg:pr-60 text-black font-primary font-normal text-base">{content}</p>
            </div>
        </div>
    );
  }  
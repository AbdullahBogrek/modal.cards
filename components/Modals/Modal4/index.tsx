import React from 'react'
import { useModalCustomizationContext } from "../../../contexts/ModalCustomizationContext";

const index = () => {
  const { logo, title, subtitle, bodyText, button1, button2, textColor, buttonColor, borderColor, backgroundColor } = useModalCustomizationContext();

  return (
          <div className="flex flex-col justify-center items-center px-16 py-8 relative text-center border shadow-xl rounded-xl w-[480px]" style={{ backgroundColor, borderColor }}>

            <div className="inline-flex justify-center items-center w-[90px] h-[90px] mb-6 rounded-full" style={{ backgroundColor: buttonColor }}>
              <img src={logo} className='w-12 h-12'/>
            </div>

            <h2 className='font-secondary font-bold text-3xl mb-4' style={{ color: textColor }}>{title}</h2>
            <h4 className='font-secondary font-normal text-xl mb-6' style={{ color: textColor }}>{subtitle}</h4>

            <p className='font-secondary font-normal text-sm text-[#777777] mb-7'>{bodyText}</p>

            <div className="grid grid-rows-2 gap-4 w-full">
                <button className='font-secondary font-normal text-white text-base py-3.5 rounded-lg' style={{ backgroundColor: buttonColor }}>{button2}</button>
                <button className='outline outline-offset-0 outline-1 font-secondary font-medium text-base py-3.5 rounded-lg' style={{ outlineColor: borderColor, backgroundColor, color: textColor }}>{button1}</button>
            </div>

            <div className="absolute top-5 right-5">
              <img src="/assets/modal_close_black.svg" className='w-9 h-9'/>
            </div>
          </div>
  )
}

export default index

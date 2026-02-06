import React from 'react'
import { useModalCustomizationContext } from "../../../contexts/ModalCustomizationContext";

const index = () => {
  const { title, subtitle, button2, textColor, buttonColor, borderColor, backgroundColor } = useModalCustomizationContext();

  return (
          <div className="flex flex-col justify-center items-center px-16 py-8 relative text-center border shadow-xl rounded-xl w-[480px]" style={{ backgroundColor, borderColor }}>

            <h2 className='font-secondary font-bold text-3xl mb-4' style={{ color: textColor }}>{title}</h2>
            <h4 className='font-secondary font-normal text-xl mb-6' style={{ color: textColor }}>{subtitle}</h4>

            <div className="grid grid-rows-1 w-full">
                <button className='font-secondary font-medium text-white text-base py-3.5 rounded-lg' style={{ backgroundColor: buttonColor }}>{button2}</button>
            </div>

            <div className="absolute top-5 right-5">
              <img src="/assets/modal_close_black.svg" className='w-9 h-9'/>
            </div>

          </div>
  )
}

export default index

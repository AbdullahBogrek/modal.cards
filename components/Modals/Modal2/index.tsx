import React from 'react'
import { useModalCustomizationContext } from "../../../contexts/ModalCustomizationContext";

const index = () => {
  const { title, subtitle, button1, button2, image, textColor, buttonColor, borderColor, backgroundColor } = useModalCustomizationContext();

  return (
          <div className="flex flex-col justify-center items-center relative border shadow-xl rounded-xl w-[480px] overflow-hidden" style={{ backgroundColor, borderColor }}>

            <div className="h-[240px] w-full overflow-hidden">
                <img src={image || "/assets/modal2_cover.png"} className='w-full h-full object-cover'/>
            </div>

            <div className="px-16 pb-8 w-full text-center">
                <h2 className='font-secondary font-bold text-3xl mb-4 mt-8' style={{ color: textColor }}>{title}</h2>
                <h4 className='font-secondary font-normal text-xl mb-6' style={{ color: textColor }}>{subtitle}</h4>

                <div className="grid grid-rows-2 gap-4 w-full">
                    <button className='font-secondary font-medium text-white text-base py-3.5 rounded-lg' style={{ backgroundColor: buttonColor }}>{button2}</button>
                    <button className='outline outline-offset-0 outline-1 font-secondary font-medium text-base py-3.5 rounded-lg' style={{ outlineColor: borderColor, backgroundColor, color: textColor }}>{button1}</button>
                </div>

            </div>

            <div className="absolute top-5 right-5">
                <img src="/assets/modal_close_black.svg" className='w-9 h-9'/>
            </div>

          </div>
  )
}

export default index

import React from 'react'
import { useModalCustomizationContext } from "../../../contexts/ModalCustomizationContext";

const index = () => {
  const { title, subtitle, inputPlaceholder1, inputPlaceholder2, button2, linkText1, linkText2, image, textColor, buttonColor, placeholderColor, borderColor, backgroundColor } = useModalCustomizationContext();

  return (
          <div className="relative rounded-xl w-[740px] h-[520px]">

            <div className="absolute inset-0 rounded-xl overflow-hidden shadow-xl">
                <img src={image || "/assets/modal11_cover.png"} className='w-full h-full object-cover'/>
            </div>

            <div className="px-10 py-8 text-start absolute z-10 rounded-xl shadow-xl border w-[52%] top-1/2 -translate-y-1/2 left-[46%]" style={{ backgroundColor, borderColor }}>
                <h2 className='font-secondary font-bold text-3xl mb-3' style={{ color: textColor }}>{title}</h2>
                <h4 className='font-secondary font-normal text-xl mb-6' style={{ color: textColor }}>{subtitle}</h4>

                <input type="text" className="w-full border text-base font-secondary font-normal rounded-lg p-[15px] mb-3" placeholder={inputPlaceholder1} required style={{ color: placeholderColor, borderColor }}/>
                <input type="text" className="w-full border text-base font-secondary font-normal rounded-lg p-[15px] mb-6" placeholder={inputPlaceholder2} required style={{ color: placeholderColor, borderColor }}/>

                <div className="grid grid-cols-1 w-full mb-4">
                    <button className='font-secondary font-medium text-white text-base py-3.5 rounded-lg' style={{ backgroundColor: buttonColor }}>{button2}</button>
                </div>

                <div className="inline-flex justify-between w-full">
                    <a href='/' className='font-secondary font-normal text-sm' style={{ color: textColor }}>{linkText1}</a>
                    <a href='/' className='font-secondary font-normal text-sm' style={{ color: textColor }}>{linkText2}</a>
                </div>

                <div className="absolute top-5 right-5">
                    <img src="/assets/modal_close_black.svg" className='w-9 h-9'/>
                </div>
            </div>

          </div>
  )
}

export default index

import React from 'react'
import { useModalCustomizationContext } from "../../../contexts/ModalCustomizationContext";

const index = () => {
  const { title, subtitle, bodyText, button1, button2, textColor, buttonColor, borderColor, backgroundColor } = useModalCustomizationContext();

  return (
          <div className="flex flex-col justify-center items-center relative border shadow-xl rounded-xl w-[480px] py-8" style={{ backgroundColor, borderColor }}>

            <h5 className='font-secondary font-medium text-lg mb-3' style={{ color: buttonColor }}>{bodyText}</h5>

            <h2 className='font-secondary font-bold text-3xl mb-3' style={{ color: textColor }}>{title}</h2>
            <h4 className='font-secondary font-normal text-xl mb-10' style={{ color: textColor }}>{subtitle}</h4>

            <div className="inline-flex flex-col mb-8 w-full px-16">
                <div className="flex flex-row items-center">
                    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-6 h-6 text-white border-[#777777] focus:ring-red" style={{ accentColor: buttonColor }}/>
                    <label htmlFor="default-radio-1" className="ml-2 text-lg font-secondary font-medium" style={{ color: textColor }}>Starter</label>
                </div>
                <p className='pl-9 font-secondary font-normal text-[#717791] text-sm mb-6'>1 free (then $15 per member / month)</p>

                <div className="flex flex-row items-center">
                    <input id="default-radio-2" type="radio" value="" name="default-radio" className="w-6 h-6 text-white border-[#777777] focus:ring-red" style={{ accentColor: buttonColor }}/>
                    <label htmlFor="default-radio-2" className="ml-2 text-lg font-secondary font-medium" style={{ color: textColor }}>Pro</label>
                </div>
                <p className='pl-9 font-secondary font-normal text-[#717791] text-sm mb-6'>$19 per member/month</p>

                <div className="flex flex-row items-center">
                    <input id="default-radio-3" type="radio" value="" name="default-radio" className="w-6 h-6 text-white border-[#777777] focus:ring-red" style={{ accentColor: buttonColor }}/>
                    <label htmlFor="default-radio-3" className="ml-2 text-lg font-secondary font-medium" style={{ color: textColor }}>Business</label>
                </div>
                <p className='pl-9 font-secondary font-normal text-[#717791] text-sm mb-6'>$29 per member/month</p>
            </div>

            <div className="grid grid-cols-2 gap-5 w-full px-16">
              <button className='outline outline-offset-0 outline-1 font-secondary font-medium text-base py-3.5 rounded-lg' style={{ outlineColor: borderColor, backgroundColor, color: textColor }}>{button1}</button>
              <button className='font-secondary font-medium text-white text-base py-3.5 rounded-lg' style={{ backgroundColor: buttonColor }}>{button2}</button>
            </div>

            <div className="absolute top-5 right-5">
                <img src="/assets/modal_close_black.svg" className='w-9 h-9'/>
            </div>

          </div>
  )
}

export default index

import React from 'react'

const index = () => {
  return (

          <div className="flex flex-col w-[480px] h-[550px] bg-white justify-center items-center relative border border-generator-gray shadow-xl rounded-xl">

            <h5 className='font-secondary font-medium text-primary text-lg mb-3'>PLANS</h5>

            <h2 className='font-secondary font-bold text-black text-3xl mb-3'>Choose best for you</h2>
            <h4 className='font-secondary font-normal text-black text-xl mb-10'>Only pay for the capacity that you use.</h4>

            <div className="inline-flex flex-col mb-8 w-full px-16">
                <div className="flex flex-row items-center">
                    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-6 h-6 text-white bg-primary border-accordion-gray focus:ring-red"/>
                    <label htmlFor="default-radio-1" className="ml-2 text-lg text-black font-secondary font-medium">Starter</label>
                </div>
                <p className='pl-9 font-secondary font-normal text-soluk-gray text-sm mb-6'>1 free (then $15 per member / month)</p>

                <div className="flex flex-row items-center">
                    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-6 h-6 text-white bg-primary border-accordion-gray focus:ring-red"/>
                    <label htmlFor="default-radio-1" className="ml-2 text-lg text-black font-secondary font-medium">Pro</label>
                </div>
                <p className='pl-9 font-secondary font-normal text-soluk-gray text-sm mb-6'>$19 per member/month</p>

                <div className="flex flex-row items-center">
                    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-6 h-6 text-white bg-primary border-accordion-gray focus:ring-red"/>
                    <label htmlFor="default-radio-1" className="ml-2 text-lg text-black font-secondary font-medium">Business</label>
                </div>
                <p className='pl-9 font-secondary font-normal text-soluk-gray text-sm mb-6'>$29 per member/month</p>
            </div>

            <div className="grid grid-cols-2 gap-5 w-full px-16">
              <button className='outline outline-offset-0 outline-1 outline-generator-gray bg-white hover:bg-generator-gray font-secondary font-medium text-black text-base py-3.5 rounded-lg'>Cancel</button>
              <button className='bg-primary font-secondary font-medium text-white text-base py-3.5 rounded-lg'>Continue</button>
            </div>
            
            <div className="absolute top-5 right-5">
                <img src="/assets/modal_close_black.svg" className='w-9 h-9'/>
            </div>

          </div>
  )
}

export default index
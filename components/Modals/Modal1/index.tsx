import React from 'react'

const index = () => {
  return (

          <div className="flex flex-col w-[480px] h-[446px] bg-white justify-center items-center px-16 relative shadow-xl">
            <div className="inline-flex justify-center items-center bg-primary w-[90px] h-[90px] mb-6 rounded-full">
              <img src="/assets/security_icon.svg" className='w-12 h-12'/>
            </div>

            <h2 className='font-secondary font-bold text-black text-3xl mb-4'>Security Code</h2>
            <h4 className='font-secondary font-normal text-black text-xl mb-8'>This code expires in 24 hours</h4>

            <input type="text" className="w-full border border-deneme hover:border-primary focus:border-primary text-black text-base font-secondary font-normal rounded-lg p-[15px] mb-6" placeholder="Code" required />

            <div className="grid grid-cols-2 gap-5 w-full">
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
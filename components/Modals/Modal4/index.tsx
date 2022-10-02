import React from 'react'

const index = () => {
  return (


          <div className="flex flex-col w-[480px] h-[516px] bg-white justify-center items-center px-16 relative text-center border border-generator-gray shadow-xl rounded-xl">

            <div className="inline-flex justify-center items-center bg-primary w-[90px] h-[90px] mb-6 rounded-full">
              <img src="/assets/trash_icon.svg" className='w-12 h-12'/>
            </div>

            <h2 className='font-secondary font-bold text-black text-3xl mb-4'>Security Code</h2>
            <h4 className='font-secondary font-normal text-black text-xl mb-6'>Your profile will be automatically deleted after 1 month.</h4>

            <p className='font-secondary font-normal text-sm text-accordion-gray mb-7 px-16'>You won’t be able to access to your profile after <span className='text-base text-black'>30.08.2021</span>.</p>

            <div className="grid grid-rows-2 gap-4 w-full">
                <button className='bg-primary font-secondary font-normal text-white text-base py-3.5 rounded-lg'>Continue</button>
                <button className='outline outline-offset-0 outline-1 outline-generator-gray bg-white hover:bg-generator-gray font-secondary font-medium text-black text-base py-3.5 rounded-lg'>Not now</button>
            </div>
            
            <div className="absolute top-5 right-5">
              <img src="/assets/modal_close_black.svg" className='w-9 h-9'/>
            </div>
          </div>
  )
}

export default index
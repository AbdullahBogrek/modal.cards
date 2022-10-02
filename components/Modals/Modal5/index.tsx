import React from 'react'

const index = () => {
  return (

          <div className="flex flex-col w-[480px] h-[285px] bg-white justify-center items-bottom px-16 relative text-center border border-generator-gray shadow-xl rounded-xl">
            
            <h2 className='font-secondary font-bold text-black text-3xl mb-4'>The file is on it's way</h2>
            <h4 className='font-secondary font-normal text-black text-xl mb-6'>You’ll get an notified when the receiver has opened the email.</h4>

            <div className="grid grid-rows-1 w-full">
                <button className='bg-primary font-secondary font-medium text-white text-base py-3.5 rounded-lg'>Go to dashboard</button>
            </div>
            
            <div className="absolute top-5 right-5">
              <img src="/assets/modal_close_black.svg" className='w-9 h-9'/>
            </div>

          </div>

  )
}

export default index
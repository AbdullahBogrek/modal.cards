import React from 'react'

const index = () => {
  return (
          <div className="flex flex-col w-[480px] h-[600px] bg-white justify-center items-center relative border border-[#EAEAEA] shadow-xl rounded-xl">

            <div className="h-1/2">
                <img src="/assets/modal2_cover.png" className='bg-fixed bg-no-repeat bg-cover'/>
            </div>

            <div className="h-1/2 px-16 w-full text-center">
                <h2 className='font-secondary font-bold text-black text-3xl mb-4 mt-8'>Install local now</h2>
                <h4 className='font-secondary font-normal text-black text-xl mb-6'>We’ve gone native, try it!</h4>

                <div className="grid grid-rows-2 gap-4 w-full">
                    <button className='bg-[#7D4AEA] font-secondary font-medium text-white text-base py-3.5 rounded-lg'>Continue</button>
                    <button className='outline outline-offset-0 outline-1 outline-[#EAEAEA] bg-white hover:bg-[#EAEAEA] font-secondary font-medium text-black text-base py-3.5 rounded-lg'>Not now</button>
                </div>
                
                <div className="absolute top-5 right-5">
                    <img src="/assets/modal_close_black.svg" className='w-9 h-9'/>
                </div>
            </div>

          </div>
  )
}

export default index
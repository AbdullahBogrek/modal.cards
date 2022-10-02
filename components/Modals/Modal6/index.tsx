import React from 'react'

const index = () => {
  return (
            <div className="flex flex-col w-[480px] h-[446px] bg-white justify-center items-bottom px-16 relative text-center border border-generator-gray shadow-xl rounded-xl">

                <div className="inline-flex justify-center">
                    <img src="/assets/percent_icon.svg" className='w-[90px] h-[90px] mb-6'/>
                </div>
                
                <h2 className='font-secondary font-bold text-black text-3xl mb-4'>Join our mail list</h2>
                <h4 className='font-secondary font-normal text-black text-xl mb-8'>Save up to 30% of your next order</h4>

                <input type="text" className="w-full border border-deneme hover:border-primary focus:border-primary text-black text-base font-secondary font-normal rounded-lg p-[15px] mb-6" placeholder="Enter your email" required />

                <div className="grid grid-cols-2 gap-5 w-full">
                    <button className='outline outline-offset-0 outline-1 outline-generator-gray bg-white hover:bg-generator-gray font-secondary font-medium text-black text-base py-3.5 rounded-lg'>Later</button>
                    <button className='bg-primary font-secondary font-medium text-white text-base py-3.5 rounded-lg'>Join now</button>
                </div>
                    
                <div className="absolute top-5 right-5">
                    <img src="/assets/modal_close_black.svg" className='w-9 h-9'/>
                </div>

            </div>
  )
}

export default index
import React from 'react'

const index = () => {
  return (
          <div className="flex flex-row w-[740px] h-[563px] relative rounded-xl">

            <div className="flex w-[550px] h-[563px] rounded-xl overflow-hidden shadow-xl">
                <img src="/assets/modal11_cover.png"/>
            </div>

            <div className="w-[380px] h-[443px] px-10 text-start absolute inset-0 z-10 bg-white top-[60px] left-[360px] rounded-xl shadow-xl">
                <h2 className='font-secondary font-bold text-black text-3xl mb-3 mt-8'>Sign up</h2>
                <h4 className='font-secondary font-normal text-black text-xl mb-6'>Join new adventure</h4>

                <input type="text" className="w-full border border-[#DDDDDD] hover:border-[#7D4AEA] focus:border-[#7D4AEA] text-black text-base font-secondary font-normal rounded-lg p-[15px] mb-3" placeholder="Enter full name" required />
                <input type="text" className="w-full border border-[#DDDDDD] hover:border-[#7D4AEA] focus:border-[#7D4AEA] text-black text-base font-secondary font-normal rounded-lg p-[15px] mb-6" placeholder="Enter your name" required />

                <div className="grid grid-cols-1 w-full mb-4">
                    <button className='bg-[#7D4AEA] font-secondary font-medium text-white text-base py-3.5 rounded-lg'>Sign up</button>
                </div>

                <div className="inline-flex justify-between w-full">
                    <a href='/' className='font-secondary font-normal text-sm text-black text-start'>Forgot password</a>
                    <a href='/' className='font-secondary font-normal text-sm text-black text-start'>Log in</a>
                </div>
                
                <div className="absolute top-5 right-5">
                    <img src="/assets/modal_close_black.svg" className='w-9 h-9'/>
                </div>
            </div>
            
          </div>
  )
}

export default index
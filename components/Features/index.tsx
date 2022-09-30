import React from 'react'

const index = () => {
  return (
    <section className='bg-white'>
      <div className="flex flex-wrap max-w-[1194px] mx-auto pt-24 text-center">
        <div className="section-title">Conversion & UX ready popups & modals</div>
        <div className="flex flex-col lg:flex-row mt-10 justify-center mx-auto lg:justify-start">
          <div className="w-full lg:w-1/3 h-64 bg-soft-gray rounded-xl py-12 mb-5 mx-0 lg:mx-6 lg:mb-0">
            <i className='flex justify-center mb-4'><img src="/assets/pixel_perfect.svg" className='w-12 h-12'/></i>
            <h5 className='mb-2 text-black font-primary font-semibold text-lg'>Pixel Perfect</h5>
            <p className='text-black font-primary font-normal text-sm px-12'>Helps you calculate your email marketing roi to measure success.</p>
          </div>
          <div className="w-full lg:w-1/3 h-64 bg-soft-gray rounded-xl py-12 mb-5 mx-0 lg:mx-6 lg:mb-0">
            <i className='flex justify-center mb-4'><img src="/assets/conversion_ready.svg" className='w-12 h-12'/></i>
            <p className='mb-2 text-black font-primary font-semibold text-lg'>Conversion Ready</p>
            <p className='text-black font-primary font-normal text-sm px-16'>Empowers your emails by generating afree code for a CTA in your subject line.</p>
          </div>
          <div className="w-full lg:w-1/3 h-64 bg-soft-gray rounded-xl py-12 mb-5 mx-0 lg:mx-6 lg:mb-0">
            <i className='flex justify-center mb-4'><img src="/assets/modern_and_useful.svg" className='w-12 h-12'/></i>
            <h5 className='mb-2 text-black font-primary font-semibold text-lg'>Modern & Useful</h5>
            <p className='text-black font-primary font-normal text-sm px-14'>Enables you to estimate the total profit of your investment on a popup service.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default index
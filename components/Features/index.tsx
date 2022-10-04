import React from 'react'

const index = () => {
  return (
    <section className='bg-white'>
      <div className="flex flex-wrap max-w-[1194px] mx-auto pt-24 text-center">
        <div className="section-title">Conversion & UX ready popups & modals</div>
        <div className="flex flex-col lg:flex-row mt-10 justify-center mx-auto lg:justify-start">
          <div className="features-card">
            <i className='features-card-icon'><img src="/assets/pixel_perfect.svg" className='w-12 h-12'/></i>
            <h5 className='features-card-title'>Pixel Perfect</h5>
            <p className='features-card-content px-12'>Helps you calculate your email marketing roi to measure success.</p>
          </div>
          <div className="features-card">
            <i className='features-card-icon'><img src="/assets/conversion_ready.svg" className='w-12 h-12'/></i>
            <p className='features-card-title'>Conversion Ready</p>
            <p className='features-card-content px-16'>Empowers your emails by generating afree code for a CTA in your subject line.</p>
          </div>
          <div className="features-card">
            <i className='features-card-icon'><img src="/assets/modern_and_useful.svg" className='w-12 h-12'/></i>
            <h5 className='features-card-title'>Modern & Useful</h5>
            <p className='features-card-content px-14'>Enables you to estimate the total profit of your investment on a popup service.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default index
import React from 'react'

const index = () => {
  return (
    <section className='mb-16 pt-32'>
      <div className="bg-white max-w-[1194px] mx-auto">
        <div className="grid grid-cols-1 mb-10 text-center">
          <h2 className='section-title'>Build great popups without code</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">

          <div className="footer-card">
            <div className="footer-card-icon">
              <img src="/assets/targeting_options1.svg" className='w-16 h-16'/>
            </div>
            <div className="text-center mt-6">
              <h5 className='footer-card-title'>Targeting Options</h5>
              <p className='features-card-text'>Target +26 trigger to your visitors</p>
            </div>
          </div>

          <div className="footer-card">
            <div className="footer-card-icon">
            <img src="/assets/no_code.svg" className='w-16 h-16'/>
            </div>
            <div className="text-center mt-6">
              <h5 className='footer-card-title'>No-Code</h5>
              <p className='features-card-text px-10'>No code required while you’re creating a popup</p>
            </div>
          </div>

          <div className="footer-card">
            <div className="footer-card-icon">
              <img src="/assets/targeting_options2.svg" className='w-16 h-16'/>
            </div>
            <div className="text-center mt-6">
              <h5 className='footer-card-title'>Targeting Options</h5>
              <p className='features-card-text px-5'>Integrated with your marketing and CRM platforms</p>
            </div>
          </div>

          <div className="footer-card">
            <div className="footer-card-icon">
              <img src="/assets/targeting_options3.svg" className='w-16 h-16'/>
            </div>
            <div className="text-center mt-6">
              <h5 className='footer-card-title'>Targeting Options</h5>
              <p className='features-card-text px-4'>Don’t worry about speed and Amazon AWS resources</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-16">
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <img src="/assets/popupsmart.svg" className='w-8 h-8' />
            </div>
            <h6 className='font-primary font-normal text-black text-sm leading-4 tracking-tight'>Powered by Popupsmart</h6>
          </div>
        </div>
      </div>
    </section>
  )
}

export default index
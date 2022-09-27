import React from 'react'

const index = () => {
  return (
    <section className='mb-16 pt-32'>
      <div className="bg-amber-300 max-w-[1194px] mx-auto">
        <div className="grid grid-cols-1 mb-10">
          <h2 className='section-title'>Build great popups without code</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">

          <div className="py-5 rounded-md flex-col items-center justify-center">
            <div className="flex justify-center items-center mx-auto w-32 h-32 bg-primary rounded-full">
              <img src="/assets/targeting_options1.svg" className='w-16 h-16'/>
            </div>
            <div className="text-center mt-6">
              <h5 className='font-primary font-semibold text-lg'>Targeting Options</h5>
              <p className='font-primary font-normal text-sm tracking-tight mt-2'>Target +26 trigger to your visitors</p>
            </div>
          </div>

          <div className="py-5 rounded-md flex-col items-center justify-center">
            <div className="flex justify-center items-center mx-auto w-32 h-32 bg-primary rounded-full">
            <img src="/assets/no_code.svg" className='w-16 h-16'/>
            </div>
            <div className="text-center mt-6">
              <h5 className='font-primary font-semibold text-lg'>No-Code</h5>
              <p className='font-primary font-normal text-sm tracking-tight mt-2 px-10'>No code required while you’re creating a popup</p>
            </div>
          </div>

          <div className="py-5 rounded-md flex-col items-center justify-center">
            <div className="flex justify-center items-center mx-auto w-32 h-32 bg-primary rounded-full">
              <img src="/assets/targeting_options2.svg" className='w-16 h-16'/>
            </div>
            <div className="text-center mt-6">
              <h5 className='font-primary font-semibold text-lg'>Targeting Options</h5>
              <p className='font-primary font-normal text-sm tracking-tight mt-2 px-5'>Integrated with your marketing and CRM platforms</p>
            </div>
          </div>

          <div className="py-5 rounded-md flex-col items-center justify-center">
            <div className="flex justify-center items-center mx-auto w-32 h-32 bg-primary rounded-full">
              <img src="/assets/targeting_options3.svg" className='w-16 h-16'/>
            </div>
            <div className="text-center mt-6">
              <h5 className='font-primary font-semibold text-lg'>Targeting Options</h5>
              <p className='font-primary font-normal text-sm tracking-tight mt-2 px-4'>Don’t worry about speed and Amazon AWS resources</p>
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
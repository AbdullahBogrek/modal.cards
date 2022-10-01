import React from 'react'

const index = () => {
  return (
    <div className='px-5 xl:px-0 mt-18'>
      <div className="flex items-center">
        <span className='w-9 h-9 rounded-full flex justify-center items-center bg-generator-gray'><p className='font-primary font-semibold text-xs tracking-wide'>2</p></span>
        <h5 className='ml-3 font-primary font-semibold text-lg leading-9 tracking-wide text-black'>Appearance <span className='font-primary font-normal text-lg tracking-wide leading-9 text-black'>(Size, color, logo)</span></h5>
      </div>

      <div className="mt-6 flex flex-col lg:flex-row justify-center">
        <div className="w-full lg:w-1/3 mr-20">

          <div className="mb-6">
            <h6 className='mb-3 font-secondary text-sm text-black'>Size</h6>
            <div className="w-[290px] h-12 bg-soft-gray rounded-xl">
              <button className='py-[15px] px-[23px] rounded-[10px] mx-[3px] font-secondary font-semibold text-sm text-accordion-gray'>Small</button>
              <button className='py-[15px] px-[23px] rounded-[10px] mx-[3px] font-secondary font-semibold text-sm text-accordion-gray'>Medium</button>
              <button className='py-[15px] px-[23px] rounded-[10px] mx-[3px] font-secondary font-semibold text-sm text-accordion-gray'>Large</button>
            </div>  
          </div>

          <div className="mb-6">
            <h6 className='mb-3 font-secondary text-sm text-black'>Position</h6>
            <div className="grid grid-cols-3 gap-1 w-[82px] h-[55px]">
              <div className="w-6 h-4 border border-deneme hover:bg-primary focus:bg-primary"></div>
              <div className="w-6 h-4 border border-deneme hover:bg-primary focus:bg-primary"></div>
              <div className="w-6 h-4 border border-deneme hover:bg-primary focus:bg-primary"></div>
              <div className="w-6 h-4 border border-deneme hover:bg-primary focus:bg-primary"></div>
              <div className="w-6 h-4 border border-deneme hover:bg-primary focus:bg-primary"></div>
              <div className="w-6 h-4 border border-deneme hover:bg-primary focus:bg-primary"></div>
              <div className="w-6 h-4 border border-deneme hover:bg-primary focus:bg-primary"></div>
              <div className="w-6 h-4 border border-deneme hover:bg-primary focus:bg-primary"></div>
              <div className="w-6 h-4 border border-deneme hover:bg-primary focus:bg-primary"></div>
            </div>
          </div>

          <div className="mb-6">
            <h6 className='mb-3 font-secondary text-sm text-black'>Colors</h6>
            <div className="flex flex-row gap-2">
              <div className="w-[42px] h-[42px] rounded-[10px] border">1</div>
              <div className="w-[42px] h-[42px] rounded-[10px] border">2</div>
              <div className="w-[42px] h-[42px] rounded-[10px] border">3</div>
              <div className="w-[42px] h-[42px] rounded-[10px] border">4</div>
              <div className="w-[42px] h-[42px] rounded-[10px] border">5</div>
            </div>
          </div>

          <div className="">
            <h6 className='mb-3 font-secondary text-sm text-black'>Upload Logo</h6>
            <div className="flex items-center">
              <label htmlFor="dropzone-file" className="flex w-[378px] h-[178px] flex-col justify-center items-center bg-white rounded-xl border-2 border-deneme border-dashed cursor-pointer">
                <div className="flex flex-col justify-center items-center w-20 h-20 bg-white rounded-xl">                   
                  <img src="/assets/drop_image.svg" className='w-8 h-8'/>
                </div>
                <div className="flex flex-row">
                  <img src="/assets/upload_cloud.svg"/>
                  <p className="font-secondary font-normal text-sm text-black ml-1">Drop your image here or <span className="font-semibold text-primary underline">upload</span></p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          </div>

        </div>
        <div className="bg-red w-full lg:w-2/3">
          <div className="flex flex-col w-[480px] h-[550px] bg-white justify-center items-center relative">

            <h5 className='font-secondary font-medium text-primary text-lg mb-3'>PLANS</h5>

            <h2 className='font-secondary font-bold text-black text-3xl mb-3'>Choose best for you</h2>
            <h4 className='font-secondary font-normal text-black text-xl mb-10'>Only pay for the capacity that you use.</h4>

            <div className="inline-flex flex-col mb-8 w-full px-16">
                <div className="flex flex-row items-center">
                    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-6 h-6 text-white bg-primary border-accordion-gray focus:ring-red"/>
                    <label htmlFor="default-radio-1" className="ml-2 text-lg text-black font-secondary font-medium">Starter</label>
                </div>
                <p className='pl-9 font-secondary font-normal text-soluk-gray text-sm mb-6'>1 free (then $15 per member / month)</p>

                <div className="flex flex-row items-center">
                    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-6 h-6 text-white bg-primary border-accordion-gray focus:ring-red"/>
                    <label htmlFor="default-radio-1" className="ml-2 text-lg text-black font-secondary font-medium">Pro</label>
                </div>
                <p className='pl-9 font-secondary font-normal text-soluk-gray text-sm mb-6'>$19 per member/month</p>

                <div className="flex flex-row items-center">
                    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-6 h-6 text-white bg-primary border-accordion-gray focus:ring-red"/>
                    <label htmlFor="default-radio-1" className="ml-2 text-lg text-black font-secondary font-medium">Business</label>
                </div>
                <p className='pl-9 font-secondary font-normal text-soluk-gray text-sm mb-6'>$29 per member/month</p>
            </div>

            <div className="grid grid-cols-2 gap-5 w-full px-16">
              <button className='outline outline-offset-0 outline-1 outline-generator-gray bg-white hover:bg-generator-gray font-secondary font-medium text-black text-base py-3.5 rounded-lg'>Cancel</button>
              <button className='bg-primary font-secondary font-medium text-white text-base py-3.5 rounded-lg'>Continue</button>
            </div>
            
            <div className="absolute top-5 right-5">
                <img src="/assets/modal_close_black.svg" className='w-9 h-9'/>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default index
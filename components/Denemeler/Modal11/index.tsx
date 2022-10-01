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
          <div className="flex flex-col w-[480px] h-[584px] bg-white justify-center items-center px-16 relative text-center">

            <div className="bg-none mb-3">
                <svg width="160" height="173" viewBox="0 0 160 173" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M80 160C124.183 160 160 124.183 160 80C160 35.8172 124.183 0 80 0C35.8172 0 0 35.8172 0 80C0 124.183 35.8172 160 80 160Z" fill="#D8F9FF"/>
                    <path d="M113.755 54.6269C101.871 54.6269 92.1484 61.6879 92.1484 70.3169V116.776H135.362V70.0119C135.361 61.5499 125.638 54.6269 113.755 54.6269Z" fill="#0392AA"/>
                    <path d="M109.239 51.3849H51.2216C36.8536 51.3849 25.0977 58.8139 25.0977 67.8929V116.775H92.1487V70.3159C92.1487 61.6869 101.872 54.6259 113.756 54.6259C125.64 54.6259 135.362 61.5489 135.362 70.0109V67.5719C135.363 58.6689 123.607 51.3849 109.239 51.3849Z" fill="#7D4AEA"/>
                    <path d="M83.1157 116.775H73.0156V172.549H87.4396V116.775H83.1157Z" fill="#FFC300"/>
                    <path d="M85.8509 27.2029H71.2549V36.6409H85.8509V27.2029Z" fill="#7D4AEA"/>
                    <path d="M87.5002 73.9509C87.5002 74.7222 87.2715 75.4763 86.8429 76.1176C86.4144 76.759 85.8053 77.2588 85.0927 77.554C84.3801 77.8492 83.5959 77.9264 82.8393 77.7759C82.0828 77.6255 81.3879 77.254 80.8425 76.7086C80.2971 76.1632 79.9256 75.4683 79.7751 74.7117C79.6247 73.9552 79.7019 73.1711 79.9971 72.4584C80.2922 71.7458 80.7921 71.1367 81.4335 70.7082C82.0748 70.2797 82.8289 70.0509 83.6002 70.0509C84.6346 70.0509 85.6265 70.4618 86.3579 71.1932C87.0893 71.9246 87.5002 72.9165 87.5002 73.9509Z" fill="#E0E1E3"/>
                    <path d="M81.3408 70.7649C82 70.2978 82.7879 70.0469 83.5958 70.0469C84.4037 70.0469 85.1917 70.2978 85.8508 70.7649V36.6389H81.3408V70.7649Z" fill="#FFC300"/>
                    <path d="M92.1484 71.1299V111.313H150.588V71.1299H92.1484Z" fill="#FFB358"/>
                    <path d="M92.1484 71.1299V74.6449L119.015 94.7068L150.588 71.1299H92.1484Z" fill="#FFD494"/>
                    <path d="M119.015 94.7069L113.365 90.4879L92.1484 107.532V111.313H150.588L124.664 90.4879L119.015 94.7069Z" fill="#ED8F33"/>
                </svg>
            </div>

            <h2 className='font-secondary font-bold text-black text-3xl mb-4'>Check your email</h2>
            <h4 className='font-secondary font-normal text-black text-xl mb-9'>Once you deletet your account, you’ll lose all data associatted with it.</h4>

            <input type="text" className="w-full border border-deneme hover:border-primary focus:border-primary text-black text-base font-secondary font-normal rounded-lg p-[15px] mb-3" placeholder="Enter your name" required />

            <div className="grid grid-cols-1 w-full mb-4">
                <button className='bg-primary font-secondary font-medium text-white text-base py-3.5 rounded-lg'>Sign up</button>
            </div>

            <div className="inline-flex justify-start w-full">
                <p className='font-secondary font-normal text-sm text-black text-start'>Already <a href="/" className='underline'>have an account?</a></p>
            </div>
            
            <div className="absolute top-5 right-5">
                <button>
                    <img src="/assets/modal_close_black.svg" className='w-9 h-9'/>
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
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
            <div className="flex flex-col w-[480px] h-[288px] px-16 bg-primary justify-center items-center text-center rounded-xl relative">
                
                <h2 className='font-secondary font-bold text-white text-3xl mb-4'>Hi, stranger</h2>
                <h4 className='font-secondary font-normal text-white text-xl leading-6 mb-11'>Sign up now, and get a 30% discount</h4>

                <div className="grid grid-cols-2 gap-5 w-full">
                    <button className='outline outline-offset-0 outline-1 outline-generator-gray bg-primary font-secondary font-medium text-white text-base py-3.5 rounded-lg'>Login</button>
                    <button className='bg-white hover:bg-generator-gray font-secondary font-medium text-black text-base py-3.5 rounded-lg'>Sign up now</button>
                </div>
                    
                <div className="absolute top-5 right-5">
                  <button>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M18 3.00001C15.0333 3.00001 12.1332 3.87974 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2598C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33.0018 16.0297 32.6151 14.0783 31.8619 12.2576C31.1088 10.4369 30.004 8.78254 28.6107 7.3893C27.2175 5.99605 25.5632 4.89123 23.7424 4.13806C21.9217 3.38489 19.9704 2.99816 18 3.00001ZM18 30C15.6266 30 13.3066 29.2962 11.3332 27.9776C9.35977 26.6591 7.8217 24.7849 6.91345 22.5922C6.0052 20.3995 5.76756 17.9867 6.23058 15.6589C6.69361 13.3312 7.8365 11.193 9.51473 9.51473C11.193 7.8365 13.3312 6.69361 15.6589 6.23058C17.9867 5.76756 20.3995 6.0052 22.5922 6.91345C24.7849 7.8217 26.6591 9.35977 27.9776 11.3332C29.2962 13.3066 30 15.6266 30 18C29.9958 21.1813 28.7301 24.2311 26.4806 26.4806C24.2311 28.7301 21.1813 29.9958 18 30ZM23.385 10.5L18 15.885L12.615 10.5L10.5 12.615L15.885 18L10.5 23.385L12.615 25.5L18 20.115L23.385 25.5L25.5 23.385L20.115 18L25.5 12.615L23.385 10.5Z" fill="white"/>
                    </svg>
                  </button>
                </div>

            </div>
        </div>

      </div>
    </div>
  )
}

export default index
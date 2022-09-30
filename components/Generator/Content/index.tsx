import React from 'react'

const index = () => {
  return (
    <div className='px-5 xl:px-0 mt-18'>
      <div className="flex items-center mb-6">
        <span className='w-9 h-9 rounded-full flex justify-center items-center bg-generator-gray'><p className='font-primary font-semibold text-xs tracking-wide'>3</p></span>
        <h5 className='ml-3 font-primary font-semibold text-lg leading-9 tracking-wide text-black'>Content</h5>
      </div>

      <div className="mt-6 flex flex-col lg:flex-row justify-center">
        <div className="w-full lg:w-1/3 mr-20">
          <h6 className='font-secondary font-normal text-sm text-black mb-3'>Edit your content</h6>
          <form className="mb-3" action='POST'>
            <input type="text" className="w-full border border-deneme hover:border-primary focus:border-primary text-black text-sm font-secondary font-normal rounded-lg px-[9px] py-3 mb-3" placeholder="Sign Up" value="Sign Up" required />
            <input type="text" className="w-full border border-deneme hover:border-primary focus:border-primary text-black text-sm font-secondary font-normal rounded-lg px-[9px] py-3 mb-3" placeholder="Enter your email" value="Enter your email" required />
            <input type="text" className="w-full border border-deneme hover:border-primary focus:border-primary text-black text-sm font-secondary font-normal rounded-lg px-[9px] py-3 mb-3" placeholder="Sign Up" value="Sign Up" required />
            <input type="text" className="w-full border border-deneme hover:border-primary focus:border-primary text-black text-sm font-secondary font-normal rounded-lg px-[9px] py-3 mb-6" placeholder="By singning up, you agree to Privacy Policy" value="By singning up, you agree to Privacy Policy" required />
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
          </form> 
        </div>
        <div className="w-full lg:w-2/3">
        </div>

      </div>
    </div>
  )
}

export default index
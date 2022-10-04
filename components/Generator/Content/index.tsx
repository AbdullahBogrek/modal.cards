import React from 'react'
import { useModal1Context } from "../../../contexts/Modal1Context";

const index = () => {
  const { content, setContent, image } = useModal1Context();

  const contentList = Object.entries(content).map(([key,val]) => (
    <input key={key} type="text" className="content-card-input" placeholder={val} required />
  ))

  return (
    <>
      <div className="flex items-center mb-6 mt-18">
        <span className='generator-title'><p className='generator-title-number'>3</p></span>
        <h5 className='generator-title-text'>Content</h5>
      </div>
      
      <h6 className='font-secondary font-normal text-sm text-black mb-3'>Edit your content</h6>

      {contentList}

      {image == "" ? "" : <div className="">
        <h6 className='mb-3 font-secondary text-sm text-black'>Upload Image</h6>
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
      </div>}
    </>
  )
}

export default index
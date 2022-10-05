import React from 'react'
import { useModal1Context } from "../../../contexts/Modal1Context";
import { useModalContext } from "../../../contexts/ModalContext";

const index = () => {
  const { appearance, contentArea, setTargeting } = useModalContext()
  const { title, setTitle, subtitle, setSubtitle, inputPlaceholer, setInputPlaceholer, button1, setButton1, button2, setButton2, image } = useModal1Context();
  
  return (
    <div className={`${appearance && contentArea ? "" : "opacity-60 bg-red"}`} onClick={() => setTargeting(true)}>
      <div className="flex items-center mb-6 mt-18">
        <span className='generator-title'><p className='generator-title-number'>3</p></span>
          <h5 className='generator-title-text'>Content</h5>
      </div>
        
      <h6 className='font-secondary font-normal text-sm text-black mb-3'>Edit your content</h6>

      <input type="text" className={`${!contentArea && !appearance ? "content-card-input-disable" : "content-card-input-active"}`} onChange={(e) => setTitle(e.currentTarget.value)} placeholder={title} required disabled={!contentArea && !appearance}/>
      <input type="text" className={`${!contentArea && !appearance ? "content-card-input-disable" : "content-card-input-active"}`} onChange={(e) => setSubtitle(e.currentTarget.value)} placeholder={subtitle} required disabled={!contentArea && !appearance}/>
      <input type="text" className={`${!contentArea && !appearance ? "content-card-input-disable" : "content-card-input-active"}`} onChange={(e) => setInputPlaceholer(e.currentTarget.value)} placeholder={inputPlaceholer} required disabled={!contentArea && !appearance}/>
      <input type="text" className={`${!contentArea && !appearance ? "content-card-input-disable" : "content-card-input-active"}`} onChange={(e) => setButton1(e.currentTarget.value)} placeholder={button1} required disabled={!contentArea && !appearance}/>
      <input type="text" className={`${!contentArea && !appearance ? "content-card-input-disable" : "content-card-input-active"}`} onChange={(e) => setButton2(e.currentTarget.value)} placeholder={button2} required disabled={!contentArea && !appearance}/>

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
            <input id="dropzone-file" type="file" className="hidden" disabled={!contentArea && !appearance}/>
          </label>
        </div> 
      </div>}
    </div>
  )
}

export default index
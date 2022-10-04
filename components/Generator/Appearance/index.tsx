import React, { useEffect } from 'react'
import { useModal1Context } from "../../../contexts/Modal1Context";

const index = () => {
  const { size, setSize, position, setPosition, textColor, setTextColor, buttonColor, setButtonColor, placeholderColor, setPlaceholderColor, borderColor, setBorderColor, backgroundColor, setBackgroundColor, logo, setLogo } = useModal1Context();
  return (
    <>
          <div className="flex items-center">
            <span className='generator-title'><p className='generator-title-number'>2</p></span>
            <h5 className='generator-title-text'>Appearance <span className='font-primary font-normal text-lg tracking-wide leading-9 text-black'>(Size, color, logo)</span></h5>
          </div>

          <div className="my-6">
            <h6 className='appearance-title'>Size</h6>
            <div className="appearance-size-title">
              <button className='appearance-size-button' value={size} onClick={() => setSize("sm")}>Small</button>
              <button className='appearance-size-button' value={size} onClick={() => setSize("md")}>Medium</button>
              <button className='appearance-size-button' value={size} onClick={() => setSize("lg")}>Large</button>
            </div>  
          </div>

          <div className="mb-6">
            <h6 className='appearance-title'>Position</h6>
            <div className="grid grid-cols-3 gap-1 w-[82px] h-[55px]">
              <button className="appearance-position-button rounded-tl-sm" onClick={() => setPosition("top-10_left-10")}></button>
              <button className="appearance-position-button" onClick={() => setPosition("top-10_left-1/2")}></button>
              <button className="appearance-position-button rounded-tr-sm" onClick={() => setPosition("top-10_right-10")}></button>
              <button className="appearance-position-button" onClick={() => setPosition("top-1/2_left-10")}></button>                                                   
              <button className="appearance-position-button" onClick={() => setPosition("top-1/2_left-1/2")}></button>
              <button className="appearance-position-button" onClick={() => setPosition("top-1/2_right-10")}></button>
              <button className="appearance-position-button rounded-bl-sm" onClick={() => setPosition("bottom-10_left-10")}></button>
              <button className="appearance-position-button" onClick={() => setPosition("bottom-10_left-1/2")}></button>
              <button className="appearance-position-button rounded-br-sm" onClick={() => setPosition("bottom-10-right-10")}></button>
            </div>
          </div>

          <div className="mb-6">
            <h6 className='appearance-title'>Colors</h6>
            <div className="flex flex-row gap-2">
              <div className="appearance-color-input">
                <input type="color" className="h-11 w-11 rounded-xl" value={textColor} onChange={(e) => setTextColor(String(e.target.value))}/>
              </div>
              <div className="appearance-color-input">
                <input type="color" className="h-11 w-11 rounded-xl" value={buttonColor} onChange={(e) => setButtonColor(String(e.target.value))}/>
              </div>
              <div className="appearance-color-input">
                <input type="color" className="h-11 w-11 rounded-xl" value={placeholderColor} onChange={(e) => setPlaceholderColor(String(e.target.value))}/>
              </div>
              <div className="appearance-color-input">
                <input type="color" className="h-11 w-11 rounded-xl" value={borderColor} onChange={(e) => setBorderColor(String(e.target.value))}/>
              </div>
              <div className="appearance-color-input">
                <input type="color" className="h-11 w-11 rounded-xl" value={backgroundColor} onChange={(e) => setBackgroundColor(String(e.target.value))}/>
              </div>
            </div>
          </div>

          <div className="">
            <h6 className='appearance-title'>Upload Logo</h6>
            <div className="flex items-center">
              <label htmlFor="dropzone-file" className="flex w-[378px] h-[178px] flex-col justify-center items-center bg-white rounded-xl border-2 border-deneme border-dashed cursor-pointer">
                <div className="flex flex-col justify-center items-center w-20 h-20 bg-white rounded-xl">                   
                  <img src="/assets/drop_image.svg" className='w-8 h-8'/>
                </div>
                <div className="flex flex-row">
                  <img src="/assets/upload_cloud.svg"/>
                  <p className="font-secondary font-normal text-sm text-black ml-1">Drop your image here or <span className="font-semibold text-primary underline">upload</span></p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" onChange={() => setLogo("/assets/trash_icon.svg")}/>
              </label>
            </div> 
          </div>
    </>
  )
}

export default index
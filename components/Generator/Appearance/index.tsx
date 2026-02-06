import React, { useCallback } from 'react'
import { useModalCustomizationContext } from "../../../contexts/ModalCustomizationContext";
import { useStepValidation } from "../../../hooks/useStepValidation";
import { useImageUpload } from "../../../hooks/useImageUpload";

const index = () => {
  const { size, setSize, position, setPosition, textColor, setTextColor, buttonColor, setButtonColor, placeholderColor, setPlaceholderColor, borderColor, setBorderColor, backgroundColor, setBackgroundColor, logo, setLogo } = useModalCustomizationContext();
  const { isAppearanceEnabled } = useStepValidation();

  const onLogoSuccess = useCallback((url: string) => {
    setLogo(url);
  }, [setLogo]);

  const { upload, isUploading, progress, error } = useImageUpload({
    purpose: "logo",
    onSuccess: onLogoSuccess,
  });

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      upload(file);
    }
  }

  return (
    <div id="appearance-section" className={`${isAppearanceEnabled ? "" : "opacity-60 bg-red"}`}>
      <div className="flex items-center">
        <span className='generator-title'><p className='generator-title-number'>2</p></span>
        <h5 className='generator-title-text'>Appearance <span className='font-primary font-normal text-lg tracking-wide leading-9 text-black'>(Size, color, logo)</span></h5>
      </div>

      <div className="my-6">
        <h6 className='appearance-title'>Size</h6>
        <div className="appearance-size-title">
          <button className={`appearance-size-button ${size === "sm" ? "ring-2 ring-[#7D4AEA]" : ""}`} onClick={() => setSize("sm")} disabled={!isAppearanceEnabled}>Small</button>
          <button className={`appearance-size-button ${size === "md" ? "ring-2 ring-[#7D4AEA]" : ""}`} onClick={() => setSize("md")} disabled={!isAppearanceEnabled}>Medium</button>
          <button className={`appearance-size-button ${size === "lg" ? "ring-2 ring-[#7D4AEA]" : ""}`} onClick={() => setSize("lg")} disabled={!isAppearanceEnabled}>Large</button>
        </div>
      </div>

      <div className="mb-6">
        <h6 className='appearance-title'>Position</h6>
        <div className="grid grid-cols-3 gap-1 w-[82px] h-[55px]">
          <button className={`appearance-position-button rounded-tl-sm ${position === "top-left" ? "bg-[#7D4AEA]" : ""}`} onClick={() => setPosition("top-left")} disabled={!isAppearanceEnabled}></button>
          <button className={`appearance-position-button ${position === "top-center" ? "bg-[#7D4AEA]" : ""}`} onClick={() => setPosition("top-center")} disabled={!isAppearanceEnabled}></button>
          <button className={`appearance-position-button rounded-tr-sm ${position === "top-right" ? "bg-[#7D4AEA]" : ""}`} onClick={() => setPosition("top-right")} disabled={!isAppearanceEnabled}></button>
          <button className={`appearance-position-button ${position === "center-left" ? "bg-[#7D4AEA]" : ""}`} onClick={() => setPosition("center-left")} disabled={!isAppearanceEnabled}></button>
          <button className={`appearance-position-button ${position === "center" ? "bg-[#7D4AEA]" : ""}`} onClick={() => setPosition("center")} disabled={!isAppearanceEnabled}></button>
          <button className={`appearance-position-button ${position === "center-right" ? "bg-[#7D4AEA]" : ""}`} onClick={() => setPosition("center-right")} disabled={!isAppearanceEnabled}></button>
          <button className={`appearance-position-button rounded-bl-sm ${position === "bottom-left" ? "bg-[#7D4AEA]" : ""}`} onClick={() => setPosition("bottom-left")} disabled={!isAppearanceEnabled}></button>
          <button className={`appearance-position-button ${position === "bottom-center" ? "bg-[#7D4AEA]" : ""}`} onClick={() => setPosition("bottom-center")} disabled={!isAppearanceEnabled}></button>
          <button className={`appearance-position-button rounded-br-sm ${position === "bottom-right" ? "bg-[#7D4AEA]" : ""}`} onClick={() => setPosition("bottom-right")} disabled={!isAppearanceEnabled}></button>
        </div>
      </div>

      <div className="mb-6">
        <h6 className='appearance-title'>Colors</h6>
        <div className="flex flex-row gap-2">
          <div className="appearance-color-input">
            <input type="color" className="h-11 w-11 rounded-xl" value={textColor} onChange={(e) => setTextColor(String(e.target.value))} disabled={!isAppearanceEnabled}/>
          </div>
          <div className="appearance-color-input">
            <input type="color" className="h-11 w-11 rounded-xl" value={buttonColor} onChange={(e) => setButtonColor(String(e.target.value))} disabled={!isAppearanceEnabled}/>
          </div>
          <div className="appearance-color-input">
            <input type="color" className="h-11 w-11 rounded-xl" value={placeholderColor} onChange={(e) => setPlaceholderColor(String(e.target.value))} disabled={!isAppearanceEnabled}/>
          </div>
          <div className="appearance-color-input">
            <input type="color" className="h-11 w-11 rounded-xl" value={borderColor} onChange={(e) => setBorderColor(String(e.target.value))} disabled={!isAppearanceEnabled}/>
          </div>
          <div className="appearance-color-input">
            <input type="color" className="h-11 w-11 rounded-xl" value={backgroundColor} onChange={(e) => setBackgroundColor(String(e.target.value))} disabled={!isAppearanceEnabled}/>
          </div>
        </div>
      </div>

      <div className="">
        <h6 className='appearance-title'>Upload Logo</h6>
        <div className="flex items-center">
          <label htmlFor="dropzone-file" className={`flex w-[378px] h-[178px] flex-col justify-center items-center bg-white rounded-xl border-2 border-[#DDDDDD] border-dashed ${isAppearanceEnabled && !isUploading ? "cursor-pointer" : "cursor-default"} `}>
            {isUploading ? (
              <>
                <div className="flex flex-col justify-center items-center w-20 h-20 bg-white rounded-xl">
                  <svg className="animate-spin w-8 h-8 text-[#7D4AEA]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                  </svg>
                </div>
                <p className="font-secondary font-normal text-sm text-black mb-2">Uploading...</p>
                <div className="w-48 bg-gray-200 rounded-full h-2">
                  <div className="bg-[#7D4AEA] h-2 rounded-full transition-all duration-200" style={{ width: `${progress}%` }}/>
                </div>
                <p className="font-secondary font-normal text-xs text-gray-500 mt-1">{progress}%</p>
              </>
            ) : logo ? (
              <>
                <img src={logo} alt="Uploaded logo" className="w-16 h-16 object-contain rounded-lg"/>
                <p className="font-secondary font-normal text-xs text-gray-500 mt-2">Click to change logo</p>
                {error && (
                  <p className="font-secondary font-normal text-xs text-red-500 text-center mt-2 px-4">{error}</p>
                )}
              </>
            ) : (
              <>
                <div className="flex flex-col justify-center items-center w-20 h-20 bg-white rounded-xl">
                  <img src="/assets/drop_image.svg" className='w-8 h-8'/>
                </div>
                <div className="flex flex-row">
                  <img src="/assets/upload_cloud.svg"/>
                  <p className="font-secondary font-normal text-sm text-black ml-1">Drop your image here or <span className="font-semibold text-[#7D4AEA] underline">upload</span></p>
                </div>
                {error && (
                  <p className="font-secondary font-normal text-xs text-red-500 text-center mt-2 px-4">{error}</p>
                )}
              </>
            )}
            <input id="dropzone-file" type="file" className="hidden" onChange={handleLogoUpload} disabled={!isAppearanceEnabled || isUploading} accept="image/*"/>
          </label>
        </div>
      </div>
    </div>
  )
}

export default index

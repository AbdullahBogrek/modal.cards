import React, { useCallback } from 'react'
import { useModalCustomizationContext } from "../../../contexts/ModalCustomizationContext";
import { useModalContext } from "../../../contexts/ModalContext";
import { TEMPLATE_FEATURES } from "../../../contexts/templateFeatures";
import { useImageUpload } from "../../../hooks/useImageUpload";

const index = () => {
  const { appearance, contentArea, id, setTargeting } = useModalContext()
  const {
    title, setTitle, subtitle, setSubtitle,
    bodyText, setBodyText,
    inputPlaceholder1, setInputPlaceholder1,
    inputPlaceholder2, setInputPlaceholder2,
    button1, setButton1, button2, setButton2,
    image, setImage,
    linkText1, setLinkText1, linkText2, setLinkText2,
    privacyText, setPrivacyText,
  } = useModalCustomizationContext();

  const features = TEMPLATE_FEATURES[id] || TEMPLATE_FEATURES[1];
  const isDisabled = !contentArea && !appearance;
  const inputClass = isDisabled ? "content-card-input-disable" : "content-card-input-active";

  const onCoverSuccess = useCallback((url: string) => {
    setImage(url);
  }, [setImage]);

  const { upload: uploadCover, isUploading: isCoverUploading, progress: coverProgress, error: coverError } = useImageUpload({
    purpose: "cover",
    onSuccess: onCoverSuccess,
  });

  const handleCoverUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      uploadCover(file);
    }
  };

  return (
    <div className={`${appearance && contentArea ? "" : "opacity-60 bg-red"}`} onClick={() => setTargeting(true)}>
      <div className="flex items-center mb-6 mt-18">
        <span className='generator-title'><p className='generator-title-number'>3</p></span>
          <h5 className='generator-title-text'>Content</h5>
      </div>

      <h6 className='font-secondary font-normal text-sm text-black mb-3'>Edit your content</h6>

      <input type="text" className={inputClass} value={title} onChange={(e) => setTitle(e.currentTarget.value)} placeholder="Enter title" required disabled={isDisabled}/>
      <input type="text" className={inputClass} value={subtitle} onChange={(e) => setSubtitle(e.currentTarget.value)} placeholder="Enter subtitle" required disabled={isDisabled}/>

      {features.hasBodyText && (
        <input type="text" className={inputClass} value={bodyText} onChange={(e) => setBodyText(e.currentTarget.value)} placeholder="Enter body text" required disabled={isDisabled}/>
      )}

      {features.hasInput1 && (
        <input type="text" className={inputClass} value={inputPlaceholder1} onChange={(e) => setInputPlaceholder1(e.currentTarget.value)} placeholder="Input placeholder 1" required disabled={isDisabled}/>
      )}

      {features.hasInput2 && (
        <input type="text" className={inputClass} value={inputPlaceholder2} onChange={(e) => setInputPlaceholder2(e.currentTarget.value)} placeholder="Input placeholder 2" required disabled={isDisabled}/>
      )}

      {features.hasButton1 && (
        <input type="text" className={inputClass} value={button1} onChange={(e) => setButton1(e.currentTarget.value)} placeholder="Button 1 text" required disabled={isDisabled}/>
      )}

      {features.hasButton2 && (
        <input type="text" className={inputClass} value={button2} onChange={(e) => setButton2(e.currentTarget.value)} placeholder="Button 2 text" required disabled={isDisabled}/>
      )}

      {features.hasLinkText1 && (
        <input type="text" className={inputClass} value={linkText1} onChange={(e) => setLinkText1(e.currentTarget.value)} placeholder="Link text 1" required disabled={isDisabled}/>
      )}

      {features.hasLinkText2 && (
        <input type="text" className={inputClass} value={linkText2} onChange={(e) => setLinkText2(e.currentTarget.value)} placeholder="Link text 2" required disabled={isDisabled}/>
      )}

      {features.hasPrivacyText && (
        <input type="text" className={inputClass} value={privacyText} onChange={(e) => setPrivacyText(e.currentTarget.value)} placeholder="Privacy text" required disabled={isDisabled}/>
      )}

      {features.hasImage && (
        <div className="mt-3">
          <h6 className='mb-3 font-secondary text-sm text-black'>Upload Image</h6>
          <div className="flex items-center">
            <label htmlFor="content-dropzone-file" className={`relative flex w-[378px] h-[178px] flex-col justify-center items-center bg-white rounded-xl border-2 border-[#DDDDDD] border-dashed ${!isDisabled && !isCoverUploading ? "cursor-pointer" : "cursor-default"}`}>
              {isCoverUploading ? (
                <>
                  <div className="flex flex-col justify-center items-center w-20 h-20 bg-white rounded-xl">
                    <svg className="animate-spin w-8 h-8 text-[#7D4AEA]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                    </svg>
                  </div>
                  <p className="font-secondary font-normal text-sm text-black mb-2">Uploading...</p>
                  <div className="w-48 bg-gray-200 rounded-full h-2">
                    <div className="bg-[#7D4AEA] h-2 rounded-full transition-all duration-200" style={{ width: `${coverProgress}%` }}/>
                  </div>
                  <p className="font-secondary font-normal text-xs text-gray-500 mt-1">{coverProgress}%</p>
                </>
              ) : image ? (
                <>
                  <img src={image} alt="Uploaded image" className="w-full h-full object-cover rounded-xl"/>
                  <p className="font-secondary font-normal text-xs text-gray-500 absolute bottom-2">Click to change image</p>
                  {coverError && (
                    <p className="font-secondary font-normal text-xs text-red-500 text-center absolute top-2 px-4">{coverError}</p>
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
                  {coverError && (
                    <p className="font-secondary font-normal text-xs text-red-500 text-center mt-2 px-4">{coverError}</p>
                  )}
                </>
              )}
              <input id="content-dropzone-file" type="file" className="hidden" onChange={handleCoverUpload} disabled={isDisabled || isCoverUploading} accept="image/*"/>
            </label>
          </div>
        </div>
      )}
    </div>
  )
}

export default index

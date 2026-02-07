import React, { useCallback } from 'react'
import { useModalCustomizationContext } from "../../../contexts/ModalCustomizationContext";
import { useModalContext } from "../../../contexts/ModalContext";
import { TEMPLATE_FEATURES } from "../../../contexts/templateFeatures";
import { useImageUpload } from "../../../hooks/useImageUpload";
import { useStepValidation } from "../../../hooks/useStepValidation";
import { useTranslation } from '../../../contexts/TranslationContext';

const index = () => {
  const { id } = useModalContext()
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
  const { isContentEnabled } = useStepValidation();
  const { t } = useTranslation();

  const features = TEMPLATE_FEATURES[id] || TEMPLATE_FEATURES[1];
  const isDisabled = !isContentEnabled;
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
    <div className={`${isContentEnabled ? "" : "opacity-60 bg-red"}`}>
      <div className="flex items-center mb-6 mt-18">
        <span className='generator-title'><p className='generator-title-number'>3</p></span>
          <h5 className='generator-title-text'>{t('generator.step3Title')}</h5>
      </div>
      <p className="text-sm text-text-muted ml-12 -mt-4 mb-4">{t('generator.step3Desc')}</p>

      <h6 className='font-secondary font-normal text-sm text-text mb-3'>{t('generator.editContent')}</h6>

      <input type="text" className={inputClass} value={title} onChange={(e) => setTitle(e.currentTarget.value)} placeholder={t('generator.enterTitle')} required disabled={isDisabled}/>
      <input type="text" className={inputClass} value={subtitle} onChange={(e) => setSubtitle(e.currentTarget.value)} placeholder={t('generator.enterSubtitle')} required disabled={isDisabled}/>

      {features.hasBodyText && (
        <input type="text" className={inputClass} value={bodyText} onChange={(e) => setBodyText(e.currentTarget.value)} placeholder={t('generator.enterBodyText')} required disabled={isDisabled}/>
      )}

      {features.hasInput1 && (
        <input type="text" className={inputClass} value={inputPlaceholder1} onChange={(e) => setInputPlaceholder1(e.currentTarget.value)} placeholder={t('generator.inputPlaceholder1')} required disabled={isDisabled}/>
      )}

      {features.hasInput2 && (
        <input type="text" className={inputClass} value={inputPlaceholder2} onChange={(e) => setInputPlaceholder2(e.currentTarget.value)} placeholder={t('generator.inputPlaceholder2')} required disabled={isDisabled}/>
      )}

      {features.hasButton1 && (
        <input type="text" className={inputClass} value={button1} onChange={(e) => setButton1(e.currentTarget.value)} placeholder={t('generator.button1Text')} required disabled={isDisabled}/>
      )}

      {features.hasButton2 && (
        <input type="text" className={inputClass} value={button2} onChange={(e) => setButton2(e.currentTarget.value)} placeholder={t('generator.button2Text')} required disabled={isDisabled}/>
      )}

      {features.hasLinkText1 && (
        <input type="text" className={inputClass} value={linkText1} onChange={(e) => setLinkText1(e.currentTarget.value)} placeholder={t('generator.linkText1')} required disabled={isDisabled}/>
      )}

      {features.hasLinkText2 && (
        <input type="text" className={inputClass} value={linkText2} onChange={(e) => setLinkText2(e.currentTarget.value)} placeholder={t('generator.linkText2')} required disabled={isDisabled}/>
      )}

      {features.hasPrivacyText && (
        <input type="text" className={inputClass} value={privacyText} onChange={(e) => setPrivacyText(e.currentTarget.value)} placeholder={t('generator.privacyText')} required disabled={isDisabled}/>
      )}

      {features.hasImage && (
        <div className="mt-3">
          <h6 className='mb-3 font-secondary text-sm text-text'>{t('generator.uploadImage')}</h6>
          <div className="flex items-center">
            <label htmlFor="content-dropzone-file" className={`relative flex max-w-[378px] w-full h-[178px] flex-col justify-center items-center bg-surface rounded-xl border-2 border-border border-dashed ${!isDisabled && !isCoverUploading ? "cursor-pointer" : "cursor-default"}`}>
              {isCoverUploading ? (
                <>
                  <div className="flex flex-col justify-center items-center w-20 h-20 bg-surface rounded-xl">
                    <svg className="animate-spin w-8 h-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                    </svg>
                  </div>
                  <p className="font-secondary font-normal text-sm text-text mb-2">{t('generator.uploading')}</p>
                  <div className="w-48 bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full transition-all duration-200" style={{ width: `${coverProgress}%` }}/>
                  </div>
                  <p className="font-secondary font-normal text-xs text-text-muted mt-1">{coverProgress}%</p>
                </>
              ) : image ? (
                <>
                  <img src={image} alt="Uploaded image" className="w-full h-full object-cover rounded-xl"/>
                  <p className="font-secondary font-normal text-xs text-text-muted absolute bottom-2">{t('generator.clickToChangeImage')}</p>
                  {coverError && (
                    <p className="font-secondary font-normal text-xs text-red-500 text-center absolute top-2 px-4">{coverError}</p>
                  )}
                </>
              ) : (
                <>
                  <div className="flex flex-col justify-center items-center w-20 h-20 bg-surface rounded-xl">
                    <img src="/assets/drop_image.svg" className='w-8 h-8'/>
                  </div>
                  <div className="flex flex-row">
                    <img src="/assets/upload_cloud.svg"/>
                    <p className="font-secondary font-normal text-sm text-text ml-1">{t('generator.dropImage')} <span className="font-semibold text-primary underline">{t('generator.upload')}</span></p>
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

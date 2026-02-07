import { useState, useRef } from 'react'
import { useModalContext } from "../../../contexts/ModalContext";
import { useModalCustomizationContext } from "../../../contexts/ModalCustomizationContext";
import { generateEmbedCode } from "../../../lib/generateEmbedCode";
import { useStepValidation } from "../../../hooks/useStepValidation";
import { useTranslation } from '../../../contexts/TranslationContext';

const index = () => {
  const [isClick, setIsClick] = useState<boolean>(false)
  const [generatedCode, setGeneratedCode] = useState<string>('')
  const [copied, setCopied] = useState<boolean>(false)
  const codeRef = useRef<HTMLDivElement>(null)

  const { id } = useModalContext()
  const customization = useModalCustomizationContext();
  const { isSettingsEnabled } = useStepValidation();
  const { t } = useTranslation();

  const handleClick = () => {
    const code = generateEmbedCode({
      templateId: id,
      size: customization.size,
      position: customization.position,
      textColor: customization.textColor,
      buttonColor: customization.buttonColor,
      placeholderColor: customization.placeholderColor,
      borderColor: customization.borderColor,
      backgroundColor: customization.backgroundColor,
      logo: customization.logo,
      title: customization.title,
      subtitle: customization.subtitle,
      bodyText: customization.bodyText,
      inputPlaceholder1: customization.inputPlaceholder1,
      inputPlaceholder2: customization.inputPlaceholder2,
      button1: customization.button1,
      button2: customization.button2,
      image: customization.image,
      linkText1: customization.linkText1,
      linkText2: customization.linkText2,
      privacyText: customization.privacyText,
      visitorDevice: customization.visitorDevice,
      xSeconds: customization.xSeconds,
      xSecondsActive: customization.xSecondsActive,
      xScroll: customization.xScroll,
      xScrollActive: customization.xScrollActive,
      trafficSource: customization.trafficSource,
      trafficSourceActive: customization.trafficSourceActive,
      browserLanguage: customization.browserLanguage,
      browserLanguageActive: customization.browserLanguageActive,
      exitIntent: customization.exitIntent,
      webhookUrl: customization.webhookUrl,
      sendFormSubmission: customization.sendFormSubmission,
      sendClickData: customization.sendClickData,
    });
    setGeneratedCode(code);
    setIsClick(true);
    setTimeout(() => {
      codeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = generatedCode;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <div className={`mt-18 mb-10 lg:mb-0 ${isSettingsEnabled ? "" : "opacity-60 bg-red"}`}>
          <div className="flex items-center mb-6 mt-18">
            <span className='generator-title'><p className='generator-title-number'>5</p></span>
            <h5 className='generator-title-text'>{t('generator.step5Title')}</h5>
          </div>
          <p className="text-sm text-text-muted ml-12 -mt-4 mb-4">{t('generator.step5Desc')}</p>

          <h6 className='mb-3 font-primary font-semibold text-lg text-text tracking-wide leading-9'>{t('generator.webhookTitle')}</h6>

          <p className='mb-1 font-primary font-normal text-sm text-text'>{t('generator.webhookLabel')}</p>
          <p className='mb-3 font-primary font-normal text-xs text-text-secondary'>{t('generator.webhookHelper')} <span className='font-semibold'>make.com</span></p>

          <input type="text" className="w-full border border-border hover:border-primary focus:border-primary text-text bg-surface text-sm font-secondary font-normal rounded-lg px-[9px] py-3 mb-3" placeholder={t('generator.webhookPlaceholder')} value={customization.webhookUrl} onChange={(e) => customization.setWebhookUrl(e.target.value)} required disabled={!isSettingsEnabled}/>

          <div className="flex flex-row items-center mb-3">
            <input id="form-submission-checkbox" type="checkbox" className="settings-checkbox accent-primary" checked={customization.sendFormSubmission} onChange={(e) => customization.setSendFormSubmission(e.target.checked)} disabled={!isSettingsEnabled}/>
            <label htmlFor="form-submission-checkbox" className="settings-checkbox-label">{t('generator.sendFormSubmission')}</label>
          </div>
          <div className="flex flex-row items-center mb-10">
            <input id="click-data-checkbox" type="checkbox" className="settings-checkbox accent-primary" checked={customization.sendClickData} onChange={(e) => customization.setSendClickData(e.target.checked)} disabled={!isSettingsEnabled}/>
            <label htmlFor="click-data-checkbox" className="settings-checkbox-label">{t('generator.sendClickData')}</label>
          </div>

          <button className='btn px-8 py-[19px] text-lg font-primary tracking-wide mb-6' disabled={!isSettingsEnabled} onClick={handleClick}>{t('generator.getYourCode')}</button>

          {isClick && (
            <>
              <div ref={codeRef} className="setting-code-snippet">
                <pre className='p-4 text-white text-xs font-mono overflow-auto whitespace-pre-wrap break-all max-h-[250px]'>{generatedCode}</pre>
              </div>

              <button className='btn font-primary tracking-wide px-4 py-2 rounded-[160px] mb-3' disabled={!isSettingsEnabled} onClick={handleCopy}>{copied ? t('generator.copied') : t('generator.copyTheCode')}</button>

              <div className="flex flex-row items-start gap-2 mb-4">
                <img src="/assets/warning_sign.svg" className='mt-0.5 flex-shrink-0' />
                <p className='font-primary font-normal text-xs text-text leading-4'>{t('generator.embedInstruction')} <code className='font-mono bg-surface-alt px-1 rounded'>{t('generator.embedTag')}</code> {t('generator.embedEnd')}</p>
              </div>
            </>
          )}
    </div>
  )
}

export default index

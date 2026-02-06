import { useState } from 'react'
import { useModalContext } from "../../../contexts/ModalContext";
import { useModalCustomizationContext } from "../../../contexts/ModalCustomizationContext";
import { generateEmbedCode } from "../../../lib/generateEmbedCode";

const index = () => {
  const [isClick, setIsClick] = useState<boolean>(false)
  const [generatedCode, setGeneratedCode] = useState<string>('')
  const [copied, setCopied] = useState<boolean>(false)

  const { id, appearance, contentArea, targeting, settings } = useModalContext()
  const customization = useModalCustomizationContext();

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
    <div className={`mt-18 mb-10 lg:mb-0 ${appearance && contentArea && targeting && settings ? "" : "opacity-60 bg-red"}`}>
          <div className="flex items-center mb-6 mt-18">
            <span className='generator-title'><p className='generator-title-number'>5</p></span>
            <h5 className='generator-title-text'>Settings</h5>
          </div>

          <h6 className='mb-3 font-primary font-semibold text-lg text-black tracking-wide leading-9'>Webhook to Send data</h6>

          <p className='mb-1 font-primary font-normal text-sm text-black'>Enter your Webhook URL</p>
          <p className='mb-3 font-primary font-normal text-xs text-black'>You can create a simple one with <span className='font-semibold'>make.com</span></p>

          <input type="text" className="w-full border border-[#DDDDDD] hover:border-[#7D4AEA] focus:border-[#7D4AEA] text-black text-sm font-secondary font-normal rounded-lg px-[9px] py-3 mb-3" placeholder="Your Webhook URL" value={customization.webhookUrl} onChange={(e) => customization.setWebhookUrl(e.target.value)} required disabled={!settings}/>

          <div className="flex flex-row items-center mb-3">
            <input id="form-submission-checkbox" type="checkbox" className="settings-checkbox accent-[#7D4AEA]" checked={customization.sendFormSubmission} onChange={(e) => customization.setSendFormSubmission(e.target.checked)} disabled={!settings}/>
            <label htmlFor="form-submission-checkbox" className="settings-checkbox-label">Send form submission</label>
          </div>
          <div className="flex flex-row items-center mb-10">
            <input id="click-data-checkbox" type="checkbox" className="settings-checkbox accent-[#7D4AEA]" checked={customization.sendClickData} onChange={(e) => customization.setSendClickData(e.target.checked)} disabled={!settings}/>
            <label htmlFor="click-data-checkbox" className="settings-checkbox-label">Send click data</label>
          </div>

          <button className='btn px-8 py-[19px] text-lg font-primary tracking-wide mb-6' disabled={!settings} onClick={handleClick}>Get your Code</button>

          {isClick && (
            <>
              <div className="setting-code-snippet">
                <pre className='p-4 text-white text-xs font-mono overflow-auto whitespace-pre-wrap break-all max-h-[300px]'>{generatedCode}</pre>
                <button className='btn font-primary absolute tracking-wide px-4 py-1 rounded-[160px] bottom-[10px] right-[10px]' disabled={!settings} onClick={handleCopy}>{copied ? 'Copied!' : 'Copy the code'}</button>
              </div>

              <div className="flex flex-row justify-start items-start">
                <img src="/assets/warning_sign.svg" className='mr-1' />
                <p className='w-[340px] font-primary font-normal text-[12px] text-black leading-4'>Copy and paste the embed code above just before the closing "body" tag of your website template file.</p>
              </div>
            </>
          )}
    </div>
  )
}

export default index

import { useModalCustomizationContext } from "../../../contexts/ModalCustomizationContext";
import { useStepValidation } from "../../../hooks/useStepValidation";
import { useTranslation } from '../../../contexts/TranslationContext';
import Language from "./Languages"

const index = () => {
  const { isTargetingEnabled } = useStepValidation();
  const { t } = useTranslation();
  const {
    visitorDevice, setVisitorDevice,
    xSeconds, setXSeconds, xSecondsActive, setXSecondsActive,
    xScroll, setXScroll, xScrollActive, setXScrollActive,
    trafficSource, setTrafficSource, trafficSourceActive, setTrafficSourceActive,
    exitIntent, setExitIntent,
  } = useModalCustomizationContext();

  const isDisabled = !isTargetingEnabled;

  return (
        <div className={`mt-18 ${isDisabled ? "opacity-60 bg-red" : ""}`}>
          {/* Section Title */}
          <div className="flex items-center mb-6">
            <span className='generator-title'><p className='generator-title-number'>4</p></span>
            <h5 className='generator-title-text'>{t('generator.step4Title')}</h5>
          </div>
          <p className="text-sm text-text-muted ml-12 -mt-4 mb-4">{t('generator.step4Desc')}</p>

          {/* Visitor Device */}
          <div className="targeting-features">
            <h6 className='targeting-feature-title'>{t('generator.visitorDevice')}</h6>
            <div className={`w-12 h-6 flex items-center bg-surface-alt rounded-full p-1 cursor-pointer ${visitorDevice.isActive ? "bg-primary" : ""}`}
              onClick={() => {
                if (!isTargetingEnabled) return;
                const newVal = !visitorDevice.isActive;
                setVisitorDevice.setIsActive(newVal);

              }}
            >
              <div className={`bg-surface w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${visitorDevice.isActive ? "transform translate-x-6" : ""}`}
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 rounded-xl h-12 mb-6">
            <div className="targeting-visitor-device">
              <div className={`targeting-visitor-device-content ${visitorDevice.isActive ? "" : "opacity-50"}`}>
                <input id="desktop-checkbox" type="checkbox" className="targeting-visitor-device-content-input accent-primary" checked={visitorDevice.desktop} onChange={(e) => setVisitorDevice.setDesktop(e.target.checked)} disabled={!visitorDevice.isActive}/>
                <img src="/assets/desktop_icon.svg"/>
                <label htmlFor="desktop-checkbox" className="ml-1 text-sm font-normal text-text">{t('generator.desktop')}</label>
              </div>
            </div>

            <div className="targeting-visitor-device">
              <div className={`targeting-visitor-device-content ${visitorDevice.isActive ? "" : "opacity-50"}`}>
                <input id="mobile-checkbox" type="checkbox" className="targeting-visitor-device-content-input accent-primary" checked={visitorDevice.mobile} onChange={(e) => setVisitorDevice.setMobile(e.target.checked)} disabled={!visitorDevice.isActive}/>
                <img src="/assets/mobile_icon.svg"/>
                <label htmlFor="mobile-checkbox" className="ml-1 text-sm font-normal text-text">{t('generator.mobile')}</label>
              </div>
            </div>
          </div>

          {/* After X Seconds Input */}
          <div className="targeting-features">
            <h6 className='targeting-feature-title'>{t('generator.afterXSeconds')}</h6>
            <div className={`w-12 h-6 flex items-center bg-surface-alt rounded-full p-1 cursor-pointer ${xSecondsActive ? "bg-primary" : ""}`}
              onClick={() => {
                if (!isTargetingEnabled) return;
                const newVal = !xSecondsActive;
                setXSecondsActive(newVal);

              }}
            >
              <div className={`bg-surface w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${xSecondsActive ? "transform translate-x-6" : ""}`}
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-1 mb-6">
            <input type="text" className={`${xSecondsActive ? "targeting-features-input-active" : "targeting-features-input-disable"}`} placeholder="12" value={xSeconds} onChange={(e) => setXSeconds(e.target.value)} required disabled={!xSecondsActive}/>
          </div>

          {/* After % Scroll Input */}
          <div className="targeting-features">
            <h6 className='targeting-feature-title'>{t('generator.afterPercentScroll')}</h6>
            <div className={`w-12 h-6 flex items-center bg-surface-alt rounded-full p-1 cursor-pointer ${xScrollActive ? "bg-primary" : ""}`}
              onClick={() => {
                if (!isTargetingEnabled) return;
                const newVal = !xScrollActive;
                setXScrollActive(newVal);

              }}
            >
              <div className={`bg-surface w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${xScrollActive ? "transform translate-x-6" : ""}`}
              ></div>
            </div>
          </div>
          <div className="grid grid-cols-1 mb-6">
            <input type="text" className={`${xScrollActive ? "targeting-features-input-active" : "targeting-features-input-disable"}`} placeholder="50" value={xScroll} onChange={(e) => setXScroll(e.target.value)} required disabled={!xScrollActive}/>
          </div>

          {/* Traffic Source */}
          <div className="targeting-features">
            <h6 className='targeting-feature-title'>{t('generator.trafficSource')}</h6>
            <div className={`w-12 h-6 flex items-center bg-surface-alt rounded-full p-1 cursor-pointer ${trafficSourceActive ? "bg-primary" : ""}`}
              onClick={() => {
                if (!isTargetingEnabled) return;
                const newVal = !trafficSourceActive;
                setTrafficSourceActive(newVal);

              }}
            >
              <div className={`bg-surface w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${trafficSourceActive ? "transform translate-x-6" : ""}`}
              ></div>
            </div>
          </div>
          <div className="grid grid-cols-1 mb-16">
            <input type="text" className={`${trafficSourceActive ? "targeting-features-input-active" : "targeting-features-input-disable"}`} placeholder={t('generator.trafficSourcePlaceholder')} value={trafficSource} onChange={(e) => setTrafficSource(e.target.value)} required disabled={!trafficSourceActive}/>
          </div>

          {/* Browser Language */}
          <Language />

          {/* Exit Intent Targeting */}
          <div className="targeting-features">
            <h6 className='targeting-feature-title'>{t('generator.exitIntent')}</h6>
            <div className={`w-12 h-6 flex items-center bg-surface-alt rounded-full p-1 cursor-pointer ${exitIntent ? "bg-primary" : ""}`}
              onClick={() => {
                if (!isTargetingEnabled) return;
                const newVal = !exitIntent;
                setExitIntent(newVal);

              }}
            >
              <div className={`bg-surface w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${exitIntent ? "transform translate-x-6" : ""}`}
              ></div>
            </div>
          </div>

        </div>

  )
}

export default index

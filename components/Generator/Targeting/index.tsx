import { useState } from 'react'

import { useModal1Context } from "../../../contexts/Modal1Context";
import { useModalContext } from "../../../contexts/ModalContext";
import { useLanguageContext } from "../../../contexts/LanguageContext";
import Language from "./Languages"

const index = () => {
  const [deviceToggle, setDeviceToggle] = useState<boolean>(false)
  const [xSecondsToggle, setXSecondsToggle] = useState<boolean>(false)
  const [xScrollToggle, setXScrollToggle] = useState<boolean>(false)
  const [trafficToggle, setTrafficToggle] = useState<boolean>(false)
  const [exitToggle, setExitToggle] = useState<boolean>(false)

  const { appearance, contentArea, targeting, setSettings } = useModalContext()
  const { visitorDevice, setVisitorDevice, xSeconds, xScroll, trafficSource, browserLanguage, exitIntent } = useModal1Context();

  return (
        <div className={`mt-18 ${appearance && contentArea && targeting ? "" : "opacity-60 bg-red"}`}>
          {/* Section Title */}
          <div className="flex items-center mb-6">
            <span className='generator-title'><p className='generator-title-number'>4</p></span>
            <h5 className='generator-title-text'>Targeting</h5>
          </div>

          {/* Visitor Device */}
          <div className="targeting-features">
            <h6 className='targeting-feature-title'>Visitor Device</h6>
            <div className={`w-12 h-6 flex items-center bg-[#F5F5F5] rounded-full p-1 cursor-pointer ${deviceToggle ? "bg-[#7D4AEA]" : ""}`}
              onClick={() => { targeting && setDeviceToggle(!deviceToggle)}}
            >
              {/* Switch */}
              <div className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${deviceToggle ? "transform translate-x-6" : ""}`}
              ></div>
            </div>
          </div>

          {
            <div className="grid grid-cols-2 gap-5 rounded-xl h-12 mb-6" aria-disabled={deviceToggle}>
              <div className="targeting-visitor-device">
                <div className={`targeting-visitor-device-content ${deviceToggle ? "" : "opacity-50"}`}>
                  <input id="default-checkbox" type="checkbox" className="targeting-visitor-device-content-input accent-[#7D4AEA]" disabled={!deviceToggle}/>
                  <img src="/assets/desktop_icon.svg"/>
                  <label htmlFor="default-checkbox" className="ml-1 text-sm font-normal text-black ">Desktop</label>
                </div>
              </div>
  
              <div className="targeting-visitor-device">
                <div className={`targeting-visitor-device-content ${deviceToggle ? "" : "opacity-50"}`}>
                  <input id="default-checkbox" type="checkbox" className="targeting-visitor-device-content-input accent-[#7D4AEA]" disabled={!deviceToggle}/>
                  <img src="/assets/mobile_icon.svg"/>
                  <label htmlFor="default-checkbox" className="ml-1 text-sm font-normal text-black ">Mobile</label>
                </div>
              </div>
            </div>
          }

          {/* After X Seconds Input */}
          <div className="targeting-features">
            <h6 className='targeting-feature-title'>After X seconds</h6>
            <div className={`w-12 h-6 flex items-center bg-[#F5F5F5] rounded-full p-1 cursor-pointer ${xSecondsToggle ? "bg-[#7D4AEA]" : ""}`}
              onClick={() => { targeting && setXSecondsToggle(!xSecondsToggle),  setSettings(true) }}
            >
              {/* Switch */}
              <div className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${xSecondsToggle ? "transform translate-x-6" : ""}`}
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-1 mb-6">
            <input type="text" className={`${xSecondsToggle ? "targeting-features-input-active" : "targeting-features-input-disable"}`} placeholder="12" value="12" required disabled={!xSecondsToggle}/>
          </div>

          {/* After % Scroll Input */}
          <div className="targeting-features">
            <h6 className='targeting-feature-title'>After % Scroll</h6>
            <div className={`w-12 h-6 flex items-center bg-[#F5F5F5] rounded-full p-1 cursor-pointer ${xScrollToggle ? "bg-[#7D4AEA]" : ""}`}
              onClick={() => { targeting && setXScrollToggle(!xScrollToggle) }}
            >
              {/* Switch */}
              <div className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${xScrollToggle ? "transform translate-x-6" : ""}`}
              ></div>
            </div>
          </div>
          <div className="grid grid-cols-1 mb-6">
            <input type="text" className={`${xScrollToggle ? "targeting-features-input-active" : "targeting-features-input-disable"}`} placeholder="50" value="50" required disabled={!xSecondsToggle}/>
          </div>

          {/* Traffic Source */}
          <div className="targeting-features">
            <h6 className='targeting-feature-title'>Traffic Source</h6>
            <div className={`w-12 h-6 flex items-center bg-[#F5F5F5] rounded-full p-1 cursor-pointer ${trafficToggle ? "bg-[#7D4AEA]" : ""}`}
              onClick={() => { targeting && setTrafficToggle(!trafficToggle)}}
            >
              {/* Switch */}
              <div className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${trafficToggle ? "transform translate-x-6" : ""}`}
              ></div>
            </div>
          </div>
          <div className="grid grid-cols-1 mb-16">
            <input type="text" className={`${xScrollToggle ? "targeting-features-input-active" : "targeting-features-input-disable"}`} placeholder="Enter your traffic source domain" required disabled={!trafficToggle}/>
          </div>

          {/* Browser Language */}
          <Language />

          {/* Exit Intent Targeting */}
          <div className="targeting-features">
            <h6 className='targeting-feature-title'>Exit Intent Targeting</h6>
            <div className={`w-12 h-6 flex items-center bg-[#F5F5F5] rounded-full p-1 cursor-pointer ${exitToggle ? "bg-[#7D4AEA]" : ""}`}
              onClick={() => { targeting && setExitToggle(!exitToggle)}}
            >
              {/* Switch */}
              <div className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${exitToggle ? "transform translate-x-6" : ""}`}
              ></div>
            </div>
          </div>

        </div>

  )
}

export default index
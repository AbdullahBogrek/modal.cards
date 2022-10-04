import React from 'react'
import { useModal1Context } from "../../../contexts/Modal1Context";

const index = () => {
  const { visitorDevice, setVisitorDevice, xSeconds, xScroll, trafficSource, browserLanguage, exitIntent } = useModal1Context();

  // const contactList = Object.entries(visitorDevice).map(([key,val]) => (
    
  // ))

  return (
        <div className='mt-18'>
          {/* Section Title */}
          <div className="flex items-center mb-6">
            <span className='generator-title'><p className='generator-title-number'>4</p></span>
            <h5 className='generator-title-text'>Targeting</h5>
          </div>

          {/* Visitor Device */}
          <div className="targeting-features">
            <h6 className='targeting-feature-title'>Visitor Device</h6>
            <label htmlFor="default-toggle" className="inline-flex relative items-center cursor-pointer">
              <input type="checkbox"  id="default-toggle" className="sr-only peer"/>
              <div className="targeting-feature-switch"></div>
            </label>
          </div>

          {
            <div className="grid grid-cols-2 gap-5 rounded-xl h-12 mb-6">
              <div className="targeting-visitor-device">
                <div className="targeting-visitor-device-content">
                  <input id="default-checkbox" type="checkbox"  className="targeting-visitor-device-content-input"/>
                  <img src="/assets/desktop_icon.svg"/>
                  <label htmlFor="default-checkbox" className="ml-1 text-sm font-normal text-black ">Desktop</label>
                </div>
              </div>
  
              <div className="targeting-visitor-device">
                <div className="targeting-visitor-device-content">
                  <input id="default-checkbox" type="checkbox"  className="targeting-visitor-device-content-input"/>
                  <img src="/assets/mobile_icon.svg"/>
                  <label htmlFor="default-checkbox" className="ml-1 text-sm font-normal text-black ">Mobile</label>
                </div>
              </div>
            </div>
          }

          {/* After X Seconds Input */}
          <div className="targeting-features">
            <h6 className='targeting-feature-title'>After X seconds</h6>
            <label htmlFor="default-toggle" className="inline-flex relative items-center cursor-pointer">
              <input type="checkbox"  id="default-toggle" className="sr-only peer"/>
              <div className="targeting-feature-switch"></div>
            </label>
          </div>

          <div className="grid grid-cols-1 mb-6">
            <input type="text" className="targeting-features-input" placeholder="12" value="12" required />
          </div>

          {/* After % Scroll Input */}
          <div className="targeting-features">
            <h6 className='targeting-feature-title'>After % Scroll</h6>
            <label htmlFor="default-toggle" className="inline-flex relative items-center cursor-pointer">
              <input type="checkbox"  id="default-toggle" className="sr-only peer"/>
              <div className="targeting-feature-switch"></div>
            </label>
          </div>
          <div className="grid grid-cols-1 mb-6">
            <input type="text" className="targeting-features-input" placeholder="50" value="50" required />
          </div>

          {/* Traffic Source */}
          <div className="targeting-features">
            <h6 className='targeting-feature-title'>Traffic Source</h6>
            <label htmlFor="default-toggle" className="inline-flex relative items-center cursor-pointer">
              <input type="checkbox"  id="default-toggle" className="sr-only peer"/>
              <div className="targeting-feature-switch"></div>
            </label>
          </div>
          <div className="grid grid-cols-1 mb-16">
            <input type="text" className="targeting-features-input" placeholder="Enter your traffic source domain"  required />
          </div>

          {/* Browser Language */}
          <div className="targeting-features">
            <h6 className='targeting-feature-title'>Browser Language</h6>
            <label htmlFor="default-toggle" className="inline-flex relative items-center cursor-pointer">
              <input type="checkbox"  id="default-toggle" className="sr-only peer"/>
              <div className="targeting-feature-switch"></div>
            </label>
          </div>
          <div className="grid grid-cols-1 mb-6">
            <select className="bg-white border border-deneme text-black text-sm rounded-lg block w-full px-[12px] py-[9px]">
              <option>Choose a country</option>
              <option>United States</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </select>
            <input type="text" className="targeting-features-input mt-3" />
          </div>

          {/* Exit Intent Targeting */}
          <div className="targeting-features">
            <h6 className='targeting-feature-title'>Exit Intent Targeting</h6>
            <label htmlFor="default-toggle" className="inline-flex relative items-center cursor-pointer">
              <div className="targeting-feature-switch"></div>
            </label>
          </div>

        </div>

  )
}

export default index
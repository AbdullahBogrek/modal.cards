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
            <span className='w-9 h-9 rounded-full flex justify-center items-center bg-generator-gray'><p className='font-primary font-semibold text-xs tracking-wide'>4</p></span>
            <h5 className='ml-3 font-primary font-semibold text-lg leading-9 tracking-wide text-black'>Targeting</h5>
          </div>

          {/* Visitor Device */}
          <div className="switch flex flex-row justify-between mb-4">
            <h6 className='font-primary font-semibold text-sm tracking-wide text-black'>Visitor Device</h6>
            <label htmlFor="default-toggle" className="inline-flex relative items-center cursor-pointer">
              <input type="checkbox"  id="default-toggle" className="sr-only peer"/>
              <div className="w-11 h-6 bg-generator-gray rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>

          {
            <div className="grid grid-cols-2 gap-5 rounded-xl h-12 mb-6">
              <div className="desktop bg-generator-gray rounded-xl">
                <div className="flex flex-row h-full pl-3 items-center mb-4">
                  <input id="default-checkbox" type="checkbox"  className="w-[18px] h-[18px] mr-2 text-white bg-primary rounded border-gray"/>
                  <img src="/assets/desktop_icon.svg"/>
                  <label htmlFor="default-checkbox" className="ml-1 text-sm font-normal text-black ">Desktop</label>
                </div>
              </div>
  
              <div className="mobile bg-generator-gray rounded-xl">
                <div className="flex flex-row h-full pl-3 items-center mb-4">
                  <input id="default-checkbox" type="checkbox"  className="w-[18px] h-[18px] mr-2 text-white bg-primary rounded border-gray" />
                  <img src="/assets/mobile_icon.svg"/>
                  <label htmlFor="default-checkbox" className="ml-1 text-sm font-normal text-black ">Mobile</label>
                </div>
              </div>
            </div>
          }

          {/* After X Seconds Input */}
          <div className="switch flex flex-row justify-between mb-4">
            <h6 className='font-primary font-semibold text-sm tracking-wide text-black'>After X seconds</h6>
            <label htmlFor="default-toggle" className="inline-flex relative items-center cursor-pointer">
              <input type="checkbox"  id="default-toggle" className="sr-only peer"/>
              <div className="w-11 h-6 bg-generator-gray rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>

          <div className="grid grid-cols-1 mb-6">
            <input type="text" className="w-full border border-deneme hover:border-primary focus:border-primary text-black text-sm font-secondary font-normal rounded-lg px-[9px] py-3 mb-3" placeholder="12" value="12" required />
          </div>

          {/* After % Scroll Input */}
          <div className="switch flex flex-row justify-between mb-4">
            <h6 className='font-primary font-semibold text-sm tracking-wide text-black'>After % Scroll</h6>
            <label htmlFor="default-toggle" className="inline-flex relative items-center cursor-pointer">
              <input type="checkbox"  id="default-toggle" className="sr-only peer"/>
              <div className="w-11 h-6 bg-generator-gray rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          <div className="grid grid-cols-1 mb-6">
            <input type="text" className="w-full border border-deneme hover:border-primary focus:border-primary text-black text-sm font-secondary font-normal rounded-lg px-[9px] py-3 mb-3" placeholder="50" value="50" required />
          </div>

          {/* Traffic Source */}
          <div className="switch flex flex-row justify-between mb-4">
            <h6 className='font-primary font-semibold text-sm tracking-wide text-black'>Traffic Source</h6>
            <label htmlFor="default-toggle" className="inline-flex relative items-center cursor-pointer">
              <input type="checkbox"  id="default-toggle" className="sr-only peer"/>
              <div className="w-11 h-6 bg-generator-gray rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          <div className="grid grid-cols-1 mb-16">
            <input type="text" className="w-full border border-deneme hover:border-primary focus:border-primary text-black text-sm font-secondary font-normal rounded-lg px-[9px] py-3 mb-3" placeholder="Enter your traffic source domain"  required />
          </div>

          {/* Browser Language */}
          <div className="switch flex flex-row justify-between mb-4">
            <h6 className='font-primary font-semibold text-sm tracking-wide text-black'>Browser Language</h6>
            <label htmlFor="default-toggle" className="inline-flex relative items-center cursor-pointer">
              <input type="checkbox"  id="default-toggle" className="sr-only peer"/>
              <div className="w-11 h-6 bg-generator-gray rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
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
            <input type="text" className="w-full border mt-3 border-deneme hover:border-primary focus:border-primary text-black text-sm font-secondary font-normal rounded-lg px-[9px] py-3 mb-3" />
          </div>

          {/* Exit Intent Targeting */}
          <div className="switch flex flex-row justify-between mb-4">
            <h6 className='font-primary font-semibold text-sm tracking-wide text-black'>Exit Intent Targeting</h6>
            <label htmlFor="default-toggle" className="inline-flex relative items-center cursor-pointer">
              <div className="w-11 h-6 bg-generator-gray rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>

        </div>

  )
}

export default index
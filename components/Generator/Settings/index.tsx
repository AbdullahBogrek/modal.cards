import React from 'react'

const index = () => {
  return (

        <>
          <div className="flex items-center mb-6 mt-18">
            <span className='generator-title'><p className='generator-title-number'>5</p></span>
            <h5 className='generator-title-text'>Settings</h5>
          </div>

          <h6 className='mb-3 font-primary font-semibold text-lg text-black tracking-wide leading-9'>Webhook to Send data</h6>

          <p className='mb-1 font-primary font-normal text-sm text-black'>Enter your Webhook URL</p>
          <p className='mb-3 font-primary font-normal text-xs text-black'>You can create a simple one with <span className='font-semibold'>make.com</span></p>

          <input type="text" className="w-full border border-deneme hover:border-primary focus:border-primary text-black text-sm font-secondary font-normal rounded-lg px-[9px] py-3 mb-3" placeholder="Your Webhook URL" value="" required />

          <div className="flex flex-row items-center mb-3">
            <input id="default-checkbox" type="checkbox" value="" className="settings-checkbox" />
            <label htmlFor="default-checkbox" className="settings-checkbox-label">Send from submission</label>
          </div>
          <div className="flex flex-row items-center mb-10">
            <input id="default-checkbox" type="checkbox" value="" className="settings-checkbox" />
            <label htmlFor="default-checkbox" className="settings-checkbox-label">Send click data</label>
          </div>

          <button className='btn px-8 py-[19px] text-lg font-primary tracking-wide mb-6'>Get your Code</button>

          <div className="setting-code-snippet">
            <p className='p-4 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quibusdam, eum officia incidunt laborum fugiat est quo voluptatibus asperiores veniam aperiam optio et hic inventore sequi expedita quaerat impedit quis!</p>
            <button className='btn font-primary absolute tracking-wide px-4 py-1 rounded-[160px] bottom-[10px] right-[10px]'>Copy the code</button>
          </div>
          
          <div className="flex flex-row justify-start items-start">
            <img src="/assets/warning_sign.svg" className='mr-1' />
            <p className='w-[340px] font-primary font-normal text-[12px] text-black leading-4'>Copy and paste the embed code above just before the closing "body" tag of your website template file.</p>
          </div>
    </>
  )
}

export default index
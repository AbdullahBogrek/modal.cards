import React from 'react'

import Templates from "./Templates"
import Appearance from "./Appearance"
import Content from "./Content"
import Targeting from "./Targeting"
import Settings from "./Settings"

import Modal1 from "../Modals/Modal1"

const index = () => {
  return (
    <div className='max-w-[1194px] mx-auto mt-18'>
      
      <div className="px-5 xl:px-0">
        <h2 className='section-title tracking-wide mb-3'>Modal Card Generator</h2>
        <h4 className='w-[460px] font-primary font-normal text-base tracking-tight'>Measure your return on email marketing efforts easier and faster by using thebest online tools. Popupsmart is ready to help you build an efficient email list!</h4>
      </div>

      <div className="mt-24">
        <Templates />
        <div className='px-5 xl:px-0 mt-18'>
          <div className="flex flex-col lg:flex-row justify-center">
            <div className="w-full lg:w-1/3 mr-20">
              <Appearance />
              <Content />
              <Targeting />
              <Settings />
            </div>

            <div className="w-full lg:w-2/3 h-full sticky top-10">
              <Modal1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
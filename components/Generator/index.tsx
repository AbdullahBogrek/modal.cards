import React from 'react'

import Templates from "./Templates"
import Appearance from "./Appearance"
import Content from "./Content"
import Targeting from "./Targeting"
import Settings from "./Settings"
import CardPlaceholder from "./CardPlaceholder"

import Modal1 from "../Modals/Modal1"
import Modal2 from "../Modals/Modal2"
import Modal3 from "../Modals/Modal3"
import Modal4 from "../Modals/Modal4"
import Modal5 from "../Modals/Modal5"
import Modal6 from "../Modals/Modal6"
import Modal7 from "../Modals/Modal7"
import Modal8 from "../Modals/Modal8"
import Modal9 from "../Modals/Modal9"
import Modal10 from "../Modals/Modal10"
import Modal11 from "../Modals/Modal11"
import Modal12 from "../Modals/Modal12"


import { useModalContext } from "../../contexts/ModalContext";

const card = [ <Modal1/>, <Modal2/>, <Modal3/>, <Modal4/>, <Modal5/>, <Modal6/>, <Modal7/>, <Modal8/>, <Modal9/>, <Modal10/>, <Modal11/>, <Modal12/> ]

const index = () => {
  const { id, setAppearance } = useModalContext();

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
              { id === 0 ? <CardPlaceholder /> : card[id - 1] }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
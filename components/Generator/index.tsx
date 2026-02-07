import React from 'react'

import Templates from "./Templates"
import Appearance from "./Appearance"
import Content from "./Content"
import Targeting from "./Targeting"
import Settings from "./Settings"
import CardPlaceholder from "./CardPlaceholder"
import WizardProgress from "./WizardProgress"

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
import { useModalCustomizationContext } from "../../contexts/ModalCustomizationContext";
import { useTranslation } from '../../contexts/TranslationContext';

const POSITION_STYLES: Record<string, React.CSSProperties> = {
  "top-left":      { justifyContent: "flex-start", alignItems: "flex-start" },
  "top-center":    { justifyContent: "center",     alignItems: "flex-start" },
  "top-right":     { justifyContent: "flex-end",   alignItems: "flex-start" },
  "center-left":   { justifyContent: "flex-start", alignItems: "center" },
  "center":        { justifyContent: "center",     alignItems: "center" },
  "center-right":  { justifyContent: "flex-end",   alignItems: "center" },
  "bottom-left":   { justifyContent: "flex-start", alignItems: "flex-end" },
  "bottom-center": { justifyContent: "center",     alignItems: "flex-end" },
  "bottom-right":  { justifyContent: "flex-end",   alignItems: "flex-end" },
};

const SIZE_SCALE: Record<string, number> = { sm: 0.75, md: 0.85, lg: 0.95 };

const card = [ <Modal1/>, <Modal2/>, <Modal3/>, <Modal4/>, <Modal5/>, <Modal6/>, <Modal7/>, <Modal8/>, <Modal9/>, <Modal10/>, <Modal11/>, <Modal12/> ]

const index = () => {
  const { id } = useModalContext();
  const { position, size } = useModalCustomizationContext();
  const { t } = useTranslation();

  const posStyle = POSITION_STYLES[position] || POSITION_STYLES["center"];
  const scale = SIZE_SCALE[size] || SIZE_SCALE.md;

  return (
    <div id="templates-section" className='max-w-[1400px] mx-auto mt-18 px-6 xl:px-8'>

      <div className="px-0">
        <h2 className='section-title tracking-wide mb-3'>{t('generator.title')}</h2>
        <h4 className='max-w-[460px] w-full font-primary font-normal text-base tracking-tight text-text-secondary'>{t('generator.subtitle')}</h4>
      </div>

      <div className="mt-24">
        <Templates />
        <div className='px-0 mt-18'>
          <div className="flex flex-col lg:flex-row justify-center">
            <div className="w-full lg:w-1/3 mr-20">
              <WizardProgress />
              <Appearance />
              <Content />
              <Targeting />
              <Settings />
            </div>

            <div className="w-full lg:w-2/3 h-[700px] sticky top-10 overflow-hidden bg-surface-elevated rounded-xl border border-border-light">
              { id === 0 ? (
                <div className="flex items-center justify-center h-full">
                  <CardPlaceholder />
                </div>
              ) : (
                <div
                  key={id}
                  className="flex w-full h-full p-6 animate-fade-in-none"
                  style={posStyle}
                >
                  <div style={{ transform: `scale(${scale})`, transformOrigin: `${posStyle.alignItems === 'flex-start' ? 'top' : posStyle.alignItems === 'flex-end' ? 'bottom' : 'center'} ${posStyle.justifyContent === 'flex-start' ? 'left' : posStyle.justifyContent === 'flex-end' ? 'right' : 'center'}` }}>
                    {card[id - 1]}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index

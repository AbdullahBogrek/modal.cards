import React, { useRef, useEffect } from 'react';
import { useModalContext } from "../../../contexts/ModalContext";
import { useModalCustomizationContext, TemplateDefaultsProvider } from "../../../contexts/ModalCustomizationContext";
import { useTranslation } from '../../../contexts/TranslationContext';
import { StaggerContainer, StaggerItem } from '../../animations/StaggerContainer';

import Modal1 from "../../Modals/Modal1";
import Modal2 from "../../Modals/Modal2";
import Modal3 from "../../Modals/Modal3";
import Modal4 from "../../Modals/Modal4";
import Modal5 from "../../Modals/Modal5";
import Modal6 from "../../Modals/Modal6";
import Modal7 from "../../Modals/Modal7";
import Modal8 from "../../Modals/Modal8";
import Modal9 from "../../Modals/Modal9";
import Modal10 from "../../Modals/Modal10";
import Modal11 from "../../Modals/Modal11";
import Modal12 from "../../Modals/Modal12";

const MODALS: React.ReactNode[] = [
  <Modal1 />, <Modal2 />, <Modal3 />, <Modal4 />,
  <Modal5 />, <Modal6 />, <Modal7 />, <Modal8 />,
  <Modal9 />, <Modal10 />, <Modal11 />, <Modal12 />,
];

const ModalThumbnail = ({ templateId, children, selectText }: { templateId: number; children: React.ReactNode; selectText: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    const fit = () => {
      const cw = container.clientWidth;
      const ch = container.clientHeight;
      const sw = content.scrollWidth;
      const sh = content.scrollHeight;
      if (cw === 0 || ch === 0 || sw === 0 || sh === 0) return;
      const scale = Math.min(cw / sw, ch / sh) * 0.9;
      content.style.transform = `translate(-50%, -50%) scale(${scale})`;
    };

    fit();

    if (typeof ResizeObserver !== 'undefined') {
      const ro = new ResizeObserver(fit);
      ro.observe(container);
      return () => ro.disconnect();
    }
  }, []);

  return (
    <div ref={containerRef} className="template-thumb-preview">
      <div ref={contentRef} className="template-thumb-modal">
        <TemplateDefaultsProvider templateId={templateId}>
          {children}
        </TemplateDefaultsProvider>
      </div>
      <div className="template-thumb-overlay group-hover:bg-primary/60">
        <button className='templates-container-button group-hover:block' tabIndex={-1}>{selectText}</button>
      </div>
    </div>
  );
};

const index = () => {
  const { id, setId } = useModalContext();
  const { loadTemplateDefaults } = useModalCustomizationContext();
  const { t } = useTranslation();

  const handleSelect = (templateId: number) => {
    setId(templateId);
    loadTemplateDefaults(templateId);
    setTimeout(() => {
      document.getElementById('appearance-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <div>
      <div className="flex items-center mb-4">
        <span className='generator-title'><p className='generator-title-number'>1</p></span>
        <h5 className='generator-title-text'>{t('generator.step1Title')}</h5>
      </div>

      <StaggerContainer className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
        {MODALS.map((modal, i) => {
          const num = i + 1;
          return (
            <StaggerItem key={num}>
              <div
                className={`group cursor-pointer transition-all duration-200 rounded-xl overflow-hidden bg-border-light ${id === num ? 'ring-2 ring-primary ring-offset-2' : ''}`}
                onClick={() => handleSelect(num)}
              >
                <ModalThumbnail templateId={num} selectText={t('generator.selectTemplate')}>
                  {modal}
                </ModalThumbnail>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </div>
  )
}

export default index

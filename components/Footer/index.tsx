import React from 'react'
import { useTranslation } from '../../contexts/TranslationContext';
import FadeIn from '../../components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '../../components/animations/StaggerContainer';

const index = () => {
  const { t } = useTranslation();

  return (
    <section className='mb-16 pt-32'>
      <div className="bg-surface max-w-[1400px] mx-auto px-6 xl:px-8">
        <FadeIn direction="up">
          <div className="grid grid-cols-1 mb-10 text-center">
            <h2 className='section-title'>{t('footer.title')}</h2>
          </div>
        </FadeIn>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">

          <StaggerItem>
            <div className="footer-card">
              <div className="footer-card-icon">
                <img src="/assets/targeting_options1.svg" className='w-16 h-16'/>
              </div>
              <div className="text-center mt-6">
                <h5 className='footer-card-title'>{t('footer.targeting')}</h5>
                <p className='features-card-text'>{t('footer.targetingDesc')}</p>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="footer-card">
              <div className="footer-card-icon">
              <img src="/assets/no_code.svg" className='w-16 h-16'/>
              </div>
              <div className="text-center mt-6">
                <h5 className='footer-card-title'>{t('footer.noCode')}</h5>
                <p className='features-card-text px-10'>{t('footer.noCodeDesc')}</p>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="footer-card">
              <div className="footer-card-icon">
                <img src="/assets/targeting_options2.svg" className='w-16 h-16'/>
              </div>
              <div className="text-center mt-6">
                <h5 className='footer-card-title'>{t('footer.integrations')}</h5>
                <p className='features-card-text px-5'>{t('footer.integrationsDesc')}</p>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="footer-card">
              <div className="footer-card-icon">
                <img src="/assets/targeting_options3.svg" className='w-16 h-16'/>
              </div>
              <div className="text-center mt-6">
                <h5 className='footer-card-title'>{t('footer.performance')}</h5>
                <p className='features-card-text px-4'>{t('footer.performanceDesc')}</p>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
        <div className="grid grid-cols-1 mt-16">
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <img src="https://cdn.getpopup.site/static/getpopup.png" onError={(e) => { (e.target as HTMLImageElement).src = '/assets/logo.png'; }} className='w-8 h-8 border border-border-light rounded-lg p-0.5' />
            </div>
            <h6 className='font-primary font-normal text-text text-sm leading-4 tracking-tight'>{t('footer.poweredBy')}</h6>
          </div>
        </div>
      </div>
    </section>
  )
}

export default index
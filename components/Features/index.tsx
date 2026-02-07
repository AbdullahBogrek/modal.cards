import React from 'react'
import { useTranslation } from '../../contexts/TranslationContext';
import FadeIn from '../../components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '../../components/animations/StaggerContainer';

const index = () => {
  const { t } = useTranslation();

  return (
    <section className='bg-surface'>
      <div className="flex flex-wrap max-w-[1400px] mx-auto pt-24 text-center px-6 xl:px-8">
        <FadeIn direction="up">
          <div className="section-title">{t('features.title')}</div>
        </FadeIn>
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-8 mt-10 w-full">
          <StaggerItem>
            <div className="features-card">
              <i className='features-card-icon'><img src="/assets/pixel_perfect.svg" className='w-12 h-12'/></i>
              <h5 className='features-card-title'>{t('features.pixelPerfect')}</h5>
              <p className='features-card-content px-12'>{t('features.pixelPerfectDesc')}</p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="features-card">
              <i className='features-card-icon'><img src="/assets/conversion_ready.svg" className='w-12 h-12'/></i>
              <p className='features-card-title'>{t('features.conversionReady')}</p>
              <p className='features-card-content px-16'>{t('features.conversionReadyDesc')}</p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="features-card">
              <i className='features-card-icon'><img src="/assets/modern_and_useful.svg" className='w-12 h-12'/></i>
              <h5 className='features-card-title'>{t('features.modernUseful')}</h5>
              <p className='features-card-content px-14'>{t('features.modernUsefulDesc')}</p>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  )
}

export default index
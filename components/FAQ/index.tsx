import React from 'react'
import { Accordion } from './Accordion'
import { useTranslation } from '../../contexts/TranslationContext';

const index = () => {
  const { t } = useTranslation();

  return (
    <section className='bg-surface'>
      <div className="flex flex-wrap max-w-[1400px] mx-auto pt-24 px-6 xl:px-8">
        <div className="section-title mb-10 text-center">{t('faq.title')}</div>
          <Accordion title={t('faq.q1')} content={t('faq.a1')} />
          <Accordion title={t('faq.q2')} content={t('faq.a2')} />
          <Accordion title={t('faq.q3')} content={t('faq.a3')} />
          <Accordion title={t('faq.q4')} content={t('faq.a4')} />
          <Accordion title={t('faq.q5')} content={t('faq.a5')} />
          <Accordion title={t('faq.q6')} content={t('faq.a6')} />
      </div>
    </section>
  )
}

export default index
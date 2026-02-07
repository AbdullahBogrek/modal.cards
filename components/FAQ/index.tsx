import { Accordion } from './Accordion'
import { useTranslation } from '../../contexts/TranslationContext';
import FadeIn from '../animations/FadeIn';

const FAQ = () => {
  const { t } = useTranslation();

  return (
    <section id="faq" className='bg-surface'>
      <div className="max-w-[1400px] mx-auto py-24 px-6 md:px-12 lg:px-16 xl:px-20">
        <FadeIn direction="up">
          <h2 className="section-title text-center mb-12">{t('faq.title')}</h2>
        </FadeIn>
        <div className="max-w-3xl mx-auto">
          <Accordion title={t('faq.q1')} content={t('faq.a1')} />
          <Accordion title={t('faq.q2')} content={t('faq.a2')} />
          <Accordion title={t('faq.q3')} content={t('faq.a3')} />
          <Accordion title={t('faq.q4')} content={t('faq.a4')} />
          <Accordion title={t('faq.q5')} content={t('faq.a5')} />
          <Accordion title={t('faq.q6')} content={t('faq.a6')} />
        </div>
      </div>
    </section>
  )
}

export default FAQ

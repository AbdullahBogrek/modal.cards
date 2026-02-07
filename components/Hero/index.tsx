import { useTranslation } from '../../contexts/TranslationContext';
import FadeIn from '../animations/FadeIn';
import Card from "./Card";

const index = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="hero-section bg-surface">
        <div className="grid pt-14 md:pt-20 lg:pt-24 pb-[150px] px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="animate-fade-in-up max-w-md md:max-w-lg lg:max-w-xl mb-4">
              <h1 className="font-semibold font-primary text-text text-5xl leading-12 lg:text-7xl lg:leading-20">{t('hero.title')}</h1>
          </div>
          <div className="animate-fade-in-up max-w-6xl mb-16" style={{ animationDelay: '0.15s' }}>
            <p className="tracking-tight font-normal font-primary text-text text-xl md:text-2xl lg:text-3xl lg:leading-11">{t('hero.subtitle')}</p>
          </div>
          <div className="animate-fade-in-up mb-8" style={{ animationDelay: '0.3s' }}>
            <button
              type="button"
              className="btn px-4 py-5 text-sm lg:px-8 lg:py-5 lg:text-lg font-medium text-center"
              onClick={() => document.getElementById('templates-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('hero.cta')}
            </button>
          </div>
          <div className="animate-fade-in-up flex flex-col md:flex-row pb-24 mb-[90px]" style={{ animationDelay: '0.4s' }}>
            <div className="hero-section-features mb-5 md:mb-0">
              <i className="mr-2">
                <img src="/assets/check.svg" className="w-4"/>
              </i>
              <span className="hero-section-features-items">{t('hero.feature1')}</span>
            </div>
            <div className="hero-section-features mb-5 md:mb-0">
              <i className="mr-2">
                <img src="/assets/check.svg" className="w-4"/>
              </i>
              <span className="hero-section-features-items">{t('hero.feature2')}</span>
            </div>
            <div className="hero-section-features">
              <i className="mr-2">
                <img src="/assets/check.svg" className="w-4"/>
              </i>
              <span className="hero-section-features-items">{t('hero.feature3')}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="hero-section-stats">
        <div className="grid pt-14 md:pt-20 lg:pt-24 px-6 md:px-12 lg:px-16 xl:px-20">

          <Card />

          <FadeIn direction="up" delay={0.2}>
            <div className="flex flex-col lg:flex-row justify-center items-center mb-[130px]">
              <div className="hero-section-stats-col">
                <p className="hero-section-stats-numbers">{t('hero.stat1Value')}</p>
                <p className="hero-section-stats-description">{t('hero.stat1Label1')}</p>
                <p className="hero-section-stats-description">{t('hero.stat1Label2')}</p>
              </div>
              <div className="hero-section-stats-col">
                <p className="hero-section-stats-numbers">{t('hero.stat2Value')}</p>
                <p className="hero-section-stats-description">{t('hero.stat2Label1')}</p>
                <p className="hero-section-stats-description">{t('hero.stat2Label2')}</p>
              </div>
              <div className="hero-section-stats-col">
                <p className="hero-section-stats-numbers">{t('hero.stat3Value')}</p>
                <p className="hero-section-stats-description">{t('hero.stat3Label1')}</p>
                <p className="hero-section-stats-description">{t('hero.stat3Label2')}</p>
              </div>
              <div className="h-32 text-white text-center lg:text-left">
                <p className="hero-section-stats-getpopup">{t('hero.tagline1')}</p>
                <p className="hero-section-stats-getpopup">{t('hero.tagline2')}</p>
                <p className="hero-section-stats-getpopup">{t('hero.tagline3')}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>


    </>
  )
}

export default index

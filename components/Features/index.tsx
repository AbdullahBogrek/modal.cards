import { useTranslation } from '../../contexts/TranslationContext';
import FadeIn from '../animations/FadeIn';
import { StaggerContainer, StaggerItem } from '../animations/StaggerContainer';

const FEATURES = [
  {
    titleKey: 'features.smartTargeting',
    descKey: 'features.smartTargetingDesc',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
  {
    titleKey: 'features.visualEditor',
    descKey: 'features.visualEditorDesc',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    titleKey: 'features.lightweight',
    descKey: 'features.lightweightDesc',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    titleKey: 'features.mobileReady',
    descKey: 'features.mobileReadyDesc',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    titleKey: 'features.webhooks',
    descKey: 'features.webhooksDesc',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    titleKey: 'features.multiLanguage',
    descKey: 'features.multiLanguageDesc',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a15.3 15.3 0 014 9 15.3 15.3 0 01-4 9 15.3 15.3 0 01-4-9 15.3 15.3 0 014-9z" />
      </svg>
    ),
  },
] as const;

const Features = () => {
  const { t } = useTranslation();

  return (
    <section id="features" className="bg-surface">
      <div className="max-w-[1400px] mx-auto py-24 px-6 md:px-12 lg:px-16 xl:px-20">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">{t('features.title')}</h2>
            <p className="font-primary font-normal text-lg text-text-secondary max-w-xl mx-auto">
              {t('features.subtitle')}
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <StaggerItem key={feature.titleKey}>
              <div className="feature-card h-full">
                <div className="feature-card-icon">
                  {feature.icon}
                </div>
                <h3 className="font-primary font-semibold text-base text-text mb-2">
                  {t(feature.titleKey)}
                </h3>
                <p className="font-secondary text-sm text-text-secondary leading-relaxed">
                  {t(feature.descKey)}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Features;

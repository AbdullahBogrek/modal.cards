import Link from 'next/link';
import { useTranslation } from '../../contexts/TranslationContext';
import FadeIn from '../animations/FadeIn';
import { StaggerContainer, StaggerItem } from '../animations/StaggerContainer';

const STEPS = [
  { titleKey: 'howItWorks.step1Title', descKey: 'howItWorks.step1Desc', icon: 'template' },
  { titleKey: 'howItWorks.step2Title', descKey: 'howItWorks.step2Desc', icon: 'customize' },
  { titleKey: 'howItWorks.step3Title', descKey: 'howItWorks.step3Desc', icon: 'rules' },
  { titleKey: 'howItWorks.step4Title', descKey: 'howItWorks.step4Desc', icon: 'embed' },
] as const;

const StepIcon = ({ icon }: { icon: string }) => (
  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    {icon === 'template' && (
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    )}
    {icon === 'customize' && (
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    )}
    {icon === 'rules' && (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
    )}
    {icon === 'embed' && (
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    )}
  </svg>
);

const HowItWorks = () => {
  const { t } = useTranslation();

  return (
    <section id="how-it-works" className="bg-surface">
      <div className="max-w-[1400px] mx-auto py-24 px-6 md:px-12 lg:px-16 xl:px-20">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">{t('howItWorks.title')}</h2>
            <p className="font-primary font-normal text-lg text-text-secondary max-w-xl mx-auto">
              {t('howItWorks.subtitle')}
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {STEPS.map((step, index) => (
            <StaggerItem key={step.titleKey}>
              <div className="how-it-works-card h-full">
                <div className="how-it-works-number mb-4">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <StepIcon icon={step.icon} />
                  <h3 className="font-primary font-semibold text-lg text-text">
                    {t(step.titleKey)}
                  </h3>
                </div>
                <p className="font-secondary text-sm text-text-secondary leading-relaxed">
                  {t(step.descKey)}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn direction="up" delay={0.3}>
          <div className="text-center">
            <Link href="/generator">
              <a className="btn hero-cta-primary px-8 py-4 text-base lg:text-lg font-semibold inline-flex items-center">
                {t('howItWorks.cta')}
                <svg className="ml-2 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default HowItWorks;

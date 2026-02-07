import { useTranslation } from '../../contexts/TranslationContext';
import FadeIn from '../animations/FadeIn';
import HeroBadge from './HeroBadge';
import HeroCTA from './HeroCTA';
import HeroFeaturePills from './HeroFeaturePills';
import ModalShowcase from './ModalShowcase';
import HeroStats from './HeroStats';
import RotatingText from './RotatingText';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="hero-section bg-surface">
        <div className="max-w-[1600px] mx-auto pt-8 md:pt-12 lg:pt-16 pb-16 px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left column: Copy */}
            <div className="flex flex-col lg:col-span-5">
              <FadeIn direction="up" delay={0}>
                <HeroBadge />
              </FadeIn>

              <FadeIn direction="up" delay={0.1}>
                <h1 className="font-primary font-bold text-text text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mt-6 mb-6">
                  {t('hero.headlinePre')}
                  <RotatingText
                    words={[t('hero.headlineWord1'), t('hero.headlineWord2'), t('hero.headlineWord3'), t('hero.headlineWord4')]}
                    className="hero-gradient-text"
                  />
                  {t('hero.headlinePost')}
                </h1>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <p className="font-primary font-normal text-text-secondary text-lg md:text-xl lg:text-2xl mb-8 max-w-xl">
                  {t('hero.subtitle')}
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <HeroCTA />
              </FadeIn>

              <FadeIn direction="up" delay={0.4}>
                <HeroFeaturePills />
              </FadeIn>
            </div>

            {/* Right column: Visual showcase */}
            <FadeIn direction="left" delay={0.3} duration={0.8} className="lg:col-span-7">
              <ModalShowcase />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="hero-stats-section">
        <div className="max-w-[1400px] mx-auto py-16 md:py-24 px-6 md:px-12 lg:px-16 xl:px-20">
          <FadeIn direction="up" delay={0.2}>
            <HeroStats />
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default Hero;

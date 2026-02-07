import { useTranslation } from '../../contexts/TranslationContext';
import { useEffect, useState, useRef } from 'react';

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
}

const HeroStats = () => {
  const { t } = useTranslation();
  const stat1 = useCountUp(3, 1500);
  const stat2 = useCountUp(120, 2000);
  const stat3 = useCountUp(390, 2500);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
      <div className="hero-stat-card text-center" ref={stat1.ref}>
        <p className="font-primary font-bold text-5xl lg:text-6xl text-primary">
          {stat1.count}x
        </p>
        <p className="font-secondary font-medium text-base text-text mt-2">
          {t('hero.stat1Label')}
        </p>
        <p className="font-secondary font-normal text-sm text-text-secondary mt-1">
          {t('hero.stat1Desc')}
        </p>
      </div>
      <div className="hero-stat-card text-center" ref={stat2.ref}>
        <p className="font-primary font-bold text-5xl lg:text-6xl text-primary">
          {stat2.count}%
        </p>
        <p className="font-secondary font-medium text-base text-text mt-2">
          {t('hero.stat2Label')}
        </p>
        <p className="font-secondary font-normal text-sm text-text-secondary mt-1">
          {t('hero.stat2Desc')}
        </p>
      </div>
      <div className="hero-stat-card text-center" ref={stat3.ref}>
        <p className="font-primary font-bold text-5xl lg:text-6xl text-primary">
          {stat3.count}%
        </p>
        <p className="font-secondary font-medium text-base text-text mt-2">
          {t('hero.stat3Label')}
        </p>
        <p className="font-secondary font-normal text-sm text-text-secondary mt-1">
          {t('hero.stat3Desc')}
        </p>
      </div>
    </div>
  );
};

export default HeroStats;

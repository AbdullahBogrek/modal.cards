import { useTranslation } from '../../contexts/TranslationContext';

const FEATURES = [
  { key: 'hero.feature1', icon: 'check' },
  { key: 'hero.feature2', icon: 'zap' },
  { key: 'hero.feature3', icon: 'shield' },
] as const;

const HeroFeaturePills = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-wrap gap-3">
      {FEATURES.map(({ key, icon }) => (
        <span key={key} className="hero-feature-pill">
          <svg className="w-4 h-4 text-primary mr-2" fill="none" stroke="currentColor"
               strokeWidth="2" viewBox="0 0 24 24">
            {icon === 'check' && (
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            )}
            {icon === 'zap' && (
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            )}
            {icon === 'shield' && (
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            )}
          </svg>
          <span className="font-secondary text-sm text-text-secondary">{t(key)}</span>
        </span>
      ))}
    </div>
  );
};

export default HeroFeaturePills;

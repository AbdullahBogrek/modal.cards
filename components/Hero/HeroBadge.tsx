import { useTranslation } from '../../contexts/TranslationContext';

const HeroBadge = () => {
  const { t } = useTranslation();
  return (
    <div className="inline-flex items-center">
      <span className="hero-badge">
        <span className="hero-badge-dot" />
        <span className="font-secondary font-medium text-sm text-text">
          {t('hero.badge')}
        </span>
      </span>
    </div>
  );
};

export default HeroBadge;

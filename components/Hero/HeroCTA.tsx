import Link from 'next/link';
import { useTranslation } from '../../contexts/TranslationContext';

const HeroCTA = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-start mb-8">
      <Link href="/generator">
        <a className="hero-cta-gradient px-8 py-4 text-base lg:text-lg font-secondary font-semibold text-white rounded-xl inline-flex items-center">
          {t('hero.ctaPrimary')}
          <svg className="ml-2 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </Link>
    </div>
  );
};

export default HeroCTA;

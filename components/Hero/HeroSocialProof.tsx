import { useTranslation } from '../../contexts/TranslationContext';

const AVATAR_COLORS = ['bg-purple-400', 'bg-blue-400', 'bg-green-400', 'bg-yellow-400', 'bg-pink-400'];
const AVATAR_INITIALS = ['A', 'M', 'S', 'J', 'K'];

const HeroSocialProof = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="flex -space-x-2">
        {AVATAR_COLORS.map((color, i) => (
          <div key={i} className={`hero-avatar ${color}`}>
            <span className="font-secondary font-semibold text-white text-xs">
              {AVATAR_INITIALS[i]}
            </span>
          </div>
        ))}
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="font-secondary text-sm text-text-secondary">
          {t('hero.socialProof')}
        </span>
      </div>
    </div>
  );
};

export default HeroSocialProof;

import { useTranslation, Locale } from '../../contexts/TranslationContext';

const LanguageSwitcher = () => {
  const { locale, setLocale } = useTranslation();

  return (
    <div className="flex items-center bg-surface-alt rounded-lg overflow-hidden" aria-label="Language switcher">
      {(['en', 'tr'] as Locale[]).map((lang) => (
        <button
          key={lang}
          onClick={() => setLocale(lang)}
          aria-pressed={locale === lang}
          className={`px-3 py-1.5 text-xs font-secondary font-semibold uppercase transition-colors duration-200 ${
            locale === lang
              ? 'bg-primary text-white'
              : 'text-text-muted hover:text-text'
          }`}
        >
          {lang}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;

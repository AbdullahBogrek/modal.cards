import Link from 'next/link';
import { useTranslation } from '../../contexts/TranslationContext';
import ThemeToggle from '../ThemeToggle';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-surface border-t border-border-light">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://cdn.getpopup.site/static/getpopup.png"
                onError={(e) => { (e.target as HTMLImageElement).src = '/assets/logo.png'; }}
                className="h-8 border border-border-light rounded-lg p-0.5"
                alt="getpopup"
              />
              <span className="font-primary font-bold text-base text-text">getpopup</span>
            </div>
            <p className="font-secondary text-sm text-text-secondary leading-relaxed max-w-xs">
              {t('footer.description')}
            </p>
          </div>

          {/* Product links */}
          <div>
            <h4 className="font-primary font-semibold text-sm text-text mb-4">{t('footer.product')}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/generator">
                  <a className="font-secondary text-sm text-text-secondary hover:text-text transition-colors">{t('footer.templates')}</a>
                </Link>
              </li>
              <li>
                <a href="#features" className="font-secondary text-sm text-text-secondary hover:text-text transition-colors">{t('footer.features')}</a>
              </li>
              <li>
                <a href="#how-it-works" className="font-secondary text-sm text-text-secondary hover:text-text transition-colors">{t('footer.howItWorks')}</a>
              </li>
              <li>
                <span className="font-secondary text-sm text-text-disabled">{t('footer.pricing')}</span>
              </li>
            </ul>
          </div>

          {/* Resources links */}
          <div>
            <h4 className="font-primary font-semibold text-sm text-text mb-4">{t('footer.resources')}</h4>
            <ul className="space-y-3">
              <li>
                <span className="font-secondary text-sm text-text-disabled">{t('footer.documentation')}</span>
              </li>
              <li>
                <a href="#faq" className="font-secondary text-sm text-text-secondary hover:text-text transition-colors">{t('footer.faq')}</a>
              </li>
              <li>
                <span className="font-secondary text-sm text-text-disabled">{t('footer.blog')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-12 pt-6 border-t border-border-light gap-4">
          <p className="font-secondary text-xs text-text-muted">{t('footer.copyright')}</p>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

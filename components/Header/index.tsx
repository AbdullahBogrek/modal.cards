import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from '../../contexts/TranslationContext';
import LanguageSwitcher from '../LanguageSwitcher';
import ThemeToggle from '../ThemeToggle';

const NAV_LINKS = [
  { key: 'header.howItWorks', href: '#how-it-works' },
  { key: 'header.features', href: '#features' },
  { key: 'header.faq', href: '#faq' },
  { key: 'header.templates', href: '/generator', isPage: true },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className="flex items-center justify-between py-4 px-6 md:px-12 lg:px-16 xl:px-20">
      {/* Logo */}
      <Link href="/">
        <a className="flex items-center gap-2 flex-shrink-0">
          <img
            src="https://cdn.getpopup.site/static/getpopup.png"
            onError={(e) => { (e.target as HTMLImageElement).src = '/assets/logo.png'; }}
            className="h-9 border border-border-light rounded-lg p-0.5"
            alt="getpopup Logo"
          />
          <span className="text-lg font-primary font-bold text-text">getpopup</span>
        </a>
      </Link>

      {/* Nav links — centered on desktop */}
      <div className="hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
        {NAV_LINKS.map((link) =>
          link.isPage ? (
            <Link key={link.key} href={link.href}>
              <a className="text-sm font-secondary font-medium text-text-secondary hover:text-text transition-colors">
                {t(link.key)}
              </a>
            </Link>
          ) : (
            <a
              key={link.key}
              href={link.href}
              className="text-sm font-secondary font-medium text-text-secondary hover:text-text transition-colors"
            >
              {t(link.key)}
            </a>
          )
        )}
      </div>

      {/* Controls — right side on desktop */}
      <div className="hidden lg:flex items-center gap-2">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>

      {/* Mobile menu toggle */}
      <button
        className="lg:hidden p-2 rounded-lg text-text hover:bg-surface-alt transition-colors"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col items-start gap-4 absolute top-16 left-0 right-0 bg-surface px-6 py-4 border-b border-border-light z-40">
          {NAV_LINKS.map((link) =>
            link.isPage ? (
              <Link key={link.key} href={link.href}>
                <a
                  className="text-sm font-secondary font-medium text-text-secondary hover:text-text transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {t(link.key)}
                </a>
              </Link>
            ) : (
              <a
                key={link.key}
                href={link.href}
                className="text-sm font-secondary font-medium text-text-secondary hover:text-text transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {t(link.key)}
              </a>
            )
          )}
          <div className="flex items-center gap-2 pt-2 border-t border-border-light w-full">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;

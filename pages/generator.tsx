import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useTranslation } from '../contexts/TranslationContext';
import Generator from '../components/Generator';
import ThemeToggle from '../components/ThemeToggle';
import LanguageSwitcher from '../components/LanguageSwitcher';

const GeneratorPage: NextPage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-surface text-text min-h-screen">
      <Head>
        <title>Modal Card Generator - getpopup</title>
      </Head>

      {/* Minimal header */}
      <nav className="generator-page-header relative">
        <Link href="/">
          <a className="inline-flex items-center gap-2 font-secondary font-medium text-sm text-text-secondary hover:text-primary transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t('generatorPage.backToHome')}
          </a>
        </Link>

        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
          <img
            src="https://cdn.getpopup.site/static/getpopup.png"
            onError={(e) => { (e.target as HTMLImageElement).src = '/assets/logo.png'; }}
            className="h-8 border border-border-light rounded-lg p-0.5"
            alt="getpopup"
          />
          <span className="font-primary font-bold text-base text-text hidden sm:inline">getpopup</span>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Generator */}
      <Generator />
    </div>
  );
};

export default GeneratorPage;

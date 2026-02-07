import React, { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';
import en from '../locales/en.json';
import tr from '../locales/tr.json';

export type Locale = 'en' | 'tr';

const STORAGE_KEY = 'getpopup-locale';
const SUPPORTED_LOCALES: Locale[] = ['en', 'tr'];

function detectLocale(): Locale {
  // 1. Check localStorage
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED_LOCALES.includes(stored as Locale)) {
      return stored as Locale;
    }
    // 2. Check browser language
    const browserLang = navigator.language?.split('-')[0];
    if (browserLang && SUPPORTED_LOCALES.includes(browserLang as Locale)) {
      return browserLang as Locale;
    }
  }
  // 3. Default to English
  return 'en';
}

interface TranslationContextProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const translations: Record<Locale, typeof en> = { en, tr };

const TranslationContext = createContext<TranslationContextProps>({
  locale: 'en',
  setLocale: () => {},
  t: (key: string) => key,
});

export function useTranslation() {
  return useContext(TranslationContext);
}

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>('en');

  // Detect locale on mount (client-side only)
  useEffect(() => {
    setLocaleState(detectLocale());
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, newLocale);
    }
  }, []);

  const t = useCallback((key: string): string => {
    const keys = key.split('.');
    let result: any = translations[locale];
    for (const k of keys) {
      result = result?.[k];
      if (result === undefined) return key;
    }
    return typeof result === 'string' ? result : key;
  }, [locale]);

  return (
    <TranslationContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

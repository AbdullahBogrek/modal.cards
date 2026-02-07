import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import en from '../locales/en.json';
import tr from '../locales/tr.json';

export type Locale = 'en' | 'tr';

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
  const [locale, setLocale] = useState<Locale>('en');

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

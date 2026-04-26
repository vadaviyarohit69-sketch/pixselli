"use client";

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import {
  DEFAULT_LOCALE,
  getPathLocale,
  Locale,
  replaceLocaleInPath,
  translate,
} from '@/lib/i18n';

const LOCALE_STORAGE_KEY = 'pixselli-locale';

type LanguageContextValue = {
  locale: Locale;
  setLocale: (nextLocale: Locale) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [locale, setLocaleState] = useState<Locale>(() => getPathLocale(pathname) ?? DEFAULT_LOCALE);

  const getCurrentLocation = () => {
    if (typeof window !== 'undefined') {
      return {
        pathname: window.location.pathname,
        search: window.location.search,
        hash: window.location.hash,
      };
    }

    return {
      pathname,
      search: '',
      hash: '',
    };
  };

  useEffect(() => {
    const pathLocale = getPathLocale(pathname);
    const storedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;

    if (pathLocale) {
      setLocaleState(pathLocale);
      if (storedLocale !== pathLocale) {
        window.localStorage.setItem(LOCALE_STORAGE_KEY, pathLocale);
      }
      return;
    }

    if (storedLocale && storedLocale !== DEFAULT_LOCALE) {
      const { search, hash } = getCurrentLocation();
      const nextPath = replaceLocaleInPath(pathname, storedLocale);
      const nextUrl = `${nextPath}${search}${hash}`;
      
      if (nextPath !== pathname) {
        router.replace(nextUrl);
        return;
      }
    }

    setLocaleState(DEFAULT_LOCALE);
    if (storedLocale !== DEFAULT_LOCALE) {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, DEFAULT_LOCALE);
    }
  }, [pathname, router]);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale);

    const { pathname: currentPathname, search, hash } = getCurrentLocation();
    const nextPath = replaceLocaleInPath(currentPathname, nextLocale);
    const nextUrl = `${nextPath}${search}${hash}`;

    if (nextPath !== currentPathname) {
      router.replace(nextUrl);
    }
  };

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      t: (key: string) => translate(locale, key),
    }),
    [locale]
  );

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }

  return context;
}
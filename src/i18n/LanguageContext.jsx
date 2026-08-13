import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { translations } from './translations';

const STORAGE_KEY = 'bn_lang';

const LanguageContext = createContext(null);

function readStoredLang() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'ro' || saved === 'en') return saved;
  } catch {
    /* storage unavailable — fall back to the default language */
  }
  return 'ro';
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(readStoredLang);

  const setLang = useCallback((next) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable — the choice still applies for this session */
    }
    setLangState(next);
    document.documentElement.lang = next;
  }, []);

  const value = useMemo(() => ({ lang, setLang, ui: translations[lang] }), [lang, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLang must be used inside a LanguageProvider');
  return context;
}

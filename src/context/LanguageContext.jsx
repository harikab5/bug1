// Language context for global language and direction
import React, { createContext, useContext, useState } from 'react';

const languages = {
  en: {
    label: 'English',
    dir: 'ltr',
    code: 'en',
  },
  ar: {
    label: 'العربية',
    dir: 'rtl',
    code: 'ar',
  },
  he: {
    label: 'עברית',
    dir: 'rtl',
    code: 'he',
  },
};

const LanguageContext = createContext({
  language: languages.en,
  setLanguage: () => {},
});

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(languages.en);
  return (
    <LanguageContext.Provider value={{ language, setLanguage, languages }}>
      <div dir={language.dir} lang={language.code} style={{ width: '100%' }}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

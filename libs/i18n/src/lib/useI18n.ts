'use client';

import { useTranslation } from 'react-i18next';

export type Language = 'ko' | 'en';

export const useI18n = () => {
  const { t, i18n } = useTranslation('common');

  const changeLanguage = (lang: Language) => {
    i18n.changeLanguage(lang);
  };

  return {
    t,
    changeLanguage,
    currentLanguage: i18n.language as Language,
    isReady: i18n.isInitialized,
  };
};

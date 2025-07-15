'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 번역 파일 import
import enCommon from '../locales/en/common.json';
import koCommon from '../locales/ko/common.json';

const resources = {
  en: {
    common: enCommon,
  },
  ko: {
    common: koCommon,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ko', // 기본 언어
  fallbackLng: 'en', // 대체 언어

  // 네임스페이스 설정
  defaultNS: 'common',
  ns: ['common'],

  interpolation: {
    escapeValue: false, // React는 기본적으로 XSS 보호가 되어 있음
  },

  react: {
    useSuspense: false, // SSR 호환성을 위해 false
  },

  // 개발 환경에서만 디버그 모드 활성화
  debug: process.env.NODE_ENV === 'development',

  // 키가 없을 때 키 자체를 반환
  returnNull: false,
  returnEmptyString: false,
});

export default i18n;

'use client';

import React from 'react';
import { useI18n, type Language } from './useI18n';

const languages: { code: Language; name: string }[] = [
  { code: 'ko', name: '한국어' },
  { code: 'en', name: 'English' },
];

interface LanguageSelectorProps {
  className?: string;
  style?: React.CSSProperties;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  className,
  style
}) => {
  const { currentLanguage, changeLanguage, t } = useI18n();

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', ...style }}>
      <span style={{ fontSize: '14px', color: '#666' }}>
        {t('language')}:
      </span>
      <select
        value={currentLanguage}
        onChange={(e) => changeLanguage(e.target.value as Language)}
        className={className}
        style={{
          padding: '4px 8px',
          border: '1px solid #ddd',
          borderRadius: '4px',
          fontSize: '14px',
          backgroundColor: 'white',
          cursor: 'pointer',
        }}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

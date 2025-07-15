import React from 'react';
import { I18nProvider, useI18n, LanguageSelector } from './index';

// 메인 컴포넌트 예제
const ExampleApp: React.FC = () => {
  return (
    <I18nProvider>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <Header />
        <MainContent />
      </div>
    </I18nProvider>
  );
};

// 헤더 컴포넌트
const Header: React.FC = () => {
  const { t } = useI18n();

  return (
    <header style={{
      padding: '20px',
      backgroundColor: '#f5f5f5',
      marginBottom: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h1>{t('welcome')}</h1>
      <LanguageSelector />
    </header>
  );
};

// 메인 콘텐츠 컴포넌트
const MainContent: React.FC = () => {
  const { t, changeLanguage, currentLanguage } = useI18n();

  return (
    <main>
      <section style={{ marginBottom: '20px' }}>
        <h2>{t('settings')}</h2>
        <p>{t('language')}: {currentLanguage}</p>

        <div style={{ marginTop: '10px' }}>
          <button
            onClick={() => changeLanguage('ko')}
            style={{ marginRight: '10px', padding: '8px 16px' }}
          >
            한국어
          </button>
          <button
            onClick={() => changeLanguage('en')}
            style={{ padding: '8px 16px' }}
          >
            English
          </button>
        </div>
      </section>

      <section>
        <h2>{t('home')}</h2>
        <p>{t('hello')}</p>
        <p>{t('loading')}</p>

        <div style={{ marginTop: '20px' }}>
          <button style={{ marginRight: '10px', padding: '8px 16px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
            {t('confirm')}
          </button>
          <button style={{ padding: '8px 16px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px' }}>
            {t('cancel')}
          </button>
        </div>
      </section>
    </main>
  );
};

export default ExampleApp;

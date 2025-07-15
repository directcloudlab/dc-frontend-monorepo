import React, { useEffect, useState, useCallback } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Text } from 'react-native';
import i18n from './i18n.native';

interface I18nProviderProps {
  children: React.ReactNode;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState(false);

  const handleInitialized = useCallback(() => {
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    // i18n이 이미 초기화되었는지 확인
    if (i18n?.isInitialized) {
      setIsInitialized(true);
    } else {
      // 초기화 이벤트 리스너 등록
      i18n?.on('initialized', handleInitialized);
    }

    return () => {
      // 컴포넌트 언마운트 시 이벤트 리스너 제거
      i18n?.off('initialized', handleInitialized);
    };
  }, [handleInitialized]);

  // 초기화되지 않았으면 로딩 표시
  if (!isInitialized) {
    return <Text>Loading...</Text>;
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

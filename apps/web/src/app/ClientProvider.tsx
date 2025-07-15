'use client';

import { I18nProvider } from '@dc-frontend-monorepo/i18n';

interface ClientProviderProps {
  children: React.ReactNode;
}

export function ClientProvider({ children }: ClientProviderProps) {
  return <I18nProvider>{children}</I18nProvider>;
}

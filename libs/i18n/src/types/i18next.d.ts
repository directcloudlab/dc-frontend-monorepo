import 'react-i18next';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: {
      common: {
        welcome: string;
        settings: string;
        language: string;
        home: string;
        hello: string;
        loading: string;
        confirm: string;
        cancel: string;
      };
    };
  }
}

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useI18n, type Language } from './useI18n';

const languages: { code: Language; name: string }[] = [
  { code: 'ko', name: '한국어' },
  { code: 'en', name: 'English' },
];

interface LanguageSelectorProps {
  style?: any;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  style
}) => {
  const { currentLanguage, changeLanguage, t } = useI18n();

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>
        {t('language')}:
      </Text>
      <View style={styles.buttonContainer}>
        {languages.map((lang) => (
          <TouchableOpacity
            key={lang.code}
            style={[
              styles.button,
              currentLanguage === lang.code && styles.activeButton
            ]}
            onPress={() => changeLanguage(lang.code)}
          >
            <Text
              style={[
                styles.buttonText,
                currentLanguage === lang.code && styles.activeButtonText
              ]}
            >
              {lang.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginRight: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    backgroundColor: 'white',
    marginRight: 4,
  },
  activeButton: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  buttonText: {
    fontSize: 14,
    color: '#333',
  },
  activeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

import * as RNLocalize from 'react-native-localize';

const defaultLanguageTag = 'en-us';

export const getBestLanguageAvailable = () => {
  const locales = RNLocalize.getLocales();

  const { languageTag } = locales[0];

  return languageTag || defaultLanguageTag;
};

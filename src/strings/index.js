import LocalizedStrings from 'react-native-localization';

import enus from './en-us';
import ptbr from './pt-br';
import eses from './es-es';

const strings = new LocalizedStrings({
  'en-US': enus,
  'pt-BR': ptbr,
  'es-ES': eses,
});

export default strings;

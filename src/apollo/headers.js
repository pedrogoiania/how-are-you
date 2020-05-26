import { getBestLanguageAvailable } from '../utils/locales';

const headers = {
  'accept-language': getBestLanguageAvailable(),
};

export default headers;

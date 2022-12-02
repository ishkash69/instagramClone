import LocalizedStrings from 'react-native-localization';
import en from './en';
import ar from './ar';
import ru from "./ru"
import fr from './fr';

let strings = new LocalizedStrings({
  en:en,
  ar:ar,
  ru:ru,
  fr:fr,
});

export default strings;
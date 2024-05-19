import messages_fr from '../messages_fr.json';
import messages_en from '../messages_en.json';
import messages_es from '../messages_es.json';

const languages = {
  fr: messages_fr,
  en: messages_en,
  es: messages_es,
};

export default function getMessages(language) {
  return languages[language];
}

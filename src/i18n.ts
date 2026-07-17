import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './i18n/en.json';
import es from './i18n/es.json';

const getInitialLanguage = (): string => {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    if (langParam && (langParam === 'en' || langParam === 'es')) {
        return langParam;
    }
    
    const envLang = process.env.REACT_APP_LANG;
    if (envLang && (envLang === 'en' || envLang === 'es')) {
        return envLang;
    }
    
    return 'en';
};

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            es: { translation: es }
        },
        lng: getInitialLanguage(),
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;

import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import en from '../languages/en'
import ru from '../languages/ru'
import uz from '../languages/uz'

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		debug: true,
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false,
		},
		resources: {
			uz: { translation: uz },
			ru: { translation: ru },
			en: { translation: en }
		}
	})

export default i18n
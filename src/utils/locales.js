import { countries, getFlag } from './countries'

export const SUPPORTED_LOCALES = [
  'af-ZA',
  'ar-SA',
  'ca-ES',
  'cs-CZ',
  'da-DK',
  'de-DE',
  'el-GR',
  'en-US',
  'es-ES',
  'fi-FI',
  'fr-FR',
  'he-IL',
  'hu-HU',
  'id-ID',
  'it-IT',
  'ja-JP',
  'ko-KR',
  'nl-NL',
  'no-NO',
  'pl-PL',
  'pt-BR',
  'pt-PT',
  'ro-RO',
  'ru-RU',
  'sr-SP',
  'sv-SE',
  'tr-TR',
  'uk-UA',
  'vi-VN',
  'zh-CN',
  'zh-TW'
]

export const DEFAULT_LOCALE = 'en-US'

export const LOCALE_LABEL = {
  'af-ZA': 'Afrikaans',
  'ar-SA': 'العربية',
  'ca-ES': 'Català',
  'cs-CZ': 'čeština',
  'da-DK': 'dansk',
  'de-DE': 'Deutsche',
  'el-GR': 'ελληνικά',
  'en-US': 'English',
  'es-ES': 'Español',
  'fi-FI': 'Suomalainen',
  'fr-FR': 'français',
  'he-IL': 'עִברִית',
  'hu-HU': 'Magyar',
  'id-ID': 'bahasa Indonesia',
  'it-IT': 'Italiano',
  'ja-JP': '日本語',
  'ko-KR': '한국어',
  'nl-NL': 'Nederlands',
  'no-NO': 'norsk',
  'pl-PL': 'Polskie',
  'pt-BR': 'português',
  'pt-PT': 'português',
  'ro-RO': 'Română',
  'ru-RU': 'русский',
  'sr-SP': 'Српски',
  'sv-SE': 'svenska',
  'tr-TR': 'Türkçe',
  'uk-UA': 'Український',
  'vi-VN': 'Tiếng Việt',
  'zh-CN': '中文 ( 中国 )',
  'zh-TW': '中文 ( 台灣 )'
}

export const localeOptions = [
  {
    locale: 'en-US',
    countryFlag: getFlag('United States')
  },
  {
    locale: 'es-ES',
    countryFlag: getFlag('Spain')
  }
]

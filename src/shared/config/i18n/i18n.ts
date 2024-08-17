import type { HttpBackendOptions } from "i18next-http-backend"

import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import Backend from "i18next-http-backend"
import { initReactI18next } from "react-i18next"

const BASE_URL =
  import.meta.env.MODE === "production"
    ? import.meta.env.VITE_API_URL
    : "http://localhost:8000/"

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init<HttpBackendOptions>({
    backend: {
      loadPath: ln => `${BASE_URL}${ln}`,
    },
    fallbackLng: "ru",
    debug: false,
    react: {
      // react-i18next options
      useSuspense: true,
    },
    interpolation: {
      escapeValue: false, // not needed for React as it escapes by default
    },
  })

export default i18n

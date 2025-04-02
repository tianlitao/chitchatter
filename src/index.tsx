import './polyfills'
import ReactDOM from 'react-dom/client'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import 'typeface-roboto'

import LanguageDetector from 'i18next-browser-languagedetector'

import 'modern-normalize/modern-normalize.css'
import './index.css'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'

import { resources } from './i18n/translations'

import Init from './Init'
import reportWebVitals from './reportWebVitals'

// NOTE: This is a workaround for MUI components attempting to access theme code
// before it has loaded.
// See: https://stackoverflow.com/a/76017295/470685
;<ThemeProvider theme={createTheme()} />

// NOTE: This is a workaround for SyntaxHighlighter not working reliably in the
// EmbedCodeDialog component. It seems to have the effect of warming some
// sort of internal cache that avoids a race condition within
// SyntaxHighlighter.
// See: https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/513
ReactDOM.createRoot(document.createElement('div')).render(
  <SyntaxHighlighter language="" children={''} />
)

// 初始化 i18next
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  })

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<Init />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

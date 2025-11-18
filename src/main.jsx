import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.scss'
import App from './App.jsx'
import { logWebVitals } from './utils/performance'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Monitor Web Vitals in development
logWebVitals()

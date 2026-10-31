import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
// @ts-ignore -- CSS is processed by the bundler, not TypeScript.
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

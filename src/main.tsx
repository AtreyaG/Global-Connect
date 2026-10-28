import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/*import App from './App.tsx'*/
import LandingPage from './LandingPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>,
)

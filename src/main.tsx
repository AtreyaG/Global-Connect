import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LandingPage from './LandingPage.tsx'
import ConnectionsPage from './pages/ConnectionsPage.tsx'

import { BrowserRouter, Routes, Route } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/Global-Connect" element={<LandingPage />} />
        <Route path="/Global-Connect/connections" element={<ConnectionsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

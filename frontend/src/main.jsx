import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { Providers } from "./components/ui/provider"
import { BrowserRouter } from 'react-router-dom'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Providers>
      <App />
    </Providers>
    </BrowserRouter>
  </StrictMode>,
)

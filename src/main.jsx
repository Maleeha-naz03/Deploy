import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import Jee from './components/commom/Jee.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Jee>      
      <App />
      </Jee>
    </BrowserRouter>
  </StrictMode>,
)

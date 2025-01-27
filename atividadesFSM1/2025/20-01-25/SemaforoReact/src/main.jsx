import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Semaforo from './Semaforo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Semaforo />
  </StrictMode>,
)

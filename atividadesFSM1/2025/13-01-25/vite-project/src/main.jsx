import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import './index.css'
import App from './App.jsx'
import Card from './components/Card';
import About from './components/About';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <App />
    <Card/>
    <About/>
    <Footer />
  </StrictMode>,
)

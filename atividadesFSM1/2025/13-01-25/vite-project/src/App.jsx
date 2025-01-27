import './App.css'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import Card from './components/Card';
import About from './components/About';
import ContadorDeLike from './components/ContadorDeLike.jsx'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Login from './components/Login';


function App() {

  return (
    // <>
    //   <Navbar />
    //   <Card />
    //   <ContadorDeLike />
    //   <About />
    //   <Footer />
    // </>

    <BrowserRouter>
      <Navbar/>
      <Routes>  
        <Route path="/" element={<Login />} />
        <Route path="/card" element={<Card />} />
        <Route path="/contador-de-like" element={<ContadorDeLike />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </BrowserRouter>

  )
}

export default App

import './App.css'
import Conteudo1 from './components/Conteudo1';
import Navbar from './components/Navbar';
import Conteudo2 from './components/Conteudo2';
import Videos from './components/Videos';
import Especialistas from './components/Especialistas';
import Form from './components/Form';
import Footer from './components/Footer';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Bemvindo from './components/Bemvindo';


function App() {

  return (
    <>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Bemvindo/>} />
        <Route path="/conteudo1" element={<Conteudo1 />} />
        <Route path="/conteudo2" element={<Conteudo2 />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/especialistas" element={<Especialistas />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  )
}

export default App
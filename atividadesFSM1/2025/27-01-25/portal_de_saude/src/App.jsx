import './App.css'
import Conteudo1 from './components/Conteudo1';
import Navbar from './components/Navbar';
import Conteudo2 from './components/Conteudo2';
import Videos from './components/Videos';
import Especialistas from './components/Especialistas';
import Form from './components/Form';
import Footer from './components/Footer';


function App() {

  return (
    <>
    <Navbar />
    <Conteudo1 />
    <Conteudo2 />
    <Videos />
    <Especialistas/>
    <Form/>
    <Footer/>
    </>
  )
}

export default App
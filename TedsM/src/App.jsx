
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import Techstack from './components/Techstack';
import Project from './components/Project';
import bg from './assets/dots13.png'
import Contact from './components/Contact';
import { Toaster } from 'react-hot-toast';



function App() {

  return (
    /*<div className='font-[Poppins] text-white bg-zinc-900 bg-gradient-to-l from-cyan-500/5 to-indigo-500/5 bg flex flex-col justify-between overflow-hidden' >*/
     <div className='font-[Poppins] text-white h-100% ' style={{ backgroundImage:`url(${bg})`
     }}>
      <Nav/>
      <Main />
      <Timeline/>
      <Techstack />
      <Project />
      <Contact />
      <Toaster position='top-right'/>
      <Footer />
    </div>
  )
}

export default App

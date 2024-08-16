import './App.css';
import { useEffect } from 'react';
import Aos from "aos";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Hero from './Components/UI/Hero';
import Skills from './Components/Skills';
import PageEnd from './Components/UI/PageEnd';



function App() {
  useEffect(() => {
    Aos.init();
  },[])
  return (
    <div className="App">
       <Header/>
       <main>
         <Hero/>
         <PageEnd/>
         <Skills/>
         <PageEnd/>
       </main>
       <Footer/>
    </div>
  );
}

export default App;

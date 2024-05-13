import { useEffect, useState } from 'react';
import './App.scss'
import Header from "./components/navbar/Header"
import Navbar from "./components/navbar/Navbar"
import Hero from './sections/Hero';
import AboutTest from './sections/AboutTest';
import { ProjectSec } from './sections/ProjectSec';
import { Contact } from './sections/Contact';


function App() {

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    setScrollPosition(currentPosition);
  };
  // Attach scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [scrollPosition]);
  
  return (
    <>
      <div className="home">
        <div className="nav">
          <Navbar scrollPosition={scrollPosition} />
        </div>
        <div className="main">
          <div className="header">
            <Header scrollPosition={scrollPosition} />            
          </div>
          <section id='hero'>
            <Hero />
          </section>
          <section id='about'>
            <AboutTest scrollPosition={scrollPosition} />
          </section>
          <section id='projects'>
            <ProjectSec scrollPosition={scrollPosition} />
          </section>
          <section id='contact'>
            <Contact scrollPosition={scrollPosition} />
          </section>
        </div>
      </div>
    </>
  )
}

export default App

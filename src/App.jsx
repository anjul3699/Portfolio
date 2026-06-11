import './App.css'
import Sidebar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import { useState } from 'react'


function App() {

  const scrollToSection = (page) =>{
    const id = page.toLowerCase()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({behavior: 'smooth'})
  }
  

  return (
    <div className="app-layout">
      <Sidebar  setActivePage={scrollToSection} />
      <main className='main-content'>
      <section id='home'> <Hero/> </section>
      <section id='about'> <About/> </section>
      <section id='portfolio'> <Portfolio/> </section>
      <section id='contact'><Contact/></section>
      
        
      </main>
    </div>
  )
}

export default App
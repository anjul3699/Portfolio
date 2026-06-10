import './App.css'
import Sidebar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/contact/contact'
import { useState } from 'react'


function App() {

  const scrollToSection = (page) =>{
    const id = page.toLowerCase()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({behavior: 'smooth'})
  }

  // const [activePage, setActivePage] = useState('Home')

  // const renderPage = () => {
  //   switch (activePage) {
  //     case 'Home':      return <Hero />
  //     case 'About':     return <About />
  //     case 'Portfolio': return <Portfolio />
  //     default:          return <Hero />
  //   }
  

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
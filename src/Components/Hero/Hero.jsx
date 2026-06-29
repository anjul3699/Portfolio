import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
   <div className='hero'>
      <div className="hero-text">
        <p className='top-text'>WELCOME TO MY PROFILE ⇉</p>
        <h1>I'm a Creative web developer</h1>
        <h3>Turning Clicks into Conversions with Code & Creativity</h3>
        <p>I design and develop scalable, responsive, and high-performance web applications, combining modern technologies with clean architecture and user-focused design. Also, Skilled in Adobe Illustrator, Figma, Canva, Google Analytics (GA4), and email marketing platforms 
        with full campaign ownership. </p>
        <button className='btn-hero'>Know More</button>
        <button 
        onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}
        className='btn-hire'>Hire Me   →</button>
      </div>
    </div>
  )
}

export default Hero

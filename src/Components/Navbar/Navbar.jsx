import React, { useState } from 'react'
import './Navbar.css'
import profilepic from '../../assets/profile-pic.jpg'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const navItems = ['Home', 'About', 'Portfolio', 'Contact']

const Navbar = ({ setActivePage }) => {
const [isOpen, setIsOpen] = useState(false)    //sidebar toggle

const handleNav = (item) =>{
  setActivePage(item)
  setIsOpen(false)
}

  return (
    <>
    <button className='hamburger' onClick={()=> setIsOpen(!isOpen)}>
      {isOpen ? 'X' : '≡'}

    </button>

    
      <div className= {`overlay ${isOpen ? 'overlay-open': ''}`} onClick={()=> setIsOpen(false)} />

      
    
    <aside className={`sidebar ${isOpen ? 'sidebar-open': ''}`}>

      {/* Avatar */}
      <div className="avatar-ring">
        <img src={profilepic} alt='profile' className='avatar-img' />
      </div>
      <p className="sidebar-name">ANJUL SAM</p>

      {/* Navigation */}
      <nav className="sidebar-nav">
        {navItems.map(item => (
          <button
            key={item}
            className="nav-item"
            onClick={() => handleNav(item)}>
              
            {item}
          </button>
        ))}
      </nav>

      {/* Social Icons */}
      <div className="sidebar-socials">
        <a href="https://www.linkedin.com/in/anjul-toppo" target="_blank" rel="noreferrer">
        <FaLinkedin className='text-2xl text-green-500 cursor-pointer' />
       </a>

        <a href="https://github.com/anjul3699" target="_blank" rel="noreferrer">
        <FaGithub className='text-2xl text-green-500 cursor-pointer' />
        </a>
        
        
      </div>

    </aside>
    </>
  )
}

export default Navbar
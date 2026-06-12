import React from 'react'
import './About.css'
import aboutimg from '../../assets/about-side.png'
import {  FaCss3Alt, FaHtml5, FaNode, FaReact } from "react-icons/fa6";
import { BsJavascript } from "react-icons/bs";
import { BiLogoMongodb } from "react-icons/bi";
import { DiIllustrator, DiPhotoshop } from "react-icons/di";
import { TbBrandAdobeAfterEffect } from "react-icons/tb";




const About = () => {


  return (
    <section className='about'>
      <div className='about-sec'>
        <h1 className= "text-center text-2xl md:text-3xl mb-10 underline underline-offset-10 decoration-green-600">About Me</h1>
        <div>
      <ul>
        
        <li className='text-center w-full  max-w-3xl mx-auto px-4 text-sm md:text-base '>I specialize in frontend development using React, JavaScript, and WordPress, combined with strong skills in graphic design and digital marketing. My goal is to build websites that not only look great but also drive engagement, traffic, and business growth.</li>
       
      </ul>
        </div>
       
             <div className='m-10 md:m-20 pt-5'>
              <h2 className='text-center text-xl font-bold underline underline-offset-10 decoration-green-600'>SKILLS</h2>
            </div>


            <div className='flex flex-wrap justify-center gap-8 md:gap-20 text-center px-4'>
            <div >
              < FaHtml5  className='text-amber-600 text-4xl md:text-6xl mb-3 mx-auto' />
              <p className='text-sm md:text-base'>HTML</p>
            </div>

            <div >
              < FaCss3Alt  className='text-blue-400 text-4xl md:text-6xl mb-3 mx-auto' />
              <p className='text-sm md:text-base'>CSS</p>
            </div>

            <div >
              < BsJavascript  className='text-amber-400 text-4xl md:text-6xl mb-3 mx-auto' />
              <p className='text-sm md:text-base'>JAVASCRIPT</p>
            </div>            

            <div >
              < FaReact  className='text-emerald-400 text-4xl md:text-6xl mb-3 mx-auto' />
              <p className='text-sm md:text-base'>REACT</p>
            </div> 

              <div >
              < FaNode  className='text-green-700 text-4xl md:text-6xl mb-3 mx-auto' />
              <p className='text-sm md:text-base'>NODE JS</p>
            </div> 

              <div >
              < BiLogoMongodb  className='text-emerald-400 text-4xl md:text-6xl mb-3 mx-auto' />
              <p className='text-sm md:text-base'>MONGODB</p>
            </div> 

            </div>

            <div className='flex flex-wrap justify-center gap-8 md:gap-20 pt-10 text-center'>
               <div className='flex flex-col items-center animate-fadeUp delay-200'>
              < DiIllustrator  className='text-amber-600 text-4xl md:text-6xl mb-3' />
              <p className='text-sm md:text-base'>ADOBE <br></br>ILLUSTRATOR</p>
            </div>
              <div className='flex flex-col items-center'>
              < DiPhotoshop  className='text-blue-600 text-4xl md:text-6xl mb-3' />
              <p className='text-sm md:text-base'>ADOBE <br></br>PHOTOSHOP</p>
            </div>
              <div className='flex flex-col items-center'>
              < TbBrandAdobeAfterEffect  className='text-fuchsia-600 text-4xl md:text-6xl mb-3' />
              <p className='text-sm md:text-base'>ADOBE <br></br>AFTER EFFECTS</p>
            </div>
            </div>
            </div>

 
    </section>
    

  )
}

export default About

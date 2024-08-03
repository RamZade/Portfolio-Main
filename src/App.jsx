import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SocialLinks from './components/SocialLinks'
import Skills from './components/Skills'

function App() {

  return (
    <>
    <div className='bg-black h-auto text-white'>
    <Navbar></Navbar>
    <SocialLinks></SocialLinks>
    <Intro></Intro>
    <About/>
    <Skills></Skills>
    <Contact/>
    <Footer></Footer>
    </div>
    </>
  )
}

export default App

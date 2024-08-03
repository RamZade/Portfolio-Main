import React from 'react'
import me from '../assets/Ram_Zade.jpg'

const Intro = () => {
  return (
    <>
    <section className='flex md:flex-row flex-col h-[70vh] items-center justify-evenly font-bold leading-10' id='Intro'>
        <div>
            <p className='text-xl'>Hello,</p>
            <p className='text-2xl text-yellow-200'><span className='text-white'>I'm </span>Rameshwar</p>
            <span className='text-2xl'> Web Developer </span><span>|</span><span className='text-2xl'> Java | </span><span className='text-2xl'> DSA </span>
            <p>I am skilled and passionate web developer with good problem solving skills</p>
        </div>
        <div>
            <img src={me} className='w-[250px] z-[-1] shadow-yellow-300 object-cover rounded-xl ' alt="" />
        </div>
    </section>
    </>
  )
}

export default Intro

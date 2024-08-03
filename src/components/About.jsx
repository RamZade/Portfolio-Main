import React from 'react'
import ui from '../assets/ui.png'
import java from '../assets/java.png'
import web from '../assets/web1.png'
const About = () => {
  return (
    <>
      <div className='m-9 text-center 'id='About'>
        <p className='text-center font-extrabold text-3xl mb-4'>What I do</p>
        <p className=' mb-4 max-w-3xl  mx-auto text-justify'>I'm a passionate and, a skilled web developer specializing in Java, HTML, CSS, JavaScript, Tailwind CSS, Git, GitHub, and Oracle Database.With a passion for creating intuitive and visually appealing web applications.Dedicated to writing clean, efficient, and maintainable code </p>
        <p className=' max-w-3xl text-justify mx-auto'>I excel at transforming design concepts into fully functional and responsive websites.I'm committed to staying updated with the latest technologies and methodologies in the industry and am always eager to take on new challenges that push the boundaries of what's possible in web development.</p> 
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex bg-gray-800 w-[100vw] max-w-[40vw] rounded-xl h-auto p-4">
            <img src={web} alt="Web Development" className='h-[5rem] w-[5rem] mr-6' />
            <div className='p-3'>
            <h1 className='text-xl font-semibold'>Web Development</h1>
            <p>Dummy text will add later</p>
            </div>
            
        </div>
        <div className="flex bg-gray-800 w-[100vw] max-w-[40vw] rounded-xl  h-auto p-4">
            <img src={java} alt="DSA "className='h-[5rem] w-[5rem] mr-6' />
            <div className='p-3'>
            <h1>DSA</h1>
            <div>
              <p>Problems solved :</p>
              <ul className='list-disc ml-8'>
                <li>GeeksForGeeks - 50</li>
                <li>Leetcode - 40</li>
              </ul>
            </div>
            </div>
        </div>
        <div className="flex bg-gray-800 w-[100vw] max-w-[40vw] rounded-xl  h-auto p-4 mb-20">
            <img src={ui} alt="UI/UX Design" className='h-[5rem] w-[5rem] mr-6'/>
            <div className='p-3'>
            <h1>UI/UX Design</h1>
            <p>Completed three months of internship at CON-REACH</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default About

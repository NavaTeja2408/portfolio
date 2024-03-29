import React from 'react'
import Profile from './Images/profilenew.jpeg'
import { Link as Scrolllink } from 'react-scroll'

const Intro = () => {
  return (
    <div className='max-w-full h-screen flex md:flex-row md:items-center md:justify-center sm:flex-col sm-mt-10 ' id='home'>
        <div className='w-1/2 h-1/2 ml-12 mt-20 pr-3 sm:w-full sm:mr-3'>
            <p className='text-xl font-serif sm:mt-10'>THIS IS ME</p>
            <h2 className='mt-3 md:text-3xl font-bold font-serif'>NAVATEJA PENDIALA</h2>
            <div className='sm:w-4/5'>
            <p className='mt-3 font-thin text-sm text-gray-700 sm:mr-5 '>
            I'm a computer science major with a passion for engineering, particularly in the realm of Web3 development. I'm currently exploring opportunities in this field and would love to share my skills and projects with you.
            </p>
            </div>
            <Scrolllink to = "skills" smooth offset={-70} duration={1000}><button className='w-32 h-8 mt-5 ml-3 bg-gradient-to-r from-blue-600  to-sky-300 text-white text-base shadow hover:shadow-gray-500 hover:shadow-lg hover:duration-700 hover:w-36 hover:h-9  rounded-2xl sm:hidden ' >SKILLS</button></Scrolllink>
            <Scrolllink to = "projects" smooth offset={-70} duration={1000}><button className='w-32 h-8 mt-5 ml-5 bg-gradient-to-r from-blue-600  to-sky-300 text-white text-base  hover:shadow-gray-500 hover:shadow-lg hover:duration-700 hover:w-36 hover:h-9  rounded-2xl sm:hidden' >PROJECTS</button></Scrolllink>
        </div>
        <div className='mt-20 ml-14 mr-12 mb-16 sm:mt-2'>
            <div className='md:w-full flex items-center justify-center ' >
                <img src = {Profile} alt="None " className=' md:w-1/2 rounded-3xl sm:w-1/2 hover:shadow-blue-400 hover:shadow-2xl hover:duration-500 '/>
            </div>
        </div>
    </div>
  )
}

export default Intro
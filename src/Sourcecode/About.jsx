import React from 'react'
import Header from './Header'
import Profile from './Images/Profile.jpg'

const About = () => {
  return (
    <div>
        <Header />
        <div className=' max-w-full h-screen flex items-center justify-center sm:flex-col sm:mt-48'>
            <div >
                <div className='w-full h-28 flex items-center justify-center'><h1 className='text-5xl'>About Me</h1></div>
                <div className='flex flex-row sm:flex-col  '>
                <div className='flex flex-col w-1/2 mx-auto mt-10 sm:w-full sm:ml-4 sm:mr-4'>
                    <p>I'm a 19-year-old engineering enthusiast from Hyderabad, Telangana, with a diploma in computer science under my belt. My heart beats for all things in computer science, especially the captivating world of web development.

                    </p>
                    <br/>
                    
                    
                    <p>I thrive on the excitement of learning new and intricate things, staying on the cutting edge of technology. Beyond the screens, I'm a passionate traveler, finding joy in exploration. On the field, cricket, football, and volleyball are my playgrounds, teaching me teamwork, discipline, and dedication.</p>
                    <br/>
                    <p>Eager to transform my passion into action, I'm actively seeking opportunities in web development, be it through freelancing or full-time gigs. With a solid foundation in computer science and a hunger for knowledge, I'm ready to make a mark in the ever-evolving tech universe.</p> 
                </div>
                
                <img src = {Profile} alt="None " className='w-64 rounded-3xl border-2 border-black  hover:shadow-blue-400 hover:shadow-2xl hover:duration-500 mx-auto sm:mt-14 sm:mb-10 '/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
import React from 'react'
import {Link as Scrolllink} from 'react-scroll'
import { Link } from 'react-router-dom';
const Header = () => {
  


  return (
    <div className='flex flex-row sticky top-0 '>
    <div className='w-full h-14 bg-gradient-to-r from-blue-600  to-sky-300 text-white  shadow-blue-200 shadow-sm '>
      <div className='flex flex-row items-center justify-between'>
      <div className='flex flex-row items-center space-x-1 mt-4 ml-10'>
        <h2 className='text-3xl cursor-pointer font-signature '>TejaS</h2>
        </div>
        <div className='h-12 w-14 flex items-center justify-center md:hidden '>
        <button className='text-2xl font-bold'>+</button>
        </div>
      </div>
        <div className=' flex flex-row justify-end items-center space-x-5 fixed top-5 right-10 sm:hidden'>
        <Scrolllink to = "home" smooth offset={-70} duration={1000}><Link to="/"><p className='hover:text-black cursor-pointer'>Home</p></Link></Scrolllink>
        <Link to = "/about"><p className='hover:text-black cursor-pointer'  >About</p></Link>
        <Link to="/"><Scrolllink to = "skills" smooth offset={-70} duration={1000}><p className='hover:text-black cursor-pointer'>Skills</p></Scrolllink></Link>
        <Scrolllink to = "projects" smooth offset={-70} duration={1000}><Link to="/"><p className='hover:text-black cursor-pointer' > Projects</p></Link></Scrolllink>
        <Scrolllink to = "education" smooth  offset={-70} duration={1000}><Link to="/"><p className='hover:text-black cursor-pointer'>Qualification</p></Link></Scrolllink>
        <Scrolllink to = "contacts" smooth  offset={-70} duration={1000}><Link to="/"><p className='hover:text-black cursor-pointer'>Contact</p></Link></Scrolllink>
        </div>
        <div className=' w-1/2 h-screen bg-gray-500 flex flex-col justify-center items-center space-y-6 fixed top-14 right-0 text-xl md:hidden sm:hidden'>
        <Link to="/"><p className='hover:text-black cursor-pointer' >Home</p></Link>
        <Link to = "/about"><p className='hover:text-black cursor-pointer'  >About</p></Link>
        <p className='hover:text-black cursor-pointer' onClick={() => {window.scrollTo({ top: 590  , behavior: 'smooth' });}}>Skills</p>
        <p className='hover:text-black cursor-pointer' onClick={() => {window.scrollTo({ top: 1180   , behavior: 'smooth' });}}> Projects</p>
        <p className='hover:text-black cursor-pointer' onClick={() => {window.scrollTo({ top:  1770 , behavior: 'smooth' });}}>Qualification</p>
        <p className='hover:text-black cursor-pointer' onClick={() => {window.scrollTo({ top: 2360 , behavior: 'smooth' });}}>Contact</p>
        </div>
      
        <div>
          
        </div>
    </div>
    </div>
  )
}

export default Header
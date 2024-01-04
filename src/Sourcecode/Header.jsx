import React, { useState } from 'react'
import {Link as Scrolllink} from 'react-scroll'
import { Link } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
const Header = () => {
  const [mtoggle , setMtoggle] = useState(false)


  return (
    <div className='flex flex-row  '>
      <div className='w-full h-14 fixed top-0 bg-gradient-to-r from-blue-600  to-sky-300 text-white  shadow-blue-200 shadow-sm '>
        <div className='flex flex-row items-center justify-between'>
          <div className='flex flex-row items-center space-x-1 mt-4 ml-10'>
            <h2 className='text-3xl cursor-pointer font-signature '>TejaS</h2>
          </div>
          <div className='h-12 w-14 flex items-center justify-center md:hidden '>
            <button className='text-2xl ' onClick={() => {setMtoggle(!mtoggle)}}>{mtoggle ? <h2>x</h2>  : <IoMdMenu />}</button>
          </div>
        </div>
        <div className=' flex flex-row justify-end items-center space-x-5 fixed top-5 right-10 sm:hidden'>
          <Scrolllink to = "home" smooth offset={-70} duration={1000}><Link to="/"><p className='hover:text-black cursor-pointer'>Home</p></Link></Scrolllink>
          <Link to = "/about"><p className='hover:text-black cursor-pointer'  >About</p></Link>
          <Scrolllink to = "skills" smooth offset={-70} duration={1000}> <Link to="/"><p className='hover:text-black cursor-pointer'>Skills</p></Link></Scrolllink>
          <Scrolllink to = "projects" smooth offset={-70} duration={1000}><Link to="/"><p className='hover:text-black cursor-pointer' > Projects</p></Link></Scrolllink>
          <Scrolllink to = "education" smooth  offset={-70} duration={1000}><Link to="/"><p className='hover:text-black cursor-pointer'>Qualification</p></Link></Scrolllink>
          <Scrolllink to = "contacts" smooth  offset={-70} duration={1000}><Link to="/"><p className='hover:text-black cursor-pointer'>Contact</p></Link></Scrolllink>
        </div>
        {mtoggle ? (
        <div className=' w-full h-screen bg-gradient-to-r from-blue-500  to-sky-200 flex flex-col justify-center items-center space-y-6 fixed top-14 right-0 text-2xl md:hidden'>
          <Scrolllink to = "home" smooth offset={-70} duration={1000}><Link to="/"><p className='hover:text-black cursor-pointer' onClick={() => {setMtoggle(!mtoggle)}}>Home</p></Link></Scrolllink>
          <Link to = "/about"><p className='hover:text-black cursor-pointer' onClick={() => {setMtoggle(!mtoggle)}}  >About</p></Link>
          <Scrolllink to = "skills" smooth offset={-70} duration={1000}> <Link to="/"><p className='hover:text-black cursor-pointer' onClick={() => {setMtoggle(!mtoggle)}}>Skills</p></Link></Scrolllink>
          <Scrolllink to = "projects" smooth offset={-70} duration={1000}><Link to="/"><p className='hover:text-black cursor-pointer'  onClick={() => {setMtoggle(!mtoggle)}}> Projects</p></Link></Scrolllink>
          <Scrolllink to = "education" smooth  offset={-70} duration={1000}><Link to="/"><p className='hover:text-black cursor-pointer' onClick={() => {setMtoggle(!mtoggle)}}>Qualification</p></Link></Scrolllink>
          <Scrolllink to = "contacts" smooth  offset={-70} duration={1000}><Link to="/"><p className='hover:text-black cursor-pointer' onClick={() => {setMtoggle(!mtoggle)}}>Contact</p></Link></Scrolllink>
        </div>
        ): (<div></div>)}
      
    </div>
    </div>
  )
}

export default Header
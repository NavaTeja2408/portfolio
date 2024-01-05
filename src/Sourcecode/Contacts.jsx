import React, { useState } from 'react'
import { CiLinkedin , CiInstagram , CiFacebook , CiPhone } from "react-icons/ci";
import { SiGmail } from "react-icons/si";
import { Link } from 'react-router-dom';


const Contacts = () => {
  const [toggles , setToggles] = useState(false)
  const [toggledi , setToggledi] = useState(false)

  return (
    <div className='max-w-full h-screen' id='contacts' >
        <div className='w-full flex items-center justify-center'>
          <h1 className='text-3xl font-bold'>CONTACTS OF MINE</h1>
        </div>


        
        <div className='mt-24'>
        <div className='flex flex-row mt-5 ml-5'> 
            <div className='w-full h-10 bg-gradient-to-r from-blue-600  to-sky-300 text-white flex  items-center justify-center'>
              <h2>SOCIAL MEDIA</h2>
            </div>
              <button className='w-10 h-10 pr-4 mr-4 bg-sky-300 hover:text-white text-2xl font-bold' onClick={() =>{
                setToggles(!toggles)
              }}>{toggles ? <h1>-</h1> : <h1>+</h1>}</button>
          </div>


          {toggles  ?(
          <div className='ml-5 mr-4 bg-gradient-to-r from-blue-300  to-sky-100 '>
            <div className='flex flex-row h-10 items-center border-4 border-sky-200'>
              <div className='h-10 w-28 flex items-center justify-center border-4 border-sky-200 space-x-1'>
                    <CiLinkedin />
                    <p>Linkedin</p>
              </div>
              <Link to ="https://www.linkedin.com/in/navateja-pendiala-b7b693280" ><p className='ml-10 hover:text-white hover:cursor-pointer'>Pendiala Navateja</p></Link>
            </div>
            <div className='flex flex-row h-10  items-center border-4 border-sky-200'>
              <div className='h-10 w-28  flex items-center justify-center border-4 border-sky-200 space-x-1'>
                <CiInstagram />
                <p>Instagram</p>
              </div>
              
              <Link to = "https://www.instagram.com/teja_3690?igsh=MXB3aXpwNjdyNG01ZA=="><p className='ml-10 hover:text-white hover:cursor-pointer'>@teja_3690</p></Link>
            </div>
            <div className='flex flex-row h-10 items-center border-4 border-sky-200' >
              <div className='h-10 w-28 flex items-center justify-center border-4 border-sky-200 space-x-1'>
                <CiFacebook />
                <p>Facebook</p>
              </div>
              <p className='ml-10 hover:text-white hover:cursor-pointer'>Pendiala Navateja</p>
            </div>
            </div>
        
            ) :(
              <div></div>
            )
            }
          </div>


          <div>

          <div className='flex flex-row mt-5 ml-5'> 
            <div className='w-full h-10 bg-gradient-to-r from-blue-600  to-sky-300 text-white flex  items-center justify-center'>
              <h2>DIRECT CONTACT</h2>
            </div>
              <button className='w-10 h-10 pr-4 mr-4 bg-sky-300 hover:text-white text-2xl font-bold' onClick={() =>{
                setToggledi(!toggledi)
              }}>{toggledi ? <h1>-</h1> : <h1>+</h1>}</button>
          </div>


          {toggledi  ?(
          <div className='ml-5 mr-4 bg-gradient-to-r from-blue-300  to-sky-100 '>
            <div className='flex flex-row h-10 items-center border-4 border-sky-200'>
              <div className='h-10 w-24 flex items-center justify-center border-4 border-sky-200 space-x-1'>
                    <SiGmail />
                    <p className='text-xs'>Gmail:</p>
              </div>
              <p className='ml-10 hover:text-white hover:cursor-pointer'>teja29204@gmail.com</p>
            </div>
            <div className='flex flex-row h-10 items-center border-4 border-sky-200'>
              <div className='h-10 w-24 flex items-center justify-center border-4 border-sky-200 space-x-1'>
                <CiPhone />
                    <p className='text-xs'>Phone no:</p>
              </div>
              <p className='ml-10 hover:text-white hover:cursor-pointer'>+91 7569423768</p>
            </div>
            </div>
        
            ) :(
              <div></div>
            )
            }
            </div>
      </div>

  )
}

export default Contacts
import React, { useState } from 'react'

const Education = () => {
  const [toggled , setToggled] = useState(false)
  const [togglee , setTogglee] = useState(false)
  return (
    <div className='max-w-full h-screen ' id='education'>
        <div className='w-full flex items-center justify-center'>
        <h1 className='text-3xl font-bold'>QUALIFICATION</h1>
        </div>
        <div className='mr-5 mt-16'> 
          <div className='flex flex-row mt-5 ml-5'> 
            <div className='w-full h-10 bg-gradient-to-r from-blue-600  to-sky-300 text-white flex  items-center justify-center'>
              <h2>DIPLOMA</h2>
            </div>
              <button className='w-10 h-10 pr-4 mr-4 sm:mr-2 bg-sky-300 hover:text-white text-2xl font-bold' onClick={() =>{
                setToggled(!toggled)
              }}>{toggled ? <h1>-</h1> : <h1>+</h1>}</button>
          </div>
          {toggled ? (
            <div className='ml-5 mr-4 sm:mr-2 bg-gradient-to-r from-blue-300  to-sky-100 '>
              <div className='flex flex-row items-center  md:h-10 border-4 border-sky-200 space-x-3 sm:mt-1 sm:mb-1 '>
                <h3 className='font-medium ml-4'>Institute/University Name  </h3>
                <h3>:</h3>
                <h3>Sree Dattha Institute of Engineering and Science</h3>
              </div>
              <div className='flex flex-row items-center  h-10 border-4 border-sky-200 space-x-3'>
                <h3 className='font-medium ml-4'>Major </h3>
                <h3>:</h3>
                <h3>Computer Science and Engineering</h3>
              </div>
              <div className='flex flex-row items-center  h-10 border-4 border-sky-200 space-x-3'>
                <h3 className='font-medium ml-4'>CGPA </h3>
                <h3>:</h3>
                <h3>6.69</h3>
              </div>
              <div className='flex flex-row items-center  h-10 border-4 border-sky-200 space-x-3'>
                <h3 className='font-medium ml-4'>Academic Year </h3>
                <h3>:</h3>
                <h3>2019 - 2022</h3>
              </div>
            </div>
              ) : (
            <div></div>
            )}


        <div className='mt-5'>
          <div className='flex flex-row mt-5 ml-5'> 
              <div className='w-full h-10 bg-gradient-to-r from-blue-600  to-sky-300 text-white flex  items-center justify-center'>
                <h2>Bachler's of Engineering</h2>
            </div>
            <button className='w-10 h-10 pr-4 mr-4 sm:mr-2 bg-sky-300 hover:text-white text-2xl font-bold' onClick={() =>{
                setTogglee(!togglee)
              }}>{togglee ? <h1>-</h1> : <h1>+</h1>}</button>
          </div>
          { togglee ? (
            <div className='ml-5 mr-4 sm:mr-2 bg-gradient-to-r from-blue-300  to-sky-100  '>
            <div className='flex flex-row items-center  h-10 border-4 border-sky-200 space-x-3 sm:mt-1 sm:mb-1'>
              <h3 className='font-medium ml-4'>Institute/University Name </h3>
              <h3>:</h3>
              <h3>Bharat Institute of Engineering and Science</h3>
            </div>
            <div className='flex flex-row items-center  h-10 border-4 border-sky-200 space-x-3'>
              <h3 className='font-medium ml-4'>Major </h3>
              <h3>:</h3>
              <h3>Computer Science and Engineering</h3>
            </div>
            <div className='flex flex-row items-center  h-10 border-4 border-sky-200 space-x-3'>
              <h3 className='font-medium ml-4'>CGPA </h3>
              <h3>:</h3>
              <h3>7.49 (Currently Pursuing)</h3>
            </div>
            <div className='flex flex-row items-center  h-10 border-4 border-sky-200 space-x-3'>
              <h3 className='font-medium ml-4' >Academic Year </h3>
              <h3>:</h3>
              <h3>2022 - 2025</h3>
            </div>
            </div>
              ) : (
              <div></div>
            )
          }
        </div>
      </div>
    </div>

    
  )
}
 
export default Education
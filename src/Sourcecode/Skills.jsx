import React from 'react'
import Reactjs from './Images/react.png'
import Graphql from './Images/Graphql.png'
import Html from './Images/html.png'
import Javascript from './Images/Java Script.png'
import java from './Images/java.png'
import mysql from './Images/mysql.png'
import node from './Images/node.png'
import python from './Images/pyhton.jpg'
import tailwind from './Images/tailwind.jpg'

const Skills = () => {

  const Expert = [
    {id : 1,
      src : Reactjs ,
      skillname : "React JS"
    } ,
    {id : 2,
      src : Html ,
      skillname : "HTML and CSS3"
    } ,
    {id : 3,
      src : tailwind ,
      skillname : "Tailwind CSS Framework"
    } ,
    
  ]

  const Intermediate = [
    {id : 1,
      src : node ,
      skillname : "Node Js"
    } ,
    {id : 2,
      src : Javascript ,
      skillname : "Java Script"
    } ,
    {id : 3,
      src : python ,
      skillname : "Python"
    } ,
  ]

  const Beginner = [
    {id : 1,
      src : mysql ,
      skillname : "My SQL Database"
    } ,
    {id : 2,
      src : java ,
      skillname : "JAVA"
    } ,
    {id : 3,
      src : Graphql ,
      skillname : "Graphql"
    } ,

  ]




  return (
    <div className='max-w-full h-screen  md:ml-10 sm:mt-24 sm:ml-5 ' id='skills'>
      <div className='h-10 w-full flex items-center justify-center '>
        <h1 className='font-bold text-3xl'>SKILLS KNOWN BY ME</h1>
        </div>
        <h2 className='mt-8 text-xl font-bold'>Expert Level:</h2>
        <div className='mt-3 flex flex-row space-x-10 '>
        {Expert.map(obj => (
        <div>
        <div key = {obj.id} className='w-40 h-24 shadow-gray-400 shadow-lg hover:shadow-blue-400 hover:shadow-xl hover:duration-700 cursor-pointer flex items-center justify-center  bg-sky-100 sm:hidden '>
          <img src = {obj.src} alt ="None" className='w-14 h-14'/>
          <p className='text-xs ml-1'>{obj.skillname}</p>

        </div>
          <img src = {obj.src} alt ="None" className='w-16 h-16'/>
        </div>
      ))}
      </div>
        <h2 className='mt-3 text-xl font-bold'>Intermediate Level: </h2>
        <div className='mt-3 flex flex-row space-x-10'>
        {Intermediate.map(obj => (
        <div>
          <div key = {obj.id} className='w-40 h-24 shadow-gray-400 shadow-lg hover:shadow-blue-400 hover:shadow-xl hover:duration-700 cursor-pointer flex items-center justify-center bg-sky-100 sm:hidden  '>
          <img src = {obj.src} alt ="None" className='w-14 h-14'/>
          <p className='text-xs ml-1'>{obj.skillname}</p>

          </div>
          <img src = {obj.src} alt ="None" className='w-16 h-16'/>
        </div>
        
        
      ))}
      </div>
        <h2 className='mt-3 text-xl font-bold'>Beginner Level:</h2>
        <div className='mt-3 flex flex-row space-x-10'>
        {Beginner.map(obj => (
        <div>
        <div key = {obj.id} className= 'w-40 h-24 shadow-gray-400 shadow-lg  cursor-pointer  flex items-center justify-center  bg-sky-100 hover:shadow-blue-400 hover:shadow-xl hover:duration-700 sm:hidden '>
          <img src = {obj.src} alt ="None" className='w-14 h-14'/>
          <p className='text-xs ml-1'>{obj.skillname}</p>

        </div>
          <img src = {obj.src} alt ="None" className='w-16 h-16'/>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Skills
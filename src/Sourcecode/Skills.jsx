import React from "react";
import Reactjs from "./Images/react.png";
import Html from "./Images/html.png";
import Javascript from "./Images/Java Script.png";
import java from "./Images/java.png";
import node from "./Images/node.png";
import python from "./Images/pyhton.jpg";
import tailwind from "./Images/tailwind.jpg";
import express from "./Images/Express.png";
import mongodb from "./Images/MongoDb.png";

const Skills = () => {
  const Expert = [
    { id: 1, src: Reactjs, skillname: "React JS" },
    { id: 2, src: Html, skillname: "HTML and CSS3" },
    { id: 3, src: tailwind, skillname: "Tailwind CSS Framework" },
  ];

  const Intermediate = [
    { id: 1, src: node, skillname: "Node Js" },
    { id: 2, src: Javascript, skillname: "Java Script" },
    { id: 3, src: express, skillname: "Express" },
  ];

  const Beginner = [
    { id: 1, src: mongodb, skillname: "MongoDb" },
    { id: 2, src: java, skillname: "JAVA" },
    { id: 3, src: python, skillname: "Python" },
  ];

  return (
    <div
      className="max-w-full h-screen  md:ml-10 sm:mt-24 sm:ml-5 overflow-auto "
      id="skills"
    >
      <div className="h-10 w-full flex items-center justify-center ">
        <h1 className="font-bold text-3xl">SKILLS</h1>
      </div>
      <h2 className="mt-8 text-xl font-bold">Expert Level:</h2>
      <div className="mt-3 flex flex-row space-x-5 ">
        {Expert.map((obj) => (
          <div>
            <div
              key={obj.id}
              className="w-40 h-24 shadow-gray-400 shadow-lg hover:shadow-blue-400 hover:shadow-xl hover:duration-700 cursor-pointer flex items-center justify-center  bg-sky-100 sm:hidden "
            >
              <img
                src={obj.src}
                alt="None"
                className="w-14 h-14 mix-blend-multiply"
              />
              <p className="text-xs ml-1">{obj.skillname}</p>
            </div>
            <div
              key={obj.id}
              className="w-24 h-28  shadow-blue-400 shadow-xl cursor-pointer flex flex-col items-center justify-center bg-sky-100 md:hidden  "
            >
              <img
                src={obj.src}
                alt="None"
                className="w-14 h-14 mix-blend-multiply"
              />
              <p className="text-xs ml-1">{obj.skillname}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className="mt-3 text-xl font-bold">Intermediate Level: </h2>
      <div className="mt-3 flex flex-row space-x-5">
        {Intermediate.map((obj) => (
          <div>
            <div
              key={obj.id}
              className="w-40 h-24 shadow-gray-400 shadow-lg hover:shadow-blue-400 hover:shadow-xl hover:duration-700 cursor-pointer flex items-center justify-center bg-sky-100 sm:hidden  "
            >
              <img
                src={obj.src}
                alt="None"
                className="w-14 h-14 mix-blend-multiply"
              />
              <p className="text-xs ml-1">{obj.skillname}</p>
            </div>
            <div
              key={obj.id}
              className="w-24 h-28  shadow-blue-400 shadow-xl cursor-pointer flex flex-col items-center justify-center bg-sky-100 md:hidden  "
            >
              <img
                src={obj.src}
                alt="None"
                className="w-14 h-14 mix-blend-multiply"
              />
              <p className="text-xs ml-1">{obj.skillname}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className="mt-3 text-xl font-bold">Beginner Level:</h2>
      <div className="mt-3 flex flex-row space-x-5">
        {Beginner.map((obj) => (
          <div>
            <div
              key={obj.id}
              className="w-40 h-24 shadow-gray-400 shadow-lg  cursor-pointer  flex items-center justify-center  bg-sky-100 hover:shadow-blue-400 hover:shadow-xl hover:duration-700 sm:hidden "
            >
              <img
                src={obj.src}
                alt="None"
                className="w-14 h-14 mix-blend-multiply"
              />
              <p className="text-xs ml-1">{obj.skillname}</p>
            </div>
            <div
              key={obj.id}
              className="w-24 h-28  shadow-blue-400 shadow-xl cursor-pointer flex flex-col items-center justify-center bg-sky-100 md:hidden  "
            >
              <img
                src={obj.src}
                alt="None"
                className="w-14 h-14 mix-blend-multiply"
              />
              <p className="text-xs ml-1">{obj.skillname}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

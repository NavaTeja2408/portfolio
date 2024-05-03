import React from "react";

const ProjectCard = ({ image, name, website, git }) => {
  return (
    <div className="w-60 p-3 m-2 mt-7 shadow-gray-400 shadow-lg hover:shadow-blue-400 hover:shadow-xl hover:duration-700 cursor-pointer flex  flex-col items-center justify-center  bg-sky-100   ">
      <div className="w-50 h-36 flex items-center justify-center object-contain">
        <img className="w-48 h-36" src={image} alt="no Image" />
      </div>

      <h2 className="text-2xl">{name}</h2>
      <div className="flex flex-col">
        <a
          href={website}
          className="text-blue-800 text-md underline mt-1  hover:font-bold"
        >
          Website Link
        </a>
        <a
          href={git}
          className="text-blue-800 text-md underline mt-1  hover:font-bold"
        >
          Github Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

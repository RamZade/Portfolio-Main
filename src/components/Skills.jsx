import React from "react";
import css from "../assets/css-3.png";
import database from "../assets/database.png";
import html from "../assets/html-5.png";
import reactImg from "../assets/react.png";
import javascript from "../assets/js.png";
import java from "../assets/java.png";
import github from "../assets/github.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: java,
      title: "Java",
      style: 'shadow-white'
    },
    {
      id: 2,
      src: html,
      title: "HTML",
      style: 'shadow-white'
    },
    {
      id: 3,
      src: css,
      title: "CSS",
      style: 'shadow-white'
    },
    {
      id: 4,
      src: javascript,
      title: "JavaScript",
      style: 'shadow-white'
    },
    {
      id: 5,
      src: reactImg,
      title: "React",
      style: 'shadow-white'
    },
    {
      id: 6,
      src: database,
      title: "Oracle",
      style: 'shadow-white'
    },
    {
      id: 7,
      src: github,
      title: "Github",
      style: 'shadow-white'
    }
  ];

  return (
    <div id="Skills">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-center">
        <div>

          <p className="text-4xl font-bold border-b-4 border-gray-400 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-3 text-center items-center py-8 px-12 sm:px-0">
        {techs.map(({ id, src, title, style }) => (
          <div
            key={id}
            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
          >
            <img src={src} alt={title} className="w-20 mx-auto " />
            <p className="mt-4">{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

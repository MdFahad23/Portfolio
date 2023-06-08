import React from "react";

import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Tailwind from "../assets/tailwind.png";
import JavaScript from "../assets/javascript.png";
import react from "../assets/react.png";
import Node from "../assets/node.png";
import Python from "../assets/python.png";
import Django from "../assets/django.png";
import Github from "../assets/github.png";
import Gitgrap from "../assets/graphql.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: Html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: Css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: JavaScript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: Tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: Node,
      title: "Node JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: Python,
      title: "Python",
      style: "shadow-yellow-500",
    },
    {
      id: 8,
      src: Django,
      title: "Django",
      style: "shadow-blue-600",
    },
    {
      id: 9,
      src: Gitgrap,
      title: "GraphQL",
      style: "shadow-pink-400",
    },
    {
      id: 10,
      src: Github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

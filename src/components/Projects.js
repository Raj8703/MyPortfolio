import React from "react";
import tictactoe from "../Images/tictactoe.jpg";
import incomeexpense from "../Images/incomeexpense.jpg";
import todo from "../Images/todo.jpg";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Projects = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.1);

  const projects = [
    {
      title: "Income and Expense Tracker",
      description:
        "This app allow users to track their income and expenses. It calculates and displays the totalbalance,totalincome,and totalexpenses in real-time.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: incomeexpense,
    },
    {
      title: "Tic-tac-toe Game",
      description:
        "Interactive tic-tac-toe game built with React, showcasing state management and user interaction.",
      tech: ["React"],
      image: tictactoe,
    },
    {
      title: "Todo List ",

      description:
        "Built a secure full-stack To-Do app with JWT-based user authentication and task management using React and Node.js.",
      tech: ["React", "Express", "MongoDB", "JWT"],
      image: todo,
    },
  ];

  const AnimatedProjectCard = ({ project, index }) => {
    const [cardRef, cardVisible] = useScrollAnimation(0.1);

    return (
      <div
        ref={cardRef}
        className={`bg-gray-700/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-700 group border border-gray-600/50 transform ${
          cardVisible
            ? "translate-y-0 opacity-100 rotate-0"
            : "translate-y-12 opacity-0 rotate-1"
        }`}
        style={{
          transitionDelay: `${index * 150}ms`,
        }}
      >
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-48 object-cover group-hover:scale-110 transition-all duration-700 ${
              cardVisible ? "scale-100" : "scale-110"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-6">
          <h3
            className={`text-xl font-semibold mb-2 text-white group-hover:text-cyan-400 transition-all duration-500 transform ${
              cardVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-4 opacity-0"
            }`}
            style={{
              transitionDelay: `${index * 150 + 200}ms`,
            }}
          >
            {project.title}
          </h3>
          <p
            className={`text-gray-300 mb-4 transition-all duration-500 transform ${
              cardVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{
              transitionDelay: `${index * 150 + 300}ms`,
            }}
          >
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, techIndex) => (
              <span
                key={techIndex}
                className={`px-3 py-1 bg-gray-600 rounded-full text-sm text-cyan-400 border border-cyan-400/30 transform transition-all duration-500 ${
                  cardVisible
                    ? "scale-100 opacity-100 translate-y-0"
                    : "scale-75 opacity-0 translate-y-2"
                }`}
                style={{
                  transitionDelay: `${index * 150 + 400 + techIndex * 100}ms`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 px-6 bg-gray-800/50">
      <div className="container mx-auto">
        <h2
          ref={titleRef}
          className={`text-4xl font-bold text-center mb-16 text-white transform transition-all duration-700 ${
            titleVisible
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-8 opacity-0 scale-95"
          }`}
        >
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

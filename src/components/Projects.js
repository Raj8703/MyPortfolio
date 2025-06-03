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
      liveLink: "incexpapp.netlify.app",
    },
    {
      title: "Tic-tac-toe Game",
      description:
        "Interactive tic-tac-toe game built with React, showcasing state management and user interaction.",
      tech: ["React"],
      image: tictactoe,
      liveLink: "tic-tac-toe-rs1.netlify.app",
    },
    {
      title: "Todo List ",
      description:
        "Built a secure full-stack To-Do app with JWT-based user authentication and task management using React and Node.js.",
      tech: ["React", "Express", "MongoDB", "JWT"],
      image: todo,
      liveLink: "mytodolistmern.netlify.app",
    },
  ];

  const AnimatedProjectCard = ({ project, index }) => {
    const [cardRef, cardVisible] = useScrollAnimation(0.1);

    const handleLiveClick = (e) => {
      e.stopPropagation();

      if (!project.liveLink) {
        alert("No live link available for this project");
        return;
      }

      let url = project.liveLink;
      if (!url.startsWith("http://") && !url.startsWith("https://")) {
        url = "https://" + url;
      }

      window.open(url, "_blank", "noopener,noreferrer");
    };

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

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={handleLiveClick}
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              View Live Demo
            </button>
          </div>
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

          <div className="mt-4">
            <button
              onClick={handleLiveClick}
              className={`w-full py-3 px-4 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 rounded-lg font-medium transition-all duration-300 border border-cyan-400/30 hover:border-cyan-400/50 transform hover:scale-[1.02] ${
                cardVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 150 + 500}ms`,
              }}
            >
              View Live Demo
            </button>
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

import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Skills = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.1);

  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 88 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 82 },
    { name: "Express", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "Postman", level: 85 },
  ];

  const AnimatedSkillBar = ({ skill, index }) => {
    const [skillRef, skillVisible] = useScrollAnimation(0.1);

    return (
      <div
        ref={skillRef}
        className={`space-y-2 transform transition-all duration-700 ${
          skillVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
        }`}
        style={{
          transitionDelay: `${index * 100}ms`,
        }}
      >
        <div className="flex justify-between">
          <span
            className={`font-semibold text-white transition-all duration-500 ${
              skillVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-2 opacity-0"
            }`}
            style={{
              transitionDelay: `${index * 100 + 200}ms`,
            }}
          >
            {skill.name}
          </span>
          <span
            className={`text-cyan-400 transition-all duration-500 ${
              skillVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-2 opacity-0"
            }`}
            style={{
              transitionDelay: `${index * 100 + 300}ms`,
            }}
          >
            {skill.level}%
          </span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
          <div
            className={`bg-gradient-to-r from-cyan-400 to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out shadow-lg transform ${
              skillVisible ? "translate-x-0" : "-translate-x-full"
            }`}
            style={{
              width: skillVisible ? `${skill.level}%` : "0%",
              transitionDelay: `${index * 100 + 500}ms`,
            }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <h2
          ref={titleRef}
          className={`text-4xl font-bold text-center mb-16 text-white transform transition-all duration-700 ${
            titleVisible
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-8 opacity-0 scale-95"
          }`}
        >
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <AnimatedSkillBar key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Education = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.1);

  const education = [
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "Gujarat Technological University",
      location: "Gujarat, India",
      year: "2021 - 2025",
      grade: "CGPA: 7.35/10",
      description:
        "Specialized in software development and web technologies. Completed some projects in full-stack development.",
      highlights: ["Web Development", "Software Engineering"],
    },
    {
      degree: "Higher Secondary Certificate (Science)",
      institution: "Gujarat Secondary and Higher Secondary Education Board",
      location: "Gujarat, India",
      year: "2020-2021",
      grade: "62.7%",
      description:
        "Focused on Mathematics, Physics, and Chemistry with strong foundation in logical thinking and problem-solving.",
      highlights: ["Mathematics", "Physics", "Chemistry"],
    },
    {
      degree: "Secondary School Certificate",
      institution: "Gujarat Secondary and Higher Secondary Education Board",
      location: "Gujarat, India",
      year: "2018 - 2019",
      grade: "68.33%",
      description:
        "Comprehensive education with excellence in academics and co-curricular activities.",
      highlights: [
        "Academic Excellence",
        "Leadership",
        "Team Collaboration",
        "Communication Skills",
      ],
    },
  ];

  const AnimatedEducationItem = ({ edu, index }) => {
    const [itemRef, itemVisible] = useScrollAnimation(0.1);

    return (
      <div
        ref={itemRef}
        className={`bg-gray-700/50 backdrop-blur-sm rounded-xl p-8 border border-gray-600/50 hover:border-cyan-400/50 transition-all duration-700 group transform ${
          itemVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
        style={{
          transitionDelay: `${index * 200}ms`,
        }}
      >
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
              {edu.degree}
            </h3>
            <h4 className="text-xl text-cyan-400 mb-1">{edu.institution}</h4>
            <p className="text-gray-300 mb-3">{edu.location}</p>
            <p className="text-gray-200 leading-relaxed mb-4">
              {edu.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {edu.highlights.map((highlight, highlightIndex) => (
                <span
                  key={highlightIndex}
                  className={`px-3 py-1 bg-gray-600 rounded-full text-sm text-purple-400 border border-purple-400/30 transform transition-all duration-500 ${
                    itemVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${index * 200 + highlightIndex * 100}ms`,
                  }}
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
          <div className="text-center md:text-right space-y-4">
            <div
              className={`bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg inline-block transform transition-all duration-500 ${
                itemVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 200 + 100}ms`,
              }}
            >
              {edu.year}
            </div>
            <div
              className={`text-2xl font-bold text-white transform transition-all duration-500 ${
                itemVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 200 + 200}ms`,
              }}
            >
              {edu.grade}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="education" className="py-20 px-6 bg-gray-800/50">
      <div className="container mx-auto">
        <h2
          ref={titleRef}
          className={`text-4xl font-bold text-center mb-16 text-white transform transition-all duration-700 ${
            titleVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          Education
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <AnimatedEducationItem key={index} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

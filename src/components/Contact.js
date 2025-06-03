import React from "react";
import { Github, Mail, Linkedin } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Contact = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.1);
  const [leftRef, leftVisible] = useScrollAnimation(0.1);

  const contactItems = [
    {
      icon: <Mail className="w-6 h-6 text-cyan-400" />,
      text: "sathwararaj124@gmail.com",
      link: "mailto:sathwararaj124@gmail.com",
    },
    {
      icon: <Linkedin className="w-6 h-6 text-blue-400" />,
      text: "linkedin.com/in/raj-sathwara",
      link: "https://www.linkedin.com/in/raj-sathwara-ab9797311/",
    },
    {
      icon: <Github className="w-6 h-6 text-purple-400" />,
      text: "github.com/raj-sathwara",
      link: "https://github.com/",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2
          ref={titleRef}
          className={`text-4xl font-bold text-center mb-16 text-white transform transition-all duration-700 ${
            titleVisible
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-8 opacity-0 scale-95"
          }`}
        >
          Get In Touch
        </h2>
        <div
          ref={leftRef}
          className={`space-y-8 transform transition-all duration-700 ${
            leftVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div
            className={`transform transition-all duration-500 ${
              leftVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Let's work together
            </h3>
          </div>
          <div className="space-y-4">
            {contactItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-4 p-4 bg-gray-700/30 rounded-lg backdrop-blur-sm border border-gray-600/50 hover:border-cyan-400/50 transition-all duration-500 transform ${
                  leftVisible
                    ? "translate-x-0 opacity-100 scale-100"
                    : "translate-x-4 opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                {item.icon}
                <span className="text-gray-200 underline hover:text-cyan-400">
                  {item.text}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

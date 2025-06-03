import React from "react";
import { Code, Smartphone, Server } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Services = () => {
  const [aboutRef, aboutVisible] = useScrollAnimation(0.1);

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces using React, HTML, CSS, and modern JavaScript frameworks.",
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development",
      description:
        "Creating robust server-side applications with Node.js, Express, and database integration using MongoDB.",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Full Stack Solutions",
      description:
        "End-to-end web application development with seamless frontend-backend integration and API testing.",
    },
  ];

  const AnimatedServiceItem = ({ service, index }) => {
    const [serviceRef, serviceVisible] = useScrollAnimation(0.1);

    return (
      <div
        ref={serviceRef}
        className={`flex items-start space-x-4 group transform transition-all duration-700 ${
          serviceVisible
            ? "translate-x-0 opacity-100"
            : "-translate-x-8 opacity-0"
        }`}
        style={{
          transitionDelay: `${index * 200}ms`,
        }}
      >
        <div className="flex-shrink-0">
          <div
            className={`w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center text-cyan-400 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-blue-600 group-hover:text-white transition-all duration-500 transform ${
              serviceVisible ? "scale-100 rotate-0" : "scale-75 rotate-12"
            }`}
            style={{
              transitionDelay: `${index * 200 + 100}ms`,
            }}
          >
            {service.icon}
          </div>
        </div>
        <div>
          <h3
            className={`text-xl font-semibold mb-2 text-white group-hover:text-cyan-400 transition-all duration-500 transform ${
              serviceVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{
              transitionDelay: `${index * 200 + 200}ms`,
            }}
          >
            {service.title}
          </h3>
          <p
            className={`text-gray-300 leading-relaxed transition-all duration-500 transform ${
              serviceVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{
              transitionDelay: `${index * 200 + 300}ms`,
            }}
          >
            {service.description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section id="about" className="py-20 px-6 bg-gray-800/50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            {services.map((service, index) => (
              <AnimatedServiceItem
                key={index}
                service={service}
                index={index}
              />
            ))}
          </div>

          <div className="space-y-8">
            <div
              ref={aboutRef}
              className={`transform transition-all duration-700 ${
                aboutVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              }`}
            >
              <h2
                className={`text-4xl md:text-5xl font-bold mb-6 text-white transform transition-all duration-500 ${
                  aboutVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{
                  transitionDelay: "200ms",
                }}
              >
                About me
              </h2>
              <p
                className={`text-gray-200 leading-relaxed mb-8 transform transition-all duration-500 ${
                  aboutVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{
                  transitionDelay: "400ms",
                }}
              >
                As a Full Stack Developer, I specialize in building end-to-end
                web applications with a strong focus on the MERN stack. I have
                experience developing dynamic user interfaces, integrating
                secure user authentication with JWT, and creating robust backend
                services with Node.js and Express. My work includes implementing
                CRUD operations, managing databases with MongoDB, and deploying
                applications with responsiveness and performance in mind. I
                enjoy solving real-world problems through clean and maintainable
                code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

import raj from "../Images/raj.jpg";
import Raj_resume from "../Documents/Raj_resume.pdf";
const Hero = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Postman",
  ];

  const handleResumeClick = () => {
    window.open(Raj_resume, "_blank");
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6 animate-fade-in">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Hello<span className="text-cyan-400">.</span>
            </h1>
            <h2 className="text-3xl md:text-4xl text-gray-200">I'm Raj</h2>
            <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Full Stack Developer
            </h3>
          </div>

          <div className="flex space-x-4">
            <button
              className="border-2 border-gray-400 hover:border-cyan-400 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-cyan-400/10"
              onClick={handleResumeClick}
            >
              My resume
            </button>
          </div>

          <div className="flex flex-wrap gap-6 pt-8">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="text-center opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="text-lg font-semibold text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                  {skill}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full absolute -inset-4 animate-pulse"></div>
            <div className="w-80 h-80 bg-gray-800 rounded-full overflow-hidden relative z-10 border-4 border-gray-600">
              <img
                src={raj}
                alt="Raj Sathwara"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="absolute top-10 -right-10 text-cyan-400/30 text-6xl">
            {"</"}
          </div>
          <div className="absolute bottom-10 -left-10 text-purple-400/30 text-6xl">
            {">"}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  // List of projects
  const projectList = [
    {
      title: "Seamulator",
      description: "C++ Terminal-Based Game with Gradient Colors",
      imageUrl: "./Project_1_SeamulatorLogin.jpg",
      code: "https://github.com/Hariz09/Seamulator",
      languageIcons: ["Logo_cpp.png"],
    },
    {
      title: "Belinav",
      description: "Android app prototype using Flutter",
      imageUrl: "./Porject_2_Belinav.png",
      code: "https://github.com/Hariz09/BelinavNew",
      languageIcons: ["Logo_dart.png", "Logo_flutter.png"],
    },
    {
      title: "My Portfolio",
      description: "My portfolio website using React and Tailwind CSS",
      imageUrl: "./Project_3_Portofolio.png",
      code: "https://github.com/Hariz09/portfolio",
      languageIcons: ["Logo_react.png", "Logo_nextjs.ico", "Logo_Typescript.svg.png"],
    },
    {
      title: "PayMan",
      description:
        "Ongoing fullstack web project using PostgreSQL for payroll management",
      imageUrl: "./Project_Lock.jpg",
      code: "",
      languageIcons: ["Logo_postgresql.png", "Logo_python.png", "Logo_django.png"],
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="p-8">
      <div className="container mx-auto">
        {/* Section title */}
        <h2 className="w-fit text-4xl mb-12 relative">
          Projects
          <span className="block h-1 w-full bg-gray-700 mt-2"></span>
        </h2>
        {/* Grid layout for projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl overflow-hidden"
              data-aos="fade-up"
            >
              {/* Project image */}
              <div className="w-full h-48 mb-4 rounded-xl overflow-hidden border border-gray-200">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Project title and description */}
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
              {/* Language icons */}
              <div className="flex mt-2">
                {project.languageIcons.map((icon, iconIndex) => (
                  <img
                    key={iconIndex}
                    src={icon}
                    alt={`Language Icon ${iconIndex + 1}`}
                    className="mr-2 w-6 h-6 rounded-full border border-gray-300"
                  />
                ))}
              </div>
              {/* Code link */}
              {project.code !== "" && (
                <button
                  className="px-2 py-1 mt-4 text-sm text-white font-bold rounded-lg shadow-lg bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-blue-500/50 hover:shadow-lg flex items-center"
                  onClick={() => window.open(project.code, "_blank")}
                >
                  <FaGithub className="mr-2" />
                  <span>Code</span>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

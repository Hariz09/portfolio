import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { TbWorldWww } from "react-icons/tb";

const About = () => {
  // Academic timeline data
  const academicTimeline = [
    {
      title: "SD Pertiwi Bogor",
      years: "2012 - 2018",
      imageUrl: "./SD_PertiwiBogor.jpg",
      web: "",
    },
    {
      title: "SMPIT Ummul Quro Bogor",
      years: "2018-2021",
      imageUrl: "./SMP_ITUmmulQuroBogor.jpg",
      web: "https://www.ummulqurobogor.org/",
    },
    {
      title: "SMA Cahaya Rancamaya",
      school: "Science Major",
      years: "2021-2024",
      imageUrl: "./SMA_CahayaRancamaya.jpg",
      web: "https://scr.sch.id/",
    },
    {
      title: "Universitas Indonesia",
      school: "Faculty of Computer Science",
      major: "Computer Science Major",
      years: "Ongoing",
      imageUrl: "./Universitas_Indonesia.jpg",
      web: "https://www.ui.ac.id/",
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="about" className="bg-slate-950 text-white p-8">
      <div className="container mx-auto pt-8">
        {/* Section title */}
        <h2 className="w-fit text-4xl mb-12 relative">
          About Me
          <span className="block h-1 w-full bg-gray-700 mt-2"></span>
        </h2>
        <h3 className="text-3xl mb-6 text-center font-bold">
          Academic Background
        </h3>
        <div className="max-w-4xl mx-auto">
          {/* Render academic timeline */}
          {academicTimeline.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"  /* Render academic timeline */
              className="bg-gray-800 p-4 rounded-xl flex items-center mb-8"
            >
              <div className="flex-grow">
                <h4 className="text-2xl mb-2">{item.title}</h4>
                {item.school && (
                  <p className="text-lg font-semibold">{item.school}</p>
                )}
                {item.major && <p className="text-base">{item.major}</p>}
                <p className="text-base">{item.years}</p>
                {item.web !== "" && (
                <button
                  className="px-2 py-1 mt-2 text-sm text-white font-bold rounded-lg shadow-lg bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-blue-500/50 hover:shadow-lg flex items-center"
                  onClick={() => window.open(item.web, "_blank")}
                >
                  <TbWorldWww className="mr-2" />
                  <span>Website</span>
                </button>
              )}
              </div>
              <div className="ml-4">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-20 h-20 rounded-full border-4 border-gray-300 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

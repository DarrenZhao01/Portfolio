import React, { useState, useRef, useEffect } from "react";

function Projects() {
  const projects = [
    { id: 1, name: "Virtual Tutoring SF", link: "https://www.virtualtutoringsf.org/", content: "For students, by students.", image: "/Virtual Tutoring SF _ Welcome.jpeg", color: "text-amber-950" },
    { id: 2, name: "SF Dental Office", link: "https://www.sfdentaloffice.com/", content: "Healthy smiles for years to come.", image: "/SF_Dental_Office.jpeg", color: "text-purple-950" },
    { id: 3, name: "Course Finder UCI", link: "https://www.coursefinderuci.com/", content: "Discover and explore UCI courses with ease.", image: "/coursefinder-uci.jpg", color: "text-blue-950" },
    { id: 4, name: "ClubInfo", content: "2nd Place Congressional App Winner 2023, San Francisco District", image: "/Clubinfo.png", color: "text-purple-950" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef([]);

  useEffect(() => {
    if (tabRefs.current[activeIndex]) {
      const currentTab = tabRefs.current[activeIndex];
      setIndicatorStyle({
        left: currentTab.offsetLeft,
        width: currentTab.offsetWidth,
      });
    }
  }, [activeIndex]);

  return (
    <div className="flex flex-col items-center mb-7">
      {/* Frosted Glass Selection Bar with Sliding Indicator */}
      <div className="relative w-full p-4 bg-white/15 backdrop-blur-md rounded-xl flex justify-around">
        {projects.map((project, index) => (
          <button
            key={project.id}
            ref={(el) => (tabRefs.current[index] = el)}
            onClick={() => setActiveIndex(index)}
            className={`px-4 py-2 text-xl rounded-xl relative z-10 transition-colors
              ${
                activeIndex === index
                  ? "text-white"
                  : "white"
              }`}
          >
            {project.name}
          </button>
        ))}
        {/* Active Selection Indicator */}
        <div
          className="absolute bottom-0 h-1 bg-blue-500 transition-all duration-300"
          style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
        />
      </div>

      {/* Project Placeholder Content */}
      <div className="mt-8 w-full flex justify-center">
        <div className="relative shadow-md rounded-xl cursor-pointer group">
          <a href={projects[activeIndex].link} target="_blank" rel="noopener noreferrer">
          <img
            src={projects[activeIndex].image}
            alt={projects[activeIndex].name}
            className="w-full h-auto object-cover rounded-xl"
          />
          </a>
          <div
            className="absolute bottom-0 left-0 right-0 h-full rounded-xl pointer-events-none transition-opacity duration-300 group-hover:opacity-0"
            style={{ backdropFilter: 'blur(1000px)', maskImage: 'linear-gradient(to bottom, transparent, orange)' }}
          ></div>
          <div className={`absolute bottom-0 left-0 right-0 h-40 p-4 ${projects[activeIndex].color} ml-7 flex flex-col justify-end z-10 transition-opacity duration-300 group-hover:opacity-0`}>
            <h1 className="text-6xl font-bold ">{projects[activeIndex].name}</h1>
            <p className="mt-4 mb-7 text-2xl">{projects[activeIndex].content}</p>
          </div>
        </div>
      </div>
      <span>Built with React, Tailwind CSS, and Vite</span>
    </div>
  );
}

export default Projects;
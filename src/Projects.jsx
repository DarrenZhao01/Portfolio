import React, { useState, useRef, useEffect } from "react";

function Projects() {
  const projects = [
    { id: 1, name: "Virtual Tutoring SF", content: "Placeholder for Project 1 content." },
    { id: 2, name: "Project 2", content: "Placeholder for Project 2 content." },
    { id: 3, name: "Project 3", content: "Placeholder for Project 3 content." },
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
    <div className="flex flex-col items-center">
      {/* Frosted Glass Selection Bar with Sliding Indicator */}
      <div className="relative w-full p-4 bg-white/15 backdrop-blur-md rounded-2xl flex justify-around">
        {projects.map((project, index) => (
          <button
            key={project.id}
            ref={(el) => (tabRefs.current[index] = el)}
            onClick={() => setActiveIndex(index)}
            className={`px-4 py-2 text-xl rounded-lg relative z-10 transition-colors
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
        <div className="relative shadow-md rounded-lg cursor-pointer group">
          <img
            src="src/assets/Virtual Tutoring SF _ Welcome.jpeg"
            alt="vtsf"
            className="w-full h-auto object-cover rounded-lg"
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-60 pointer-events-none transition-opacity duration-300 group-hover:opacity-0"
            style={{ backdropFilter: 'blur(10px)', maskImage: 'linear-gradient(to bottom, transparent, black)' }}
          ></div>
          <div className="absolute bottom-0 left-0 right-0 h-40 p-4 text-white flex flex-col justify-end z-10">
            <h1 className="text-2xl font-semibold">{projects[activeIndex].name}</h1>
            <p className="mt-2">{projects[activeIndex].content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
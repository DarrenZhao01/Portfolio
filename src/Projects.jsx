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
    <div className="flex flex-col items-center mt-180">
      {/* Frosted Glass Selection Bar with Sliding Indicator */}
      <div className="relative w-full p-4 bg-white/15 backdrop-blur-md rounded-full shadow-md flex justify-around">
        {projects.map((project, index) => (
          <button
            key={project.id}
            ref={(el) => (tabRefs.current[index] = el)}
            onClick={() => setActiveIndex(index)}
            className={`px-4 py-2 font-medium rounded-lg relative z-10 transition-colors
              ${
                activeIndex === index
                  ? "text-white"
                  : "white hover:bg-purple-900/60"
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
      <div className="mt-8 w-full max-w-4xl p-6 bg-gray-600 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">
          {projects[activeIndex].name}
        </h2>
        <p>{projects[activeIndex].content}</p>
      </div>
    </div>
  );
}

export default Projects;

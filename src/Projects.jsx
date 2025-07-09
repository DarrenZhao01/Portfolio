import React, { useState } from "react";

function Projects() {
  const projects = [
    { 
      id: 1, 
      name: "Course Finder UCI", 
      link: "https://www.coursefinderuci.com/", 
      content: "Find needed UCI courses with ease.", 
      image: "/coursefinder-uci.jpg", 
      icon: "fas fa-graduation-cap",
      defaultColor: "#ED5565"
    },
    { 
      id: 2, 
      name: "Virtual Tutoring SF", 
      link: "https://www.virtualtutoringsf.org/", 
      content: "For students, by students.", 
      image: "/VTSF.jpeg", 
      icon: "fas fa-chalkboard-teacher",
      defaultColor: "#FC6E51"
    },
    { 
      id: 3, 
      name: "SF Dental Office", 
      link: "https://www.sfdentaloffice.com/", 
      content: "Healthy smiles for years to come.", 
      image: "/SF_Dental_Office.jpeg", 
      icon: "fas fa-tooth",
      defaultColor: "#FFCE54"
    },
    { 
      id: 4, 
      name: "ClubInfo", 
      link: "#", 
      content: "2nd Place Congressional App Winner 2023, San Francisco District", 
      image: "/Clubinfo.png", 
      icon: "fas fa-trophy",
      defaultColor: "#2ECC71"
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  const handleCardNavigation = (project) => {
    if (project.link && project.link !== "#") {
      window.open(project.link, "_blank", "noopener noreferrer");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20">
      <h2 className="text-5xl font-semibold mb-16 text-white" data-aos="fade-up">
        My Projects
      </h2>
      
      <div className="flex flex-row items-stretch overflow-hidden min-w-[600px] max-w-[65vw] w-full h-[700px]">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`relative overflow-hidden cursor-pointer transition-all duration-500 ease-out ${
              activeIndex === index
                ? 'flex-grow-[10000] max-w-[1000px] m-0 rounded-[40px] mx-3'
                : 'flex-grow min-w-[60px] m-2.5 rounded-[30px] blur-[0.5px] opacity-50'
            }`}
            style={{
              background: `url(${project.image})`,
              backgroundSize: activeIndex === index ? 'auto 100%' : 'auto 120%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
            onClick={() => handleCardClick(index)}
          >
            {/* Shadow overlay */}
            <div
              className={`absolute left-0 right-0 h-[120px] transition-all duration-500 ease-out ${
                activeIndex === index
                  ? 'bottom-0'
                  : 'bottom-[-40px]'
              }`}
              style={{
                boxShadow: activeIndex === index
                  ? 'inset 0 -120px 120px -120px black, inset 0 -120px 120px -100px black'
                  : 'inset 0 -120px 0px -120px black, inset 0 -120px 0px -100px black'
              }}
            ></div>
            
            {/* Label */}
            <div
              className={`absolute right-0 h-10 flex transition-all duration-500 ease-out ${
                activeIndex === index
                  ? 'bottom-5 left-5'
                  : 'bottom-2.5 left-2.5'
              }`}
            >
              {/* Icon */}
              <div
                className="flex items-center justify-center min-w-10 max-w-10 h-10 rounded-full bg-white text-lg"
                style={{ color: project.defaultColor }}
              >
                <i className={project.icon}></i>
              </div>
              
              {/* Info */}
              <div className="flex flex-col justify-center ml-2.5 text-white whitespace-pre">
                <div
                  className={`relative font-bold text-lg transition-all duration-500 ease-out ${
                    activeIndex === index ? 'left-0 opacity-100' : 'left-5 opacity-0'
                  }`}
                >
                  {project.name}
                </div>
                <div
                  className={`relative transition-all duration-500 ease-out delay-100 ${
                    activeIndex === index ? 'left-0 opacity-100' : 'left-5 opacity-0'
                  }`}
                >
                  {project.content}
                </div>
              </div>
            </div>
            
            {/* Click handler for navigation */}
            {activeIndex === index && (
              <button
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCardNavigation(project);
                }}
                aria-label={`Visit ${project.name}`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
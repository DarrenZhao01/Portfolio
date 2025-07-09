import React, { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Timeline() {
  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-in-out', once: true });
    AOS.refresh();
  }, []);

  const timelineItems = [
    {
      title: "Learning from Scratch",
      description: "My first coding experience was in middle school, where I was taught Scratch and coding with blocks. I fell in love with the idea of making anything I want."
    },
    {
      title: "First Web Development Project", 
      description: "Taking a web development course in my 8th grade summer at UC Berkeley's Academic Talent Development Program. I learned about HTML, CSS, and the internet. I built my own version of Bestbuy.com."
    },
    {
      title: "Built a website for a Local Dental Office",
      description: "I built a website for a local dental office in San Francisco using WIX. I learned about SEO and how to make a website look professional. It was also my first time using my skills to have a real-world impact."
    },
    {
      title: "Full-Stack Development",
      description: "With a solid understanding of web development and UX, I developed my backend skills by building a website for a virtual tutoring service. This was my first true full-stack experience."
    },
    {
      title: "Current Focus",
      description: "I'm currently working on advanced projects like Course Finder UCI and contributing to open-source initiatives while seeking internship opportunities. Additionally, I'm learning about AWS, AI, and Data Structures on my own."
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-50 min-h-screen py-20">
      <h2 className="text-5xl font-semibold mb-30" data-aos="fade-up" style={{ color: '#FFFFFF' }}>
        My Journey in Tech
      </h2>
      
      <div className="relative max-w-4xl w-full">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-purple-300"></div>
        
        {timelineItems.map((item, index) => (
          <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
            {/* Timeline dot */}
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-500 rounded-full border-4 border-white shadow-lg z-10"
              data-aos="zoom-in"
              data-aos-delay={index * 200}
            ></div>
            
            {/* Content */}
            <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
              <div 
                className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 shadow-lg backdrop-blur-sm"
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                data-aos-delay={index * 200 + 100}
              >
                <h3 className="text-2xl font-semibold mb-3" style={{ color: '#FFFFFF' }}>
                  {item.title}
                </h3>
                <p className="text-lg leading-relaxed" style={{ color: '#888484' }}>
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline; 
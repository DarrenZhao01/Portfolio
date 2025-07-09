import React, { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import SkillsRadar from "./SkillsRadar.jsx";

function App() {
  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <div className="flex flex-col justify-center h-svh">
      <div className="flex items-center justify-center gap-12 mb-4">
        <h1 className="text-7xl/30 font-bold" data-aos="fade-down">
          Hi, I'm Darren.
        </h1>
        <div data-aos="fade-left" data-aos-delay="400">
          <SkillsRadar />
        </div>
      </div>
      <h2
        className="text-2xl/10 font-medium text-center"
        style={{ color: '#888484' }}
        data-aos="fade-up"
        data-aos-delay="600"
      >
        I'm a <span style={{ color: '#FFFFFF' }}>Computer Science student</span> at the University of California, Irvine.
      </h2>
    </div>
  );
}

export default App;

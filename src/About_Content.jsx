import React, { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutContent() {
  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-in-out', once: true });
    AOS.refresh();
  }, []);
  return (
    <div className="grid auto-cols-fr grid-flow-col justify-center items-center">
      <div className="pr-10">
        <p className="text-5xl/30 font-semibold" data-aos="fade-up">About Me</p>
        <p className="text-2xl/10" data-aos="fade-up" data-aos-delay="600" style={{ color: '#888484' }}>
          I am passionate about software development and am always looking for opportunities to learn and grow.
          Currently, I am expanding my skills in <span style={{ color: '#FFFFFF' }}>Python</span> and <span style={{ color: '#FFFFFF' }}>Web Development</span>, whether it's through personal projects or coursework.
          Previously, I have built websites for a <span style={{ color: '#FFFFFF' }}>non-profit tutoring organization</span> and a <span style={{ color: '#FFFFFF' }}>local SF business</span>.
        </p>
      </div>
      <div className="flex justify-end pl-10">
        <img
          className="max-h-200 rounded-2xl"
          data-aos="fade-up"
          data-aos-delay="1200"
          src="src/assets/me.jpg"
          alt="About me"
        />
      </div>
    </div>
  );
}

export default AboutContent;

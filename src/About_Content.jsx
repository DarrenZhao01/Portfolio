import React, { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutContent() {
  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-in-out', once: false });
    AOS.refresh();
  }, []);
  return (
    <div className="grid auto-cols-fr grid-flow-col justify-center">
      <div>
        <p className="text-2xl/10" data-aos="fade-up" data-aos-delay="600">
          I am passionate about software development and am always looking for opportunities to learn and grow.
          Currently, I am shaprening my skills in Python and web development, whether it's through personal projects or coursework.
          Previously, I have built websites for a non-profit tutoring organization and a local San Francisco business.
        </p>
      </div>
      <div>
        <p className="text-2xl">Image Placeholder</p>
      </div>
    </div>
  );
}

export default AboutContent;

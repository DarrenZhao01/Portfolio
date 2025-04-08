import React, { useEffect } from 'react';
import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
    useEffect(() => {
        AOS.init({ duration: 700, easing: "ease-in-out", once: false });
        AOS.refresh();
    }, []);
    return (
        <div className="flex flex-col justify-center h-20 text-5xl/30 font-semibold mt-180 mb-5" >
            Projects
        </div>
    )
}

export default About;

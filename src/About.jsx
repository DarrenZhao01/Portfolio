import React, { useEffect } from 'react';
import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        AOS.refresh();
    }, []);
    return (
        <div className="flex flex-col justify-center h-20" >
            <p className="text-5xl font-semibold">About Me</p>
        </div>
    )
}

export default About;

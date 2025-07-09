import React, { useEffect } from 'react';
import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Connect() {
    useEffect(() => {
        AOS.init({ duration: 700, easing: "ease-in-out", once: true });
        AOS.refresh();
    }, []);

    return (
        <div className="flex flex-col items-center py-16">
            <h2 className="text-5xl/30 font-semibold mb-12" data-aos="fade-up">
                Let's Connect
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-8 items-center" data-aos="fade-up" data-aos-delay="300">
                {/* LinkedIn */}
                <a 
                    href="https://www.linkedin.com/in/darren-zhao-257424241/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 min-w-80"
                >
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-600 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                    </div>
                    <div>
                        <div className="text-xl font-semibold text-white">LinkedIn</div>
                        <div className="text-sm" style={{ color: '#888484' }}>Professional Network</div>
                    </div>
                </a>

                {/* GitHub */}
                <a 
                    href="https://github.com/DarrenZhao01" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 min-w-80"
                >
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                    </div>
                    <div>
                        <div className="text-xl font-semibold text-white">GitHub</div>
                        <div className="text-sm" style={{ color: '#888484' }}>Code Repository</div>
                    </div>
                </a>

                {/* Email */}
                <a 
                    href="mailto:zhaod579@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 min-w-80"
                >
                    <div className="w-12 h-12 flex items-center justify-center bg-red-600 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div>
                        <div className="text-xl font-semibold text-white">Email</div>
                        <div className="text-sm" style={{ color: '#888484' }}>zhaod579@gmail.com</div>
                    </div>
                </a>
            </div>
            
            <div className="mt-16 text-sm" style={{ color: '#888484' }} >
                Built with React, TailwindCSS, HTML, and Vite
            </div>
        </div>
    );
}

export default Connect; 
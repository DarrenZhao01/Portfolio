import React, { useState, useEffect } from 'react';
import './App.css';
import { initCursorEffects } from './cursorEffects.js';

function Header() {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsNavActive(false); // Close menu after clicking
    }
  };

  useEffect(() => {
    // Add nav-active class to body when menu is open
    if (isNavActive) {
      document.body.classList.add('nav-active');
    } else {
      document.body.classList.remove('nav-active');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('nav-active');
    };
  }, [isNavActive]);

  useEffect(() => {
    // Initialize cursor effects
    const cleanup = initCursorEffects();
    
    return cleanup;
  }, []);

  return (
    <>
      <header className="cd-header">
        <div className="header-wrapper">
          <div className="logo-wrap">
            <a href="#" className="hover-target" onClick={() => scrollToSection('header')}>
              <span>Darren's</span> Portfolio
            </a>
          </div>
          <div className="nav-but-wrap">
            <div className="menu-icon hover-target" onClick={toggleNav}>
              <span className="menu-icon__line menu-icon__line-left"></span>
              <span className="menu-icon__line"></span>
              <span className="menu-icon__line menu-icon__line-right"></span>
            </div>
          </div>
        </div>
      </header>

      <div className="nav">
        <div className="nav__content">
          <ul className="nav__list">
            <li className="nav__list-item active-nav">
              <a href="#" className="hover-target" onClick={() => scrollToSection('header')}>
                Home
              </a>
            </li>
            <li className="nav__list-item">
              <a href="#" className="hover-target" onClick={() => scrollToSection('about-content')}>
                About
              </a>
            </li>
            <li className="nav__list-item">
              <a href="#" className="hover-target" onClick={() => scrollToSection('projects')}>
                Projects
              </a>
            </li>
            <li className="nav__list-item">
              <a href="#" className="hover-target" onClick={() => scrollToSection('connect')}>
                Connect
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Cursor elements */}
      <div className='cursor' id="cursor"></div>
      <div className='cursor2' id="cursor2"></div>
      <div className='cursor3' id="cursor3"></div>
    </>
  );
}

export default Header; 
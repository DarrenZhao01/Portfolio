import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './About.jsx'
import AboutContent from './About_Content.jsx'
import Projects from './Projects.jsx'
import Connect from './Connect.jsx'

createRoot(document.getElementById('header')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

createRoot(document.getElementById('about')).render(
  <StrictMode>
    <About />
  </StrictMode>
)

createRoot(document.getElementById('about-content')).render(
  <StrictMode>
    <AboutContent />
  </StrictMode>
)

createRoot(document.getElementById('projects')).render(
  <StrictMode>
    <Projects />
  </StrictMode>
)

createRoot(document.getElementById('connect')).render(
  <StrictMode>
    <Connect />
  </StrictMode>
)
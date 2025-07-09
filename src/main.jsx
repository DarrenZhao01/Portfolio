import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'
import ProjectHeader from './Project_Header.jsx'
import AboutContent from './About_Content.jsx'
import Timeline from './Timeline.jsx'
import Projects from './Projects.jsx'
import Connect from './Connect.jsx'

createRoot(document.getElementById('navigation')).render(
  <StrictMode>
    <Header />
  </StrictMode>
)

createRoot(document.getElementById('header')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

createRoot(document.getElementById('project-header')).render(
  <StrictMode>
    <ProjectHeader />
  </StrictMode>
)

createRoot(document.getElementById('about-content')).render(
  <StrictMode>
    <AboutContent />
  </StrictMode>
)

createRoot(document.getElementById('timeline')).render(
  <StrictMode>
    <Timeline />
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
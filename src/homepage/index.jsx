import './_homepage.scss'
import { IoLogoGithub } from "react-icons/io";
import { GiCampCookingPot } from "react-icons/gi";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCopyright } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import projects from './projects';
export default function HomePage() {

  const [hovered, setHovered] = useState(false);
  useEffect(() => {
  }, []);
  return (
    <div className="m-container">
      <div className="m-container-wrapper">
        <nav>
          <ul>
            <li onMouseOver={()=> setHovered(true)} onMouseOut={()=> setHovered(false)} className={hovered ? 'active':'unactive'}>{hovered  ? 'AahinMehreen': 'AM'}</li>
            <li><IoLogoGithub className='github-icon' /></li>
          </ul>
        </nav>
        <div className="hero-section">
          <h2>React JS <span>Projects</span></h2>
          <p>Showcasing a collection of React projects. Easy to understand, customize, and deploy.</p>
          <div className="box">On Cooking <GiCampCookingPot className='cooking-icon' /></div>
        </div>
        <div className="projects-section">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Link to={project.path} className='project-link'><FaArrowRightLong className='arrow-icon' /></Link>
            </div>
          ))}
        </div>
        <div className="info-section">
          <h2>React Js</h2>
          <p>by AahinMehreen Developer</p>
          <div className="info-container">
            
          </div>
        </div>
      </div>
      <footer>
        
        <p><FaCopyright className='copy-icon' /> {new Date().getFullYear()} AahinMehreen Builds | Made by <FaHeart className='heart-icon' /></p>
        
      </footer>
    </div>
  )
}

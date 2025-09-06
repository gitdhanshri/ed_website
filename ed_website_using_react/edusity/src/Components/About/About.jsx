import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.jpg'
const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon'onClick={()=>{
          setPlayState(true)
        }}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nuturing Tomorrow's Leaders Today</h2>
        <p>College is more than just a place for academic learning — it's a transformative chapter where students explore new ideas, build lifelong friendships, and shape their future. From early morning lectures to late-night brainstorming sessions, every moment contributes to personal and professional growth.</p>
        <p>
          At its core, college fosters curiosity, creativity, and collaboration. Students engage in hands-on projects, participate in vibrant campus activities, and discover their passions through clubs, internships, and community service. It’s a space where challenges become opportunities, and where every setback teaches resilience.
        </p>
      </div>
          
    </div>
  )
}

export default About

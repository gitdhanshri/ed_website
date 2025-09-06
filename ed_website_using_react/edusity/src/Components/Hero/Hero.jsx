import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark_arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
    <div className="hero-text">
      <h1>We Ensure Better Education for better world</h1>
      <p> "College transforms you in ways you can't predict. These messages prepare you for the journey of personal discovery and intellectual growth that lies ahead." </p>
      <button className='btn'>Explore More<img src={dark_arrow} alt="" /></button>
    </div>
    </div>
  )
}

export default Hero

import React from 'react'
import program_1 from '../../assets/program_1.jpg'
import program_2 from '../../assets/program_2.jpg'
import program_3 from '../../assets/program_3.jpg'
import program_icon_1 from  '../../assets/image_icon_1.jpeg'
import program_icon_2 from  '../../assets/image_icon_2.png'
import program_icon_3 from  '../../assets/image_icon_3.jpeg'


import './Program.css'
const Program = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>Master Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
          <img src={program_icon_3} alt="" />
          <p>Post Graduation Degree</p>
        </div>
      </div>
    </div>
  )
}

export default Program

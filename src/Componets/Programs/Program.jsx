import React from 'react'
import './Programs.css'
import program_1 from '../../assets/Program-1.jpg'
import program_2 from '../../assets/Program-22.jpg'
import program_3 from '../../assets/Program-333.jpg'
import program_icon_1 from '../../assets/Program-icon-111.webp'

const Program = () => {
  return (
    <div className='programs'>
     <div className='program'>
      <img src= {program_1} alt="" />
      <div className="caption">
        <img src={program_icon_1} alt="" />
        <p>Graduation Degree</p>
      </div>
     </div>
     <div className='program'>
      <img src= {program_2} alt="" />
      <div className="caption">
        <img src={program_icon_1} alt="" />
        <p>Masters Degree</p>
      </div>
     </div>
     <div className='program'>
      <img src= {program_3} alt="" />
      <div className="caption">
        <img src={program_icon_1} alt="" />
        <p>Post Degree</p>
      </div>
     </div>

    </div>
  )
}

export default Program
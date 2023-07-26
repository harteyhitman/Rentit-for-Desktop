import React from 'react'
import Entrepreneur from '../Images/entrepreneur.png'
import Forbes from '../Images/forbes.png'
import TechTimes from '../Images/tech-times.png'
import TechCrunch from '../Images/techCrunch.png'
import Wallstreet from '../Images/wallstreet.png'

const Sponsors = () => {
  return (
    <div>
        <div className="trusted-by">
            <p>Trusted by:</p>
        </div>
        <div className="sponsors">
          <img src={TechCrunch} alt="" />
          <img src={Forbes} alt="" />
          <img src={Entrepreneur} alt="" />
          <img src={TechTimes} alt="" />
          <img src={Wallstreet} alt="" />
        </div>
    </div>
  )
}

export default Sponsors
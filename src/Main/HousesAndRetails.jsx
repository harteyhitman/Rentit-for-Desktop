import React from 'react'
import RetailsImg from '../Images/firsthouse.png'
import Form  from '../components/Form'

const HousesAndRetails = () => {
  return (
    <div className="retails-container">
    <div className='retails-houses'>
        <p className='houses'>Houses</p>
        <p className='retails'>Retails</p>
    </div>
        <img className='first-house' src={RetailsImg} alt="" />
        <Form/>
    </div>
  )
}

export default HousesAndRetails
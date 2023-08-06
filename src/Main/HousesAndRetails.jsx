import React from 'react'
import RetailsImg from '../Images/firsthouse.png'
import Form  from '../components/Form'
import FormForMobile from './FormForMobile'

const HousesAndRetails = () => {
  return (
    <div className="retails-container">
    <FormForMobile />
    <div className='retails-houses'>
        <p className='houses'>Houses</p>
        <p className='retails'>Retails</p>
    </div>
    <div className="form-and-houseRetails">
    
        <img className='first-house' src={RetailsImg} alt="" />
        <Form/>
        </div>
    </div>
  )
}

export default HousesAndRetails
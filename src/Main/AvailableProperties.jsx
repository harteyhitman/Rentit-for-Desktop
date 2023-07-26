import React from 'react'
import TextImg from '../Images/Text.png'


const AvailableProperties = () => {
  return (
    <div className='avail-props'>
        <div className="featured-props">
            <p className='feats-props'>FEATURED PROPERTIES</p>
            <h2 className='we-provide'>We provide you</h2>
            <img src={TextImg} alt="" />
        </div>
        <div className="house-apartment-land">
            <div className='house'>Houses</div>
            <div className='apartment'>Apartment</div>
            <div className='land'>Land</div>
        </div>
    </div>
  )
}

export default AvailableProperties
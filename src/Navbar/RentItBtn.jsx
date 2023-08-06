import React from 'react'
import ProductLogo from '../Images/Product-logo.png'
const RentItBtn = () => {

    const handleClick = () => {
    console.log("Button clicked!");
  };


  return (
    <div>
    <img src={ProductLogo} onClick={handleClick} alt="" />
    </div>
  )
}

export default RentItBtn
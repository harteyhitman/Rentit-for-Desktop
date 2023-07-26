import React from 'react'
import Button from '../components/Button';

const RentItBtn = () => {

    const handleClick = () => {
    console.log("Button clicked!");
  };


  return (
    <div>
    <Button onClick={handleClick} className="rent-it-btn" label="Rent it"/>
    </div>
  )
}

export default RentItBtn
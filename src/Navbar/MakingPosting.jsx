import React from 'react'
import Button from '../components/Button'

const MakingPosting = () => {

    const ClickMakePosting = () =>{
        console.log('firsthalf')
    }

  return (
    <div>
        <Button onClick={ClickMakePosting} className="make-posting-btn" label="Make posting"/>
    </div>
  )
}

export default MakingPosting
import React from 'react'
import Button from '../components/Button'

const LoginBtn = () => {

    const ClickLoginBtn = () =>{
        console.log("Button clicked!")
    }

  return (
    <div>
        <Button onClick={ClickLoginBtn} className="login-btn" label="Login"/>
    </div>
  )
}

export default LoginBtn
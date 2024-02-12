import React from 'react'
import "./Newsletter.scss"
function Newsletter() {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email </h1>
        <p>Suscribe to our newletter and stay updated</p>

        <div>
            <input type='email'placeholder=' Enter Your Email Id'/>
            <button>Suscribe</button>
        </div>

    </div>
  )
}

export default Newsletter
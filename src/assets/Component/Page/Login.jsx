import React from 'react'

function Login() {
  return (
    <div className='login'>
      <div className="login-container">
        <h2>Sign Up</h2>
        <div className="login-fields">
          <input type='text' placeholder='Your Name'/>
          <input type='eamil' placeholder='Email Address'/>
          <input type='password' placeholder='Password'/>
        </div>

        <button>Continue</button>
        <p className='login-login'>Already have an account?<span>Login here</span></p>
        <div className="login-aggre">
          <input type='checkbox' name='' id=''/>
          <p>By continuing,i agree to the term of use & privacy policy.</p>
        </div>
        
      </div>
    </div>
  )
}

export default Login
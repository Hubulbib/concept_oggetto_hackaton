import React from 'react';
import logo from './img/logo.svg';


function Auth() {
  return (
    <div className='container'>
      <div className='auth'>
        <div className='auth__logo'>
          <img src={logo} />
        </div>
        <div className='auth__sign-in'>
          <ul className='auth__list'>
            <li className='auth__input'>
              <ALog />
            </li>
            <li className='auth__input'>
              <APass />
            </li>
            <ABtn />
          </ul>
        </div>
      </div>
    </div>
  )
}

function ALog() {
  return (
    <input className='inp-login' placeholder='Login'></input>
  )
}
function APass() {
  return (
    <input type="password" placeholder='Password' className='inp-pass'></input>
  )
}

function ABtn() {
  return (
    <button className='btn-signIn'>Sign in</button>
  )
}

export default Auth
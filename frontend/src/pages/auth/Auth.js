import React from 'react';
import logo from './img/logo.svg';
import Inp from '../../components/Inp';
import Btn from '../../components/Btn';


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
              <Inp class="inp-login" value="Login" type="text"></Inp>
            </li>
            <li className='auth__input'>
            <Inp class="inp-pass" value="Password" type="password"></Inp>
            </li>
            <Btn class="btn-signIn" value="Sign in" src="/form"/>
          </ul>
        </div>
      </div>
    </div>
  )
}



export default Auth
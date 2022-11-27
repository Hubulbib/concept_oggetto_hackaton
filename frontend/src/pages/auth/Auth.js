import React, {useContext, useState} from 'react';
import logo from './img/logo.svg';
import Inp from '../../components/Inp';
import {Context} from '../../index';

function Auth() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const {AuthStore: {login}} = useContext(Context)

  return (
    <div className='container'>
      <div className='auth'>
        <div className='auth__logo'>
          <img src={logo} />
        </div>
        <div className='auth__sign-in'>
          <ul className='auth__list'>
            <li className='auth__input'>
              <Inp class="inp-login" value={username} onChange={setUsername} placeholder="Login" type="text"></Inp>
            </li>
            <li className='auth__input'>
            <Inp class="inp-pass" value={password} onChange={setPassword} placeholder="Password" type="password"></Inp>
            </li>
            <button className="btn-signIn" placeholder="Sign in" onClick={() => login(username, password)}/>
          </ul>
        </div>
      </div>
    </div>
  )
}


export default Auth
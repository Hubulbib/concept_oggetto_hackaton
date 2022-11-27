import React from 'react';
import logo from './img/logo.svg'
import './main.css';

export default function Main() {
  return (
    <div className='main'>
      <div className='main__logo'>
        <img src={logo}></img>
      </div>
      <div className='main__options'>
        <div className='main__profile'>
          <div className='main__item'>Your form</div>
        </div>
        <div className='main__profile'>
          <div className='main__item'>Employee cards</div>
        </div>
        <div className='main__profile'>
          <div className='main__item'>Interective</div>
        </div>
      </div>
    </div>
  )
}
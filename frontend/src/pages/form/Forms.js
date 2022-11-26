import React from 'react';
import Btn from '../../components/Btn';
import logo from '../auth/img/logo.svg'
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import Form3 from './components/Form3';
import Form5 from './components/Form5';

export default function Forms() {
  return (
    <div className='form__container'>
      <div className='form__logo'>
        <img src={logo} />
      </div>
      <h1 className='form__title'>Your form</h1>
      <div className='form__block'>
        <Form5 />
        <Btn class="btn-signIn btn-form" value="Enter"/> 
      </div>
    </div>
  )
}

// 67 z
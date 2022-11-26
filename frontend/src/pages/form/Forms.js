import React from 'react';
import Btn from '../../components/Btn';
import logo from '../auth/img/logo.svg'
import Form1 from './components/Form1';

export default function Forms() {
  return (
    <div className='form__container'>
      <div className='form__logo'>
        <img src={logo} />
      </div>
      <h1 className='form__title'>Your form</h1>
      <div className='form__block'>
        <Form2 />
        <Btn class="btn-signIn btn-form" value="Enter"/> 
      </div>
    </div>
  )
}
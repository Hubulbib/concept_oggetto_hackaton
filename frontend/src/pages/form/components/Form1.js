import React from 'react';
import Inp from '../../../components/Inp';
import Btn from '../../../components/Btn';

export default function Form1() {
  return (
    <ul className='form1__list'>
      <li className='form1__item'>
        <Inp class="inp-login" value="Name" type="text"/>
      </li>
      <li className='form1__item'>
        <Inp class="inp-login" value="Surname" type="text"/>
      </li>
      <li className='form1__item'>
        <Inp class="inp-login" value="Age" type="text"/>
      </li>
    </ul>
  )
}
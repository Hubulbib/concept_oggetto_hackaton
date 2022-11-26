import React from 'react';
import Inp from '../../../components/Inp';
import img1 from '../img/img1.png'
import img2 from '../img/img2.png'

export default function Form2() {
  return (
    <div className='form2'>
      <h3 className='form2__title'>Choose the city where you work in?</h3>
      <ul className='form2__list'>
        <li className='form2__item'>
          <img src={img1} />
        </li>
        <li className='form2__item'>
          <img src={img2} />
        </li>
      </ul>
    </div>
  )
}
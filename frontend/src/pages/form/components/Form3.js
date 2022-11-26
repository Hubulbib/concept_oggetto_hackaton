import React from 'react';
import img1 from '../img/pg1.png';
import img2 from '../img/pg2.png';
import img3 from '../img/pg3.png';
import img4 from '../img/pg4.png';
import img5 from '../img/pg5.png';
import img6 from '../img/pg6.png';
import logo from '../../auth/img/logo.svg'
import Btn from '../../../components/Btn';



export default function Form3() {
  return (
    <div className='form3'>
      <div className='form3__logo'>
        <img src={logo}></img>
      </div>
      <h1 className='form3__title'>Your form</h1>
      <div className='form3__sub'>What projects do you participate in?</div>
      <div className='form3__list'>
        <div className='form3__item'>
          <img src={img1}></img>
        </div>
        <div className='form3__item'>
          <img src={img2}></img>
        </div>
        <div className='form3__item'>
          <img src={img3}></img>
        </div>
        <div className='form3__item'>
          <img src={img4}></img>
        </div>
        <div className='form3__item'>
          <img src={img5}></img>
        </div>
        <div className='form3__item'>
          <img src={img6}></img>
        </div>
      </div>
      <Btn class="form3__btn" value="Enter"/>
    </div>
  )
}
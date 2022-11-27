import React from 'react';
import Emp from '../employees/components/Emp';
import logo from './img/logo.svg';
import './activity.css';
import Choice from './component/Choice';

let val = 'Пользователю предлагается выбрать по описанию сопоставить карточку.';

export default function Activity() {
  return (
    <div className='activity'>
      <div className='activity__logo'>
        <img src={logo} />
      </div>
      <div className='activity__content'>
        <div className='activity__side1'>
          <div className='activity__title'>Employee card</div>
          <div className='activity__card'>
            <Emp />
          </div>
        </div>
        <div className='activity__side2'>
          <Choice value={val}/>
          <Choice value={val}/>
          <Choice value={val}/>
        </div>
      </div>
    </div>
  )
}
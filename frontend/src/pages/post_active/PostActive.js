import React from 'react';
import Emp from '../employees/components/Emp';
import './post_active.css'
import logo from '../activity/img/logo.svg'

export default function PostActive() {
  return (
    <div className='postActive'>
      <div className='postActive__logo'>
        <img src={logo}/>
      </div>
      <div className='postActive__list'>
        <div className='postActive__item'>
          <Emp />
          <div className='postActive__extra'>
            <p className='postActive__extra-text'>
              Пользователю предлагается выбрать по описанию сопоставить карточку.
            </p>
          </div>
        </div>
        <div className='postActive__item'>
          <Emp />
          <div className='postActive__extra'>
            <p className='postActive__extra-text'>
              Пользователю предлагается выбрать по описанию сопоставить карточку.
            </p>
          </div>
        </div>
        <div className='postActive__item'>
          <Emp />
          <div className='postActive__extra'>
            <p className='postActive__extra-text'>
              Пользователю предлагается выбрать по описанию сопоставить карточку.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
import React from 'react';
import face from '../img/face.svg'

export default function Emp(props) {
  return (
    <div className='card'>
      <div className='card__photo'>
        <img src={face}></img>
      </div>
      <h3 className='card__title'>
        Шаха Вазовна Жигулёва
      </h3>
      <div className='card__info-list'>
        <p className='card__info-item'>Должность:  <span className='_strong'>Талисман</span></p>
        <p className='card__info-item'>Возраст:  <span className='_strong'>25 лет</span></p>
        <p className='card__info-item'>Город:  <span className='_strong'>Ижевск</span></p>
      </div>
    </div>
  )
}
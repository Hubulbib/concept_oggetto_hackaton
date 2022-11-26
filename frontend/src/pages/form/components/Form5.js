import React from 'react';
import face from '../img/avatar__face.svg';
import icon from '../img/avatar__icon.png'

export default function Form5() {
  return (
    <div className='form5__content'>
      <div className='form5__avatar avatar'>
        <h4 className='avatar__title'>Add photo </h4>
        <div className='avatar__photo'>
          <div className='avatar__img-pare'>
            <img src={face} className='avatar__face'/>
            <img src={icon} className='avatar__icon'/>
          </div>
        </div>
      </div>
      <div className='form5__write write'>
        <h4 className='write__title'>Facts about me</h4>
        <div className='write__text'>
          <textarea className='write__textarea'></textarea>
        </div>
      </div>
    </div>
  ) 
}
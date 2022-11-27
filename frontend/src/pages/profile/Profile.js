import React from 'react';
import './profile.css'
import logo from './img/logo.svg'
import face from './img/avatar__face.svg'


export default function Profile() {
  return (
    <div className='profile'>
      <div className='profile__logo'>
        <img src={logo}></img>
      </div>
      <h1 className='profile__title'>Your form</h1>
      <div className='profile__interface interface'>
        <div className='interface__user'>
          <div className='interface__user_basic'>
            <div className='interface__user-logo'>
              <div className='interface__user-img'>
                <img className='interface__face' src={face} />
              </div>
            </div>
            <div className='interface__user-text'>
              <p className='interface__user-sub'>Должность:  <span className='_strong'>Талисман</span></p>
              <p className='interface__user-sub'>Возраст:  <span className='_strong'>25 лет</span></p>
              <p className='interface__user-sub'>Город:  <span className='_strong'>Ижевск</span></p>
            </div>
          </div>
          <div className='interface__user_extra'>
            <div className='side1'>
              <p className='interface__user-sub'>Должность:  <span className='_strong'>Талисман</span></p>
              <p className='interface__user-sub'>Возраст:  <span className='_strong'>25 лет</span></p>
              <p className='interface__user-sub'>Город:  <span className='_strong'>Ижевск</span></p>
            </div>
            <div className='side2'>
              <p className='interface__user-sub'>Должность:  <span className='_strong'>Талисман</span></p>
              <p className='interface__user-sub'>Возраст:  <span className='_strong'>25 лет</span></p>
              <p className='interface__user-sub'>Город:  <span className='_strong'>Ижевск</span></p>
            </div>
          </div>
        </div>
        <div className='interface__info'>
          <h4 className='interface__info-title'>Facts about me</h4>
          <textarea className='interface__info-facts'>
            Some basic facts about the person.
            1 fact.
            2 fact.
          </textarea>
        </div>
      </div>
    </div>
  )
}
import React from 'react';
import Emp from './components/Emp';
import './employees.css'
import logo from './img/logo.svg'
import sort from './img/sort-icon.svg'

export default function Employees() {
  return (
    <div className='employees'>
      <div className='employees__logo'>
        <img src={logo}/>
      </div>
      <h1 className='employees__title'>
        Employee cards
        <div className="_sort-button">
          <div className='_sort-content'>
            <div className='_sort-button__img'>
              <img src={sort} />
            </div>
            <div className='_sort-button__text'>
              sorting
            </div>
          </div>
          <div className='_sort-activated'></div>
        </div>
      </h1>
      <div className='employees__list'>
        <Emp />
        <Emp />
        <Emp />
        <Emp />
        <Emp />
        <Emp />
      </div>
    </div>
  )
}
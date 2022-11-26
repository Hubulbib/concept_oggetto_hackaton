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
          <div className='form2__img'>
            <img src={img1} />
          </div>
          <div className='form2__text'>
            <p className='form2__title'>Офис в Таганроге</p>
            <p className='form2__sub'>ул. Петровская, 89Б, ТЦ "Андреевский"</p>
          </div>
        </li>
        <li className='form2__item'>
          <div className='form2__img'>
            <img src={img2} />
          </div>
          <div className='form2__text'>
            <p className='form2__title'>Офис в Ростове-на-Дону</p>
            <p className='form2__sub'>ул. Нижнебульварная, 6, БЦ, "5 морей"</p>
          </div>
        </li>
      </ul>
    </div>
  )
}
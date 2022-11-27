import React, {useContext, useEffect, useState} from 'react';
import img1 from '../img/img1.png'
import img2 from '../img/img2.png'
import img3 from '../img/img3.png'
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";

export default observer(function Form2() {

  const {SurveyStore: {setCreatedForm, createdForm}} = useContext(Context)

  const [active, setActive] = useState('')

  useEffect(() => {
    setCreatedForm({...createdForm, city: active})
  }, [active])

  return (
    <div className='form2'>
      <h3 className='form2__title-main'>Choose the city where you work in?</h3>
      <ul className='form2__list' >
        <li className='form2__item' onClick={() => setActive('Таганрог')}>
          <div className='form2__img'>
            <img src={img1} />
          </div>
          <div className={active === 'Таганрог' ? 'form2__text active' : 'form2__text'}>
            <p className='form2__title'>Офис в Таганроге</p>
            <p className='form2__sub'>ул. Петровская, 89Б, ТЦ "Андреевский"</p>
          </div>
        </li>
        <li className='form2__item' onClick={() => setActive('Ростов-на-Дону')}>
          <div className='form2__img'>
            <img src={img2} />
          </div>
          <div className={active === 'Ростов-на-Дону' ? 'form2__text active' : 'form2__text'}>
            <p className='form2__title'>Офис в Ростове-на-Дону</p>
            <p className='form2__sub'>ул. Нижнебульварная, 6, БЦ, "5 морей"</p>
          </div>
        </li>
        <li className='form2__item' onClick={() => setActive('Другой')}>
          <div className='form2__img'>
            <img src={img3} />
          </div>
          <div className={active === 'Другой' ? 'form2__text active' : 'form2__text'}>
            <p className='form2__title'>Another city</p>
          </div>
        </li>
      </ul>
    </div>
  )
})
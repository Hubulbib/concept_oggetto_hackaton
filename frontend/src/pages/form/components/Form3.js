import React, {useContext, useEffect, useState} from 'react';
import img1 from '../img/pg1.png';
import img2 from '../img/pg2.png';
import img3 from '../img/pg3.png';
import img4 from '../img/pg4.png';
import img5 from '../img/pg5.png';
import img6 from '../img/pg6.png';
import logo from '../../auth/img/logo.svg'
import Btn from '../../../components/Btn';
import {Link} from "react-router-dom";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";

export default observer(function Form3() {

    const [active, setActive] = useState('')
    const {SurveyStore: {setCreatedForm, createdForm}} = useContext(Context)

    useEffect(() => {
        setCreatedForm({...createdForm, project: active})
    }, [active])

  return (
    <div className='form3'>
      <div className='form3__logo'>
        <img src={logo}></img>
      </div>
      <h1 className='form3__title'>Your form</h1>
      <div className='form3__sub'>What projects do you participate in?</div>
      <div className='form3__list'>
        <div className={active === 'PUMA' ? 'form3__item active' : 'form3__item'} onClick={() => setActive('PUMA')}>
          <img src={img1}></img>
        </div>
        <div className={active === 'Золотое яблоко' ? 'form3__item active' : 'form3__item'} onClick={() => setActive('Золотое яблоко')}>
          <img src={img2}></img>
        </div>
        <div className={active === 'OBI' ? 'form3__item active' : 'form3__item'} onClick={() => setActive('OBI')}>
          <img src={img3}></img>
        </div>
        <div className={active === 'LOREAL' ? 'form3__item active' : 'form3__item'} onClick={() => setActive('LOREAL')}>
          <img src={img4}></img>
        </div>
        <div className={active === 'All' ? 'form3__item active' : 'form3__item'} onClick={() => setActive('All')}>
          <img src={img5}></img>
        </div>
        <div className={active === 'N/A' ? 'form3__item active' : 'form3__item'} onClick={() => setActive('N/A')}>
          <img src={img6}></img>
        </div>
      </div>
        <Link style={{color: 'black'}} to={`/survey/4`}><Btn class="form3__btn" value="Enter"/></Link>
    </div>
  )
})
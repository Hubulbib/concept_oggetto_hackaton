import React, {useContext} from 'react';
import Btn from '../../components/Btn';
import logo from '../auth/img/logo.svg'
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import Form5 from './components/Form5';
import {Link, useParams} from 'react-router-dom';
import {Form4} from './components/Form4';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

export default observer(function Forms() {

    const {id} = useParams()

    const {SurveyStore: {createForm}} = useContext(Context)

    return (
    <div className='form__container'>
      <div className='form__logo'>
        <img src={logo} />
      </div>
      <h1 className='form__title'>Your form</h1>
      <div className='form__block'>
          <Form id={id}/>
        <Link onClick={id === '8' ? createForm : null } to={id < 8 ? `/survey/${+id+1}` : '/'}><Btn class="btn-signIn btn-form" value="Enter" id={id} /></Link>
      </div>
    </div>
  )
})

const Form = ({id}) => {
    switch (id) {
        case '1': return <Form1 />
        case '2': return <Form2 />
        case '4':
            return <Form4 title={'Marital status'}
                          list={[{title: 'In a relationship'},
                              {title: 'Not in a relationship'}, {title: 'Do not specify'}]}
            />
        case '5':
            return <Form4 title={'Attitude to alcohol'}
                          list={[{title: 'Not drink'},
                              {title: 'Drink'}]}
            />
        case '6':
            return <Form4 title={'Attitude to smoke'}
                          list={[{title: 'Not smoke'},
                              {title: 'Smoke'}]}
            />
        case '7':
            return <Form4 title={'Attitude to sport'}
                          list={[{title: 'Do sport'},
                              {title: 'Rarely'}, {title: ' I don\'t do'}]}
            />
        case '8': return <Form5 />
    }
}

// 67 z
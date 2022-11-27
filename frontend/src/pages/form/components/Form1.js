import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import Inp from '../../../components/Inp';
import {Context} from "../../../index";

export default observer(function Form1() {

    const {SurveyStore: {setCreatedForm, createdForm}} = useContext(Context)

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [age, setAge] = useState('')
    const [job, setJob] = useState('')

    useEffect(() => {
        setCreatedForm({...createdForm, name, surname, age, job})
    }, [name, surname, age, job])
  return (
    <ul className='form1__list'>
      <li className='form1__item'>
        <Inp class="inp-login" value={name} onChange={setName} placeholder="Name" type="text"/>
      </li>
      <li className='form1__item'>
        <Inp class="inp-login" value={surname} onChange={setSurname} placeholder="Surname" type="text"/>
      </li>
      <li className='form1__item'>
        <Inp class="inp-login" value={age} onChange={setAge} placeholder="Age" type="text"/>
      </li>
        <li className='form1__item'>
            <Inp class="inp-login" value={job} onChange={setJob} placeholder="Job" type="text"/>
        </li>
    </ul>
  )
})
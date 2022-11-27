import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";

export default observer(function Form5() {

    const [photo, setPhoto] = useState('')
    const [fact, setFact] = useState('')

    const {SurveyStore: {setCreatedForm, createdForm}} = useContext(Context)

    useEffect(() => {
        setCreatedForm({...createdForm, photo, fact})
    }, [photo, fact])

  return (
    <div className='form5__content'>
      <div className='form5__avatar avatar'>
        <h4 className='avatar__title'>Add photo </h4>
          <div className='write__text'>
              <textarea value={photo} onChange={e => setPhoto(e.target.value)} style={{height: '20%', textAlign: 'center'}} placeholder='Link' className='write__textarea'></textarea>
          </div>
      </div>
      <div className='form5__write write'>
        <h4 className='write__title'>Facts about me</h4>
        <div className='write__text'>
          <textarea value={fact} onChange={e => setFact(e.target.value)} className='write__textarea'></textarea>
        </div>
      </div>
    </div>
  ) 
})
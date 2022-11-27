import React, {useContext, useEffect, useState} from 'react'
import {Context} from "../../../index";
import {useParams} from "react-router-dom";
import {observer} from "mobx-react-lite";

export const Form4 = observer(({title, list}) => {

    const [active, setActive] = useState('')

    const {SurveyStore: {createdForm, setCreatedForm}} = useContext(Context)

    const {id} = useParams()

    useEffect(() => {
        switch (id) {
            case '4':
                setCreatedForm({...createdForm, martialStatus: active})
                break
            case '5':
                setCreatedForm({...createdForm, alcohol: active})
                break
            case '6':
                setCreatedForm({...createdForm, smoking: active})
                break
            case '7':
                setCreatedForm({...createdForm, sport: active})
                break
        }

    }, [active])

    return (
        <ul className='form1__list'>
            <div className='form4__title'><h1>{title}</h1></div>
            {list.map(el => <Block active={active} setActive={setActive} title={el.title}/>)}
        </ul>
    )
})

const Block = ({title, setActive, active}) => {
    return (
        <li className={active === title ? 'form4__item active' : 'form4__item'}
            onClick={() => setActive(title)}>
            <h1>{title}</h1>
        </li>
    )
}
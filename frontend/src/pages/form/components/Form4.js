import React from 'react'
import Inp from "../../../components/Inp";

export const Form4 = ({title, list}) => {

    return (
        <ul className='form1__list'>
            <div className='form4__title'><h1>{title}</h1></div>
            {list.map(el => <Block title={el.title}/>)}
        </ul>
    )
}

const Block = ({title}) => {
    return (
        <li className='form4__item'>
            <h1>{title}</h1>
        </li>
    )
}
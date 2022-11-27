import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import Auth from '../pages/auth/Auth';
import Forms from "../pages/form/Forms";
import Form3 from "../pages/form/components/Form3";

export const routes = (isAuth, status) => {

    console.log(status)

    if (!isAuth) {
        return (
            <div className='app'>
            <Routes>
                <Route path='/auth' element={<Auth />}/>
                <Route path='*' element={<Navigate to='/auth' />} />
            </Routes>
            </div>
        )
    }

    else if(!status) {
        return (
            <Routes>
                <Route path='/survey/:id' element={<Forms />} />
                <Route path='/survey/3' element={<Form3/>} />
                <Route path='*' element={<Navigate to='/survey/1'/>}/>
            </Routes>
        )
    }

    return (
        <Routes>
            <Route path='/' element={<></>}/>
        </Routes>
    )

}
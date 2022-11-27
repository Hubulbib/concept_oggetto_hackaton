import React, {useContext, useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom';
import {routes} from './routers/Router';
import {Context} from './index';
import {observer} from "mobx-react-lite";

function App() {

  const { AuthStore: {checkAuth, isAuth, isSurveyExists} } = useContext(Context)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      checkAuth()
    }
  }, [checkAuth])

  useEffect(() => {}, [isSurveyExists])

  return (
    <BrowserRouter>
      {routes(isAuth, isSurveyExists)}
    </BrowserRouter>
  );
}

export default observer(App);

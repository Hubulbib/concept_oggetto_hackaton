import React from 'react';
import Auth from './pages/auth/Auth';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Form
} from "react-router-dom";
import Forms from './pages/form/Forms';

function App() {
  return (
    <Forms />
  );
}

export default App;

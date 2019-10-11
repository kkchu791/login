import React, { useState, useEffect } from 'react';
import './styles/authform.css';
import AuthToggle from './AuthToggle'
import SignUpForm from './SignUpForm'
import LogInForm from './LogInForm'


const AUTH_VIEWS = {
  1: 'signUp',
  2: 'logIn'
}

const AuthForm = () => {

  const [view, setView] = useState(1);

  const handleChange = evt => {
    setView(evt.target.value);
  }

  useEffect(() => {
  },[view]);

  return (
    <div className="container">
      <div className="auth-form">

        <AuthToggle
          handleChange={handleChange}
          view={view}
        />

        { AUTH_VIEWS[view] === "logIn" ? <LogInForm /> : <SignUpForm /> }

      </div>
    </div>
  )
}

export default AuthForm;

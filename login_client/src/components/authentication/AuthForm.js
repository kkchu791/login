import React, { useState, useEffect } from 'react';
import './styles/authform.css';
import AuthToggle from './AuthToggle'
import SignUpForm from './SignUpForm'
import LogInForm from './LogInForm'

const AUTH_VIEWS = {
  SIGNUP: 'signup',
  LOGIN: 'login',
  SUCCESS: 'success',
}

const AuthForm = ({ handleSuccessfulAuth }) => {
  const [view, setView] = useState(AUTH_VIEWS.SIGNUP);
  const [errors, setErrors] = useState([]);

  const handleViewChange = evt => {
    setView(AUTH_VIEWS[evt.target.value]);
    setErrors([])
  }

  return (
    <div className="container">
      <div className="auth-form">
        <div>
          <AuthToggle
            handleViewChange={handleViewChange}
            view={view}
          />
          { view === "login" ? 
            <LogInForm
              errors={errors}
              handleSuccessfulAuth={handleSuccessfulAuth}
            /> 
            : 
            <SignUpForm
              errors={errors}
              handleSuccessfulAuth={handleSuccessfulAuth}
            /> 
          }
        </div>
      </div>
    </div>
  )
}

export default AuthForm;

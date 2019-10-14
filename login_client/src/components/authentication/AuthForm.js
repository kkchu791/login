import React, { useState, useEffect } from 'react';
import './styles/authform.css';
import AuthToggle from './AuthToggle'
import SignUpForm from './SignUpForm'
import LogInForm from './LogInForm'
import SuccessTemplate from './SuccessTemplate'
import { checkLoggedInApi } from '../../api/userAuth.api.js'

const AUTH_VIEWS = {
  1: 'signUp',
  2: 'logIn',
  3: 'successTemplate',
}

const AuthForm = () => {

  const [view, setView] = useState(1);
  const [loggedInStatus, setLoggedInStatus] = useState("NOT_LOGGED_IN");
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState([])

  const handleSuccessfulAuth = (result) => {
    if (result.data.logged_in && loggedInStatus === "NOT_LOGGED_IN") {
      setView(3)
      setUser(result.data.user)
      setLoggedInStatus("LOGGED_IN")
    } else if (!result.data.logged_in && loggedInStatus === "LOGGED_IN") {
      setLoggedInStatus("NOT_LOGGED_IN")
      setUser({})
    } else if (result.data.error) {
      setErrors(result.data.error)
    }
  }

  const handleViewChange = evt => {
    setView(parseInt(evt.target.value));
    setErrors([])
  }

  const handleLogOut = (result) => {
    if (result.data.logged_out) {
      setView(2)
      setUser({})
      setLoggedInStatus("NOT_LOGGED_IN")
    }
  };

  useEffect(() => {
    const handleCheckLoggedIn = async () => {
      let result = await checkLoggedInApi();
      handleSuccessfulAuth(result)
    };

    handleCheckLoggedIn();
  },[view, user, loggedInStatus, errors]);

  let form;
  if (loggedInStatus === "LOGGED_IN") {
    form = <SuccessTemplate
              user={user}
              handleLogOut={handleLogOut}
            />
  } else {
    form = (
      <div>
        <AuthToggle
          handleViewChange={handleViewChange}
          view={view}
        />

        { AUTH_VIEWS[view] === "logIn" ? 
          <LogInForm
            errors={errors}
            handleSuccessfulAuth={handleSuccessfulAuth}
            handleViewChange={handleViewChange}
          /> 
          : 
          <SignUpForm
            errors={errors}
            handleSuccessfulAuth={handleSuccessfulAuth}
          /> 
        }
      </div>
    )
  }

  return (
    <div className="container">
      <div className="auth-form">

        {form}

      </div>
    </div>
  )
}

export default AuthForm;

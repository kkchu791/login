import React, { useState } from 'react';
import './styles/authform.css';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { login }  from '../../api/userAuth.api.js'

const LogIn = ({
  errors,
  handleSuccessfulAuth
}) => {
  const [data, setData] = useState({})

  const handleSubmit = async (event) => {
    event.preventDefault();
    handleSuccessfulAuth(await login(data));
  };

  const handleInputChange = evt => {
    var value = evt.target.value
    var name = evt.target.name
    setData({...data, ...{[name]: value}})
  }

  const renderErrors = () => {
    if (errors.length > 0) {
      return (
        <div className="alert alert-danger" role="alert">
          {errors.map((error, index) => {
            return (
              <div key={index}>{error}</div>
            )
          })}
        </div>
      )
    }
  }

  return (
    <div className="log-in-form">
      <div className="log-in-message">
        Welcome Back!
      </div>

      { renderErrors() }
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formGridEmail">
          <Form.Control
            onChange={handleInputChange}
            name="email"
            type="email"
            placeholder="Email Address*"
            required
          />
        </Form.Group>

        <Form.Group controlId="formGridPassword">
          <Form.Control
            onChange={handleInputChange}
            name="password"
            type="password"
            placeholder="Password*"
            required
          />
        </Form.Group>

        <div className="forgot-password-row">
          <Button
            className="forgot-password-link"
            variant="link"
            onClick={() => console.log("trigger forgot password")}
          >
            Forgot Password?
          </Button>
        </div>

        <div className="actions">
          <Button
            className="submit-btn"
            variant="secondary"
            type="submit"
          >
            Log In
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default LogIn;

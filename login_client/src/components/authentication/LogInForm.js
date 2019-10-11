import React from 'react';
import './styles/authform.css';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const LogIn = () => {
  return (
    <div className="log-in-form">
      <div className="log-in-message">
        Welcome Back!
      </div>

      <Form>
        <Form.Group controlId="formGridEmail">
          <Form.Control type="email" placeholder="Email Address*" />
        </Form.Group>

        <Form.Group controlId="formGridPassword">
          <Form.Control type="password" placeholder="Set A Password*" />
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
          <Button className="submit-btn" variant="secondary" type="submit">
            Log In
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default LogIn;

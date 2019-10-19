import React, { useState }  from 'react';
import './styles/authform.css';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import { signup } from '../../api/userAuth.api.js'

const SignUpForm = ({
  errors,
  handleSuccessfulAuth
}) => {
  const [data, setData] = useState({})

  const handleSubmit = async (event) => {
    event.preventDefault();
    handleSuccessfulAuth(await signup(data));
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
    <div className="sign-up-form">
      <div className="sign-up-message">
        Sign Up for Free
      </div>

      { renderErrors() }

      <Form onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridFirstname">
            <Form.Control
              onChange={handleInputChange}
              name="first_name"
              type="first_name"
              placeholder="First Name*"
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Control
              onChange={handleInputChange}
              name="last_name"
              type="last_name"
              placeholder="Last Name*"
              required
            />
          </Form.Group>
        </Form.Row>

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
            placeholder="Set A Password*"
            required
          />
        </Form.Group>

        <div className="actions">
          <Button className="submit-btn" variant="secondary" type="submit">
            Get Started
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default SignUpForm;

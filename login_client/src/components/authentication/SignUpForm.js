import React, { useState }  from 'react';
import './styles/authform.css';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import signUpApi from '../../api/userAuth.api.js'

const SignUpForm = () => {
  console.log(signUpApi, 'signUpApi')
  const [data, setData] = useState({})

  const handleSubmit = event => {
    event.preventDefault();
    console.log(data, "data");
    signUpApi(data)
  };

  const handleInputChange = evt => {
    var value = evt.target.value
    var name = evt.target.name
    setData({...data, ...{[name]: value}})
  }

  console.log(data, 'data')

  return (
    <div className="sign-up-form">
      <div className="sign-up-message">
        Sign Up for Free
      </div>

      <Form onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridFirstname">
            <Form.Control
              onChange={handleInputChange}
              name="first_name"
              type="first_name"
              placeholder="First Name*"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Control
              onChange={handleInputChange}
              name="last_name"
              type="last_name"
              placeholder="Last Name*"
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridEmail">
          <Form.Control
            onChange={handleInputChange}
            name="email"
            type="email"
            placeholder="Email Address*" />
        </Form.Group>

        <Form.Group controlId="formGridPassword">
          <Form.Control
            onChange={handleInputChange}
            name="password"
            type="password"
            placeholder="Set A Password*" />
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

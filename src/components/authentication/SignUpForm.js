import React from 'react';
import './styles/authform.css';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

const SignUpForm = () => {
  return (
    <div className="sign-up-form">
      <div className="sign-up-message">
        Sign Up for Free
      </div>
      
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridFirstname">
            <Form.Control type="first_name" placeholder="First Name*" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Control type="last_name" placeholder="Last Name*" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridEmail">
          <Form.Control type="email" placeholder="Email Address*" />
        </Form.Group>

        <Form.Group controlId="formGridPassword">
          <Form.Control type="password" placeholder="Set A Password*" />
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

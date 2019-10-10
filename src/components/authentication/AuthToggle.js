import React, {useState} from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

const AuthToggle = ({
  handleChange,
  view,
}) => {
  return (
    <div className="auth-toggle">
      <ButtonGroup className="view-buttons">
        <Button
          variant="secondary"
          className={`sign-up-btn ${view === "2"? '' : 'active' }`}
          onClick={handleChange}
          size="lg"
          type="radio"
          name="radio"
          value="1"
        >
          Sign Up
        </Button>
        <Button
          variant="secondary"
          className={`log-in-btn ${view === "2" ? 'active' : '' }`}
          onClick={handleChange}
          size="lg"
          type="radio"
          name="radio"
          value="2"
        >
          Log In
        </Button>
      </ButtonGroup>
    </div>
  )
}

export default AuthToggle;

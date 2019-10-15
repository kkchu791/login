import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

const AuthToggle = ({
  handleViewChange,
  view,
}) => {
  return (
    <div className="auth-toggle">
      <ButtonGroup className="view-buttons">
        <Button
          variant="secondary"
          className={`sign-up-btn ${view === 'login'? '' : 'active' }`}
          onClick={handleViewChange}
          size="lg"
          type="radio"
          name="radio"
          value="SIGNUP"
        >
          Sign Up
        </Button>
        <Button
          variant="secondary"
          className={`log-in-btn ${view === 'login' ? 'active' : '' }`}
          onClick={handleViewChange}
          size="lg"
          type="radio"
          name="radio"
          value="LOGIN"
        >
          Log In
        </Button>
      </ButtonGroup>
    </div>
  )
}

export default AuthToggle;

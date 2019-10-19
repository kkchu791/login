
import React  from 'react';
import './styles/authform.css';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { logout } from '../../api/userAuth.api.js'

const SuccessTemplate = ({
  user,
  handleSuccessfulAuth,
}) => {

  const handleSubmit = async (event) => {
    event.preventDefault();
    await logout()
    handleSuccessfulAuth({ logged_in: false, user: {} });
  };

  return (
    <div className="success-template">
      <Form onSubmit={handleSubmit}>
        <div className="log-out-message">
          You have successfully logged in as {user.email}.
        </div>

        <div className="actions">
          <Button
            className="submit-btn"
            variant="secondary"
            type="submit"
          >
            Log Out
          </Button>
        </div>
      </Form>
    </div>

  )
}

export default SuccessTemplate;
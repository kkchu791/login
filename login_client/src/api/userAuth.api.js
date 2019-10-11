import React from 'react';
import axios from 'axios';

const logInApi = (username, password) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  };

  axios.post(`localhost:3001/api/v1/sessions`, { requestOptions })
      .then(res => {
        console.log(res)
      })
}

const signUpApi = ({first_name, last_name, email, password}) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
    },
    body: {
      first_name,
      last_name,
      email,
      password
    }
  };

  axios.post(`http://localhost:3001/api/v1/users`, { requestOptions })
      .then(res => {
        console.log(res)
      })
}

export default signUpApi

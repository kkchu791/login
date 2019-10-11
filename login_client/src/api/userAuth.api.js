import axios from 'axios';

// const logInApi = (username, password) => {
//   const requestOptions = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       username,
//       password
//     })
//   };
//
//   axios.post(`localhost:3001/api/v1/sessions`, { requestOptions })
//       .then(res => {
//         console.log(res)
//       })
// } ///

const signUpApi = ({first_name, last_name, email, password}) => {
  const data = {
    first_name,
    last_name,
    email,
    password
  }

  return axios.post(`http://localhost:3001/api/v1/users`, data)
      .then(res => {
        if (res.data.data === 'success') {
          return `${first_name}, you've successfully signed up! Try logging in.`
        } else {
          return res.error
        }
      })
}

export default signUpApi

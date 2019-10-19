import axios from 'axios';
import API_BASE_URL from '../config/url_config'

//const API_BASE_URL = "http://localhost:3001"
const signUpApi = ({first_name, last_name, email, password}) => {
  const data = {
    first_name,
    last_name,
    email,
    password
  }
  
  return axios.post(`${API_BASE_URL}/api/v1/signup`, data, {withCredentials: true})
      .then(res => {
        return res;
      })
      .catch(error => {
        console.log("error", error);
      })
}

const logInApi = ({email, password}) => {
  const data = {
      email,
      password,
  }

  return axios.post(`${API_BASE_URL}/api/v1/login`, data, {withCredentials: true})
      .then(res => {
        return res;
      })
      .catch(error => {
        console.log("error", error);
      })
}

const checkLoggedInApi = () => {
  return axios.get(`${API_BASE_URL}/api/v1/logged_in`, {withCredentials: true})
      .then(res => {
        return res;
      })
      .catch(error => {
        console.log("error", error);
      })
}

const logOutApi = () => {
  return axios.delete(`${API_BASE_URL}/api/v1/logout`, {withCredentials: true})
      .then(res => {
        return res
      })
}


export {
  signUpApi,
  logInApi,
  checkLoggedInApi,
  logOutApi,
};

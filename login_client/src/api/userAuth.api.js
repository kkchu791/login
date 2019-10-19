import axios from 'axios';
import API_BASE_URL from '../config/url_config'

const baseLoginApi = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true
});

export const signup = ({
  first_name,
  last_name,
  email,
  password
}) => {
  return baseLoginApi
    .post('api/v1/signup', {
      first_name,
      last_name,
      email,
      password
    })
    .then(({ data }) => data);
}

export const login = ({ email, password }) => baseLoginApi
  .post('api/v1/login', { email, password })
  .then(({ data }) => data);

export const isLoggedIn = () => baseLoginApi.get('api/v1/logged_in')
  .then(({ data }) => data);

export const logout = () => baseLoginApi.delete('api/v1/logout')
  .then(({ data }) => data);

// export const isLoggedIn = () => Promise.resolve({ logged_in: true, user: { email: 'sfd' }})
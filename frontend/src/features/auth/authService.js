import customFecth from '../../utils/axios';
import axios from 'axios';

const register = async (userData) => {
  console.log('userdata register', userData);

  const response = await axios.post('api/v1/auth/register', userData);
  // const response = await customFecth.post('auth/register', userData);
  if (response.data) {
    return response.data;
  }
  console.log('response.data- regsister------------->', response.data);
};

const login = async (userData) => {
  console.log('userdata login', userData);

  const response = await customFecth.post('auth/login', userData);
  if (response.data) {
    console.log('response  authservice 23', response);
  }
  return response.data;
};

const authService = {
  register,
  login
};
export default authService;

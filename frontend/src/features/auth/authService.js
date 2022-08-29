// import configAxios from '../../api/configAxios';
import axios from 'axios';
const API_URL = 'http://localhost:8000/api/v1/auth/register';
const axiosConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*'
  }
};

const register = async (userData) => {
  const response = await axios.post(API_URL, axiosConfig, userData);
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};
const authService = {
  register
};
export default authService;
